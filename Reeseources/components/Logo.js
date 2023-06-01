import { View, StyleSheet, Image } from 'react-native';

export default function Logo(){
  return(
    <View style={styles.outerEdge}>
    <Image source={require('../assets/Logo.png')}  style={{width: 250, height: 220}} />

    </View>
  )
}

const styles = StyleSheet.create({
  outerEdge:{
    alignItems: 'center',
    padding: 35,
  },
})