import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function DesignScreen() {
  return (
    <View style={styles.mainView}>
      <Text style={styles.mainText}>Layout_1</Text>
      <Text style={styles.mainText}>Layout_2</Text>
      <Text style={styles.mainTextOne}>Layout_3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    borderWidth: 1,
    borderColor: "black",
    margin: 20,
    borderRadius: 20, //kenarları yuvarlama işlemi yapar
    //alignItems:'center',//'flex-start': sağga  , center: ortalama, flex-end:sola hizalam //yatay hizalama
    // flexDirection: 'row',//ortaya hizalama row , flex hizlaamaya sağlar
    //justifyContent:'flex-start',  //alt alta hizalar üstten
    height: 500,
  },
  mainText: {
    borderWidth: 1,
    borderColor: "red",
    margin: 10, //dıstaki cerceve ile arasını açar
    padding: 20,
    borderRadius: 10,
    // marginHorizontal: 30, //  dıstaki cerceve ile arasını alttan ustten açar
    // marginVertical: 30, //dıstaki cerceve ile arasını açar sağdan ve soldan
    // paddingHorizontal: 20,
    // paddingVertical: 20,
    // flex:2 //yüzde kaclık kısmı kaplayacağını belireler diğeri 5 bu iki yüzdelik olarak belirlenir %100 üzerinde
  },
  mainTextOne: {
    borderWidth: 1,
    borderColor: "green",
   // margin: 10, //dıstaki cerceve ile arasını açar
    padding: 20,
    borderRadius: 10,
    //flex:5
    alignSelf:'flex-end',//sona doğru hizalama yapar , center:ortalar,flex-start: sağa doğru hizalar
    //top:50, //yukarıdan 50 birim kayar
    //left:20, //soldan kayar
    //right:15, //sağdan kayar
    //bottom:10,//asağıdan yukarıya doğru kayar
    position:'absolute',
    top:20,
    right:0,
    left:0
  },
});
