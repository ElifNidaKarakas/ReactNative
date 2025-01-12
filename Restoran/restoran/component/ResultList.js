import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import ResultDetail from "./ResultDetail";
import { useNavigation } from "@react-navigation/native";
useNavigation

export default function ResultsList({ title, results }) {
  const navigation= useNavigation()
  //biz restorantları pahalı ucuz orta olarak sınıflandıracagımız için listeleme işlemi yaptık
  console.log(results);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList //arrayi içindeki elemanları dönme işlemini yapıyıruz ,kaydırma işlemi yapar
        horizontal //resimlerin yan yana gelmesini sağlar
        showsHorizontalScrollIndicator={false}
        data={results}
        renderItem={({ item }) => {
          //her elemanın gelmesi için
          // <TouchableOpacity> elemanlara tıklamamızı sağlar
          return (
            <TouchableOpacity onPress={()=>navigation.navigate('ResaultShow',{
              id: item.id
            })}>
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold", //yazı kalınlığı
    marginLeft: 15,
    marginBottom: 5,
  },
});
