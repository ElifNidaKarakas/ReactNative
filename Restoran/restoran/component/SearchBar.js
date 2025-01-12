import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function SearchBar() {
  return (
    <View style={styles.backgroundStyle}>
      <AntDesign
        style={styles.iconStyle}
        name="search1"
        size={30}
        color="black"
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Ara"  //yazı yazmazsak görünecek text
        autoCorrect={false}  //yazı önermeyi engeller
        autoCapitalize="none" //büyük harfle başlamayı kapatır
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'lightgray', //arama çubuğu rengi 
    flexDirection: 'row',   //icon ile yazı yan yana gelir
    margin: 10,
    height: 50,
    alignItems: 'center', 
    borderRadius: 20,  
  },
  iconStyle: {
    marginHorizontal: 15, //sağdan ve soldan açar arama çubuğunu
  },
  inputStyle: {
    flex: 1, //inputu olduğu gibi kaplar
    fontSize: 18, //yazı bouyutu
  },
});
