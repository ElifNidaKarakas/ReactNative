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
       <Button
        title="RENK DEĞİŞTİRME UYGULAMASI"
        onPress={() => navigation.navigate("Renk")}
      />
       <Button
        title="ŞİFRE EKRANI "
        onPress={() => navigation.navigate("Sifre")}
      />
        <Button
        title="DESIGN EKRANI "
        onPress={() => navigation.navigate("Design")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
