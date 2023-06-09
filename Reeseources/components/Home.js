import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
  Dimensions,
} from 'react-native';

import BraveButton from './BraveButton';
import BraveSpotlight from './BraveSpotlight';
import Logo from './Logo';
import MissionButton from './MissionButton';
import PledgeButton from './PledgeButton';
import ProgramButton from './ProgramButton';

export default function Home({navigation}) {
  return (
    <ScrollView>
      <View style={styles.libraryButtonContainer}>
        <Pressable onPress={() => navigation.navigate('BookList')}>
          <Image
            source={require('../assets/icons8-bookshelf-100.png')}
            style={{width: 50, height: 50, borderRadius: 15}}
          />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Activities')}>
          <Image
            source={require('../assets/icons8-crayon-100.png')}
            style={{width: 50, height: 50, borderRadius: 15}}
          />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('HelpScreen')}>
          <Image
            source={require('../assets/icons8-danger-100.png')}
            style={{width: 50, height: 50, borderRadius: 15}}
          />
        </Pressable>
      </View>
      <View style={styles.container}>
        <View style={styles.helpButtonContainer}></View>
        <Logo />
        <View style={styles.buttonContainer1}>
          <Pressable
            onPress={() =>
              navigation.navigate('PDF', {
                selectedPage: '../assets/PDFs/Mission.pdf',
                selectedPDF: require('../assets/PDFs/Mission.pdf'),
              })
            }>
            <MissionButton />
          </Pressable>
          <Pressable
            onPress={() =>
              navigation.navigate('PDF', {
                selectedPage: '../assets/PDFs/Program.pdf',
                selectedPDF: require('../assets/PDFs/Program.pdf'),
              })
            }>
            <ProgramButton />
          </Pressable>
        </View>

        <View style={styles.buttonContainer2}>
          <Pressable
            onPress={() =>
              navigation.navigate('PDF', {
                selectedPage: '../assets/PDFs/BRAVE.pdf',
                selectedPDF: require('../assets/PDFs/BRAVE.pdf'),
              })
            }>
            <BraveButton />
          </Pressable>
          <Pressable
            onPress={() =>
              navigation.navigate('PDF', {
                selectedPage: '../assets/PDFs/Pledge.pdf',
                selectedPDF: require('../assets/PDFs/Pledge.pdf'),
              })
            }>
            <PledgeButton />
          </Pressable>
        </View>
        <Image
          source={require('../assets/brave-logo2x.png')}
          style={{width: 325, height: 125, marginTop: 30}}
        />
        <BraveSpotlight />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  libraryButtonContainer: {
    backgroundColor: '#96C5FC',
    paddingTop: 55,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  container: {
    paddingTop: 15,
    backgroundColor: '#96C5FC',
    padding: 15,
    alignItems: 'center',
  },
  buttonContainer1: {
    flexDirection: 'row',
    width: 370,
    height: 150,
    justifyContent: 'space-evenly',
    padding: 5,
  },
  buttonContainer2: {
    flexDirection: 'row',
    width: 370,
    height: 150,
    justifyContent: 'space-evenly',
    padding: 5,
  },
  helpButton: {
    height: 30,
    width: Dimensions.get('window').width / 4,
    backgroundColor: '#CAE2FE',
    borderRadius: 45,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#7C97CE',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Gabriela-Regular',
  },
});
