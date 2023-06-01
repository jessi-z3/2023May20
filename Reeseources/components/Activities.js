import React from "react";

import {SafeAreaView, ScrollView, View, Text, Pressable, Dimensions, StyleSheet} from 'react-native';

import QuizeSingleChoice from 'react-native-react-native-quiz-single-choice';


export default function Activities({navigation, navigation: {goBack}}){
      
    return (
      <SafeAreaView style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <ScrollView>
            <Pressable onPress={() => navigation.navigate('Quiz')}>
              <Text style={styles.activityText}>Take the Quiz</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Coloring')}>
              <Text style={styles.activityText}>Coloring Pages</Text>
            </Pressable>
          </ScrollView>
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
    justifyContent: 'center',
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
    paddingTop: 20,
    textDecorationLine: 'underline',
  },
});