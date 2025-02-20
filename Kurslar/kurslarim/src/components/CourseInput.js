import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TextInput,
  Button,
} from 'react-native';
import React, { useState } from 'react';

// CourseInput bileşeni, yeni kurs eklemek için bir giriş alanı sağlar
export default function CourseInput({ visible, onAddCourse, onCancel }) {
  // Kullanıcının girdiği metni saklamak için state
  const [enteredCourseText, setEnteredCourseText] = useState('');

  // Kurs ekleme işlemi
  const addCourseHandler = () => {
    onAddCourse(enteredCourseText); // Ana bileşene girilen kursu gönder
    setEnteredCourseText(''); // Giriş alanını temizle
  };

  return (
    // Modal bileşeni, giriş ekranını açılır pencere şeklinde gösterir
    <Modal animationType="slide" visible={visible}>
      <View style={styles.inputContainer}>
        {/* Logo resmi */}
        <Image
          style={styles.image}
          source={require('../assets/images/cblogo.png')}
        />
        {/* Kullanıcının yeni kurs adını gireceği alan */}
        <TextInput
          style={styles.textInput}
          placeholder="Yeni Kurs Ekle!"
          value={enteredCourseText}
          onChangeText={(text) => setEnteredCourseText(text)}
        />
        {/* Butonların bulunduğu kapsayıcı */}
        <View style={styles.buttonContainer}>
          {/* İptal butonu */}
          <View style={styles.button}>
            <Button title="İptal Et" color="red" onPress={onCancel} />
          </View>
          {/* Ekle butonu */}
          <View style={styles.button}>
            <Button title="Ekle" color="blue" onPress={addCourseHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

// Stiller
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1, // Tüm ekranı kaplasın
    justifyContent: 'center', // Dikey hizalama
    alignItems: 'center', // Yatay hizalama
    backgroundColor: 'gray', // Arka plan rengi
    padding: 15, // Kenarlardan boşluk bırak
  },
  image: {
    width: 150, // Genişlik
    height: 150, // Yükseklik
    borderRadius: 20, // Köşeleri yuvarlat
    margin: 20, // Dış boşluk
  },
  textInput: {
    borderWidth: 1, // Kenarlık kalınlığı
    width: '100%', // Genişlik tüm alanı kaplasın
    padding: 10, // İç boşluk
    borderRadius: 10, // Köşeleri yuvarlat
    backgroundColor: 'pink', // Arka plan rengi
    borderColor: 'pink', // Kenarlık rengi
  },
  buttonContainer: {
    flexDirection: 'row', // Butonları yatay hizala
    marginTop: 15, // Üst boşluk bırak
  },
  button: {
    width: 100, // Buton genişliği
    marginHorizontal: 8, // Yatay boşluk
  },
});
