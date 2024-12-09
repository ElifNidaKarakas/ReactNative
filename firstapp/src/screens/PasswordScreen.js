import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

export default function PasswordScreen() {
  const [password, setPassword] = useState('');
  return (
    <View style={styles.main}>
      <Text>Şifrenizi Giriniz:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password} //şifrenin uzunluk değerini value değeri ile alabiliriz
        onChangeText={(newValue) => setPassword(newValue)} //Ekranda yazan değeri set işlemi ile value değerine atarız
      />
      {password.length<6?(
        <Text>Şifre en az 6 karakter olmalıdır.</Text>
      ): null}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    margin: 10,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});
