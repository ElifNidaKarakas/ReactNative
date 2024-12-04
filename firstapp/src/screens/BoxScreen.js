import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import React, { useState } from 'react';
//RASTGELE RENKLERDE KUTU EKLİYOR BUTONA TIKLADIKÇA
export default function BoxScreen() {
  const [colors, setColors] = useState([]);

  const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  };
  return (
    <View>
      <Button
        title="Kutu Ekle"
        onPress={() => {
          setColors([...colors, randomColor()]); //...color= var olan elemanım devam etsin  randomColor=yanına yeni renkler getir(return ile dönen )
        }}
      />
      <FlatList
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 150,
                width: 150,
                backgroundColor: item,
                marginVertical: 20,
              }}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
