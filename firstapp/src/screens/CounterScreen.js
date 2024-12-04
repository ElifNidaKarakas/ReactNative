import { Button, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'

export default function CounterScreen() {
    const [counter, setCounter] = useState(0) //useState bizim başlangıç değerimizi verir
  return (
    <View>
      <Button title='Arttır' onPress={()=>{
        setCounter(counter+1);
      }}/>
      <Button title='Azalt' onPress={()=>{
           setCounter(counter-1);
      }}/>
      <Text>SAYI:{counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})