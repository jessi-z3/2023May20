import React from "react";

import {SafeAreaView, ScrollView, View, Text, Pressable, Dimensions, StyleSheet} from 'react-native';

import QuizeSingleChoice from 'react-native-react-native-quiz-single-choice';


export default function Activities({navigation, navigation: {goBack}}){
      
    return (
      <SafeAreaView style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.activityText}>Activities</Text>
          <View style={styles.buttonContainer1}>
            <Pressable
              style={styles.container}
              onPress={() => navigation.navigate('Quiz')}>
              <Text style={styles.paragraph}>Quiz</Text>
            </Pressable>
            <Pressable
              style={styles.container}
              onPress={() => navigation.navigate('Coloring')}>
              <Text style={styles.paragraph}>Color</Text>
            </Pressable>
          </View>
        </View>
        <View style={{padding: 5}}>
          <Pressable style={styles.backButton} onPress={() => goBack()}>
            <Text style={styles.backButtonText}>Back</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );

}
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#96C5FC',
  },
  innerContainer: {
    flex: 1,
    padding: 15,
    justifyContent: 'flex-start',
  },
  backButton: {
    height: 30,
    width: Dimensions.get('window').width / 4,
    backgroundColor: '#CAE2FE',
    borderRadius: 45,
    justifyContent: 'center',
  },
  backButtonText: {
    color: '#7C97CE',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Gabriela-Regular',
  },
  activityText: {
    color: '#FFFFFF',
    fontSize: 45,
    textAlign: 'center',
    fontFamily: 'Dancing Script',
    fontWeight: 700,
    paddingTop: 20,
    textDecorationLine: 'underline',
    paddingBottom: 15,
  },
  container: {
    width: 160,
    height: 130,
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
  buttonContainer1: {
    flexDirection: 'row',
    width: 370,
    height: 150,
    justifyContent: 'space-evenly',
    padding: 5,
  },
});