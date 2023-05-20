import * as React from 'react';

import { Text, View, StyleSheet, Dimensions } from 'react-native';


export default function BraveButton() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Be B.R.A.V.E.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: (Dimensions.get('window').height)/6.5,
    backgroundColor: '#CAE2FE',
    borderRadius: 45,
    justifyContent: 'center',
  },
  paragraph: {
    alignItems: 'center',
    color: '#7C97CE',
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Gabriela-Regular',
    lineHeight: 30.74,
  },
});
