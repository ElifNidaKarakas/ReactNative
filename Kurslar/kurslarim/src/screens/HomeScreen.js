import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

// HomeScreen bileşeni, ana ekranı temsil eder
export default function HomeScreen({ navigation }) {
  // ANA SAYFA BİLEŞENİ
  return (
    <View
      style={{
        flex: 1, // Tüm ekranı kaplasın
        alignItems: "center", // İçeriği yatayda ortala
        justifyContent: "center", // İçeriği dikeyde ortala
      }}
    >
      {/* Ana ekran başlığı */}
      <Text>ANA EKRAN</Text>
    </View>
  );
}

// Stiller (şu an kullanılmıyor ama gerektiğinde eklenebilir)
const styles = StyleSheet.create({});
