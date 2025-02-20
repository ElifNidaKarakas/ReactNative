import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { useState } from 'react';
import CourseInput from './components/CourseInput'; // CourseInput bileşenini içe aktar

export default function App() {
  // Modalın görünürlüğünü kontrol eden state
  const [modalIsVisible, setModalIsVisible] = useState(false);
  // Eklenen kursları saklayan state
  const [courses, setCourses] = useState([]);

  // Modalı açan fonksiyon
  const startModal = () => {
    setModalIsVisible(true);
  };

  // Modalı kapatan fonksiyon
  const endModal = () => {
    setModalIsVisible(false);
  };

  // Yeni bir kurs ekleyen fonksiyon
  const addCourse = (courseTitle) => {
    setCourses((currentCourses) => [
      ...currentCourses, // Mevcut kursları koru
      { text: courseTitle, id: Math.random().toString() }, // Yeni kursu ekle
    ]);
    endModal(); // Kurs eklendikten sonra modalı kapat
  };

  return (
    <>
      {/* Durum çubuğunu ayarla */}
      <StatusBar style="light" />

      <View style={styles.container}>
        {/* Kurs ekleme butonu */}
        <Button title="Kurs Ekle" color="red" onPress={startModal} />

        {/* Modal içindeki CourseInput bileşeni */}
        <CourseInput
          visible={modalIsVisible}
          onAddCourse={addCourse}
          onCancel={endModal}
        />

        {/* Eklenen kursları listeleyen alan */}
        <View>
          <FlatList
            data={courses} // Kurs listesini ver olarak ata
            renderItem={({ item }) => (
              <View style={styles.courseItem}>
                <Text style={styles.courseText}>{item.text}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id} // Her öğeye benzersiz bir anahtar ver
          />
        </View>
      </View>
    </>
  );
}

// Stiller
const styles = StyleSheet.create({
  container: {
    flex: 1, // Tüm ekranı kaplasın
    backgroundColor: '#fff', // Arka plan rengi beyaz
    paddingTop: 50, // Üst boşluk
    paddingHorizontal: 20, // Yatay boşluk
  },
  courseItem: {
    backgroundColor: 'gray', // Kurs kutusunun rengi
    margin: 8, // Dış boşluk
    borderRadius: 5, // Köşeleri yuvarlat
  },
  courseText: {
    padding: 8, // İç boşluk
    color: 'white', // Yazı rengi beyaz
  },
});
