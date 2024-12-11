import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function PositionAbsolute() {
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <View style={{ width: '25%', height: '25%', backgroundColor: 'red' }} />
      <View
        style={{
          width: '25%',
          height: '25%',
          backgroundColor: 'blue',
          position: 'absolute',
          right: 0, //en sağda
          top: 0, //en üstte
        }}
      />
      <View
        style={{
          width: '25%',
          height: '25%',
          backgroundColor: 'green',
          position: 'absolute',
          left: 0, //en solda
          bottom: 0, //en altta
        }}
      />
      <View
        style={{
          width: '25%',
          height: '25%',
          backgroundColor: 'yellow',
          position: 'absolute',
          right: 0, //en sağda
          bottom: 0, //en altta
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
