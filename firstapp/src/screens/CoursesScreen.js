import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'


export default function CoursesScreen() {
  const courses= [
    {name:'Angular',id:1},
    {name:'React JS',id:2},
    {name:'C#',id:3},
    {name:'JAVA',id:4},
    {name:'Bootstrapt',id:5},
  ]
  return (
    <FlatList 
    data={courses}
    //horizontal
    //showsHorizontalScrollIndicator={false}
    keyExtractor={(item)=>item.id} //verilen her elamanın birbirinden farklı olduğu belirtiliyor
    renderItem={({item})=>{
      return <Text style={styles.content}>{item.name}</Text>
    }}></FlatList>
  )
}

const styles = StyleSheet.create({
  content:{
    fontSize:20,
    backgroundColor:'yellow',
    marginVertical:10,
    padding:20,

  },
});