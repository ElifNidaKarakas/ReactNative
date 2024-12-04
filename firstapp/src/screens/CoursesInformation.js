import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Information from '../../component/Information';

export default function CoursesInformation() {
  return (
    //aşagıya doğru kaymasını sağlar ekranın
    <ScrollView> 
      <Information title="React Eğitimi"
      imageSource={require('../../assets/indir.jpg')}
      desc= "KAPSAMLI REACT EĞİTİMİ"
      />
      <Information title="Angular Eğitimi"
      imageSource={require('../../assets/indir.png')}
      desc= "KAPSAMLI ANGULAR EĞİTİMİ"
      />
       <Information title="JAVA Eğitimi"
      imageSource={require('../../assets/indir (1).jpg')}
      desc= "KAPSAMLI JAVA EĞİTİMİ"
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({});