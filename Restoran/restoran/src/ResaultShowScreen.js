import { FlatList, StyleSheet, Text, View , Image} from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";


//id bilgilerine göre çekme ve resme tıklama
export default function ResaultShowScreen({ route }) {
  const [result, setResults] = useState(null);
  const id = route.params.id; //id değerini çekeriz
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResults(response.data);
  };

  useEffect(() => {
    //sayfanın sürekli istek atmaması için yaparız
    getResult(id);
  }, []);
  if (!result) {
    return null;
  }
  return (
    <View>
      <Text>{result.name}</Text>
      <Text>{result.phone}</Text>
      <FlatList
        data={result.photos}
        renderItem={({ item }) => {
          return <Image style={styles.image}
           source={{ uri: item }} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    image:{
        width:300, 
        height:150,
        marginLeft:10,
        marginBottom:10,
    }
});