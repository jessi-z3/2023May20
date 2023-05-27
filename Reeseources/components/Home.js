import { ScrollView, View, StyleSheet, Image, Text, Pressable, Dimensions } from "react-native";

import BraveButton from "./BraveButton";
import BraveSpotlight from "./BraveSpotlight";
import Logo from "./Logo";
import MissionButton from "./MissionButton";
import PledgeButton from "./PledgeButton";
import ProgramButton from "./ProgramButton";

export default function Home({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.helpButtonContainer}>
          <View style={styles.helpButton}>
            <Pressable onPress={() => navigation.navigate('Help')}>
              <Text style={styles.buttonText}>Get Help</Text>
            </Pressable>
          </View>
        </View>
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
        <BraveSpotlight/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  helpButtonContainer:{
    alignItems: 'flex-end',
    paddingTop: 35,
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
