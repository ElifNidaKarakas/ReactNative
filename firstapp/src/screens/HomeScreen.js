import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function HomeScreen({ navigation }) {
  //ANA SAYFADIR
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>ANA EKRAN</Text>
      <Button
        title="KURSLARIM"
        onPress={() => navigation.navigate("Kurslarim")}
      />
      <Button
        title="KURS BİLGİLERİM"
        onPress={() => navigation.navigate("KursBilgilerim")}
      />
      <Button
        title="SAYAC UYGULAMASI"
        onPress={() => navigation.navigate("Sayac")}
      />
      <Button
        title="KUTU UYGULAMASI"
        onPress={() => navigation.navigate("Kutu")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
