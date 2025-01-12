import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function ResultDetail({ result }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.images}
        source={result.image_url ? { uri: result.image_url } : null} //result.image_url ?  resim varsa ekrana bas yoksa boş gelsin
      />
      <Text style={styles.name}>{result.name}</Text>

      <Text>
        {result.rating} Yıldızlı Restoran , {result.review_count} Değerlendirme
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  images: {
    width: 250,
    height: 120,
    borderRadius: 8, //resim kenarına ovalik verir
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});
