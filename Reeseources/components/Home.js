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
          <Pressable onPress={() => navigation.navigate('MissionPage')}>
            <MissionButton />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Program')}>
            <ProgramButton />
          </Pressable>
        </View>
        <View style={styles.buttonContainer2}>
          <Pressable onPress={() => navigation.navigate('BRAVE')}>
            <BraveButton />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Pledge')}>
            <PledgeButton />
          </Pressable>
        </View>
        <Image
          source={require('../assets/brave-logo2x.png')}
          style={{width: 350, height: 150}}
        />
        <BraveSpotlight />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  libraryButtonContainer: {
    backgroundColor: '#96C5FC',
    paddingTop: 40,
    paddingLeft: 10,
    paddingRight:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    justifyContent: 'space-between',
    padding: 12,
  },
  buttonContainer2: {
    flexDirection: 'row',
    width: 370,
    height: 150,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
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
