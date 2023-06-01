import {
  StyleSheet,
  Dimensions,
  Share,
  View,
  Text,
  Alert,
  Pressable,
} from 'react-native';

import Pdf from 'react-native-pdf';

export default function ColoringPage({route, navigation: {goBack}}) {
    const selectedPage = route.params;
    const source = require('../assets/PDFs/Kindness1-1.pdf');
  const onShare = async () => {
    try {
      const shareOptions = {
        message: '',
        url: 'file://' + selectedPage,
      };
      Share.share(shareOptions)
        .then(result => {
          console.log(result);
        })
        .catch(error => {
          console.log(error);
          Alert.alert(error.message);
        });
    } catch (error) {
      console.log(error);
      Alert.alert(error.message);
    }
  };
  return (
    <>
      <Pdf source={source} style={styles.pdf} />
      <View style={styles.container}>
        <Pressable style={styles.buttons} onPress={() => goBack()}>
          <Text style={styles.text}>Back</Text>
        </Pressable>
        <Pressable style={styles.buttons} onPress={onShare}>
          <Text style={styles.text}>Share</Text>
        </Pressable>
      </View>
    </>
  );
}
export const styles = StyleSheet.create({
  pdf: {
    flex: 0.95,
    width: Dimensions.get('window').width,
    backgroundColor: '#96C5FC',
  },
  buttons: {
    height: 30,
    width: Dimensions.get('window').width / 4,
    backgroundColor: '#CAE2FE',
    borderRadius: 45,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  container: {
    flex: 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: '#96C5FC',
  },
  text: {
    color: '#7C97CE',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Gabriela-Regular',
  },
});
