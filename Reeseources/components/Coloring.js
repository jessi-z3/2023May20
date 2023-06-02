import React from "react";

import { SafeAreaView, View, ScrollView, Image, StyleSheet, Dimensions, Pressable, Text} from "react-native";


export default function Coloring({navigation, navigation: {goBack}}) {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.activityText}>Coloring Pages</Text>
          <View style={styles.innerContainer}>
            <Pressable
              onPress={() =>
                navigation.navigate('ColoringPage', {
                  selectedPage: '../assets/PDFs/Kindness1-1.pdf',
                  selectedPDF: require('../assets/PDFs/Kindness1-1.pdf'),
                })
              }>
              <Image
                source={require('../assets/Kindness1-1.jpg')}
                style={styles.thumbnail}
              />
            </Pressable>
            <Pressable
              onPress={() =>
                navigation.navigate('ColoringPage', {
                  selectedPage: '../assets/PDFs/Kindness1-2.pdf',
                  selectedPDF: require('../assets/PDFs/Kindness1-2.pdf'),
                })
              }>
              <Image
                source={require('../assets/Kindness1-2.jpg')}
                style={styles.thumbnail}
              />
            </Pressable>
          </View>
          <View style={styles.innerContainer}>
            <Pressable
              onPress={() =>
                navigation.navigate('ColoringPage', {
                  selectedPage: '../assets/PDFs/Kindness1-3.pdf',
                  selectedPDF: require('../assets/PDFs/Kindness1-3.pdf'),
                })
              }>
              <Image
                source={require('../assets/Kindness1-3.jpg')}
                style={styles.thumbnail}
              />
            </Pressable>
            <Pressable
              onPress={() =>
                navigation.navigate('ColoringPage', {
                  selectedPage: '../assets/PDFs/Kindness2-1.pdf',
                  selectedPDF: require('../assets/PDFs/Kindness2-1.pdf'),
                })
              }>
              <Image
                source={require('../assets/Kindness2-1.jpg')}
                style={styles.thumbnail}
              />
            </Pressable>
          </View>
          <View style={styles.innerContainer}>
            <Pressable
              onPress={() =>
                navigation.navigate('ColoringPage', {
                  selectedPage: '../assets/PDFs/Kindness2-2.pdf',
                  selectedPDF: require('../assets/PDFs/Kindness2-2.pdf'),
                })
              }>
              <Image
                source={require('../assets/Kindness2-2.jpg')}
                style={styles.thumbnail}
              />
            </Pressable>
            <Pressable
              onPress={() =>
                navigation.navigate('ColoringPage', {
                  selectedPage: '../assets/PDFs/Kindness2-3.pdf',
                  selectedPDF: require('../assets/PDFs/Kindness2-3.pdf'),
                })
              }>
              <Image
                source={require('../assets/Kindness2-3.jpg')}
                style={styles.thumbnail}
              />
            </Pressable>
          </View>
          <View style={styles.innerContainer}>
            <Pressable
              onPress={() =>
                navigation.navigate('ColoringPage', {
                  selectedPage: '../assets/PDFs/Kindness2-4.pdf',
                  selectedPDF: require('../assets/PDFs/Kindness2-4.pdf'),
                })
              }>
              <Image
                source={require('../assets/Kindness2-4.jpg')}
                style={styles.thumbnail}
              />
            </Pressable>
            <Pressable
              onPress={() =>
                navigation.navigate('ColoringPage', {
                  selectedPage: '../assets/PDFs/Kindness2-5.pdf',
                  selectedPDF: require('../assets/PDFs/Kindness2-5.pdf'),
                })
              }>
              <Image
                source={require('../assets/Kindness2-5.jpg')}
                style={styles.thumbnail}
              />
            </Pressable>
          </View>
          <View style={styles.innerContainer}>
            <Pressable
              onPress={() =>
                navigation.navigate('ColoringPage', {
                  selectedPage: '../assets/PDFs/Kindness2-6.pdf',
                  selectedPDF: require('../assets/PDFs/Kindness2-6.pdf'),
                })
              }>
              <Image
                source={require('../assets/Kindness2-6.jpg')}
                style={styles.thumbnail}
              />
            </Pressable>
            <Pressable
              onPress={() =>
                navigation.navigate('ColoringPage', {
                  selectedPage: '../assets/PDFs/Kindness2-7.pdf',
                  selectedPDF: require('../assets/PDFs/Kindness2-7.pdf'),
                })
              }>
              <Image
                source={require('../assets/Kindness2-7.jpg')}
                style={styles.thumbnail}
              />
            </Pressable>
          </View>
          <View style={styles.innerContainer}>
            <Pressable
              onPress={() =>
                navigation.navigate('ColoringPage', {
                  selectedPage: '../assets/PDFs/Kindness2-8.pdf',
                  selectedPDF: require('../assets/PDFs/Kindness2-8.pdf'),
                })
              }>
              <Image
                source={require('../assets/Kindness2-8.jpg')}
                style={styles.thumbnail}
              />
            </Pressable>
            <Pressable
              onPress={() =>
                navigation.navigate('ColoringPage', {
                  selectedPage: '../assets/PDFs/Kindness2-9.pdf',
                  selectedPDF: require('../assets/PDFs/Kindness2-9.pdf'),
                })
              }>
              <Image
                source={require('../assets/Kindness2-9.jpg')}
                style={styles.thumbnail}
              />
            </Pressable>
          </View>
          <View style={styles.innerContainer}>
            <Pressable
              onPress={() =>
                navigation.navigate('ColoringPage', {
                  selectedPage: '../assets/PDFs/Kindness2-10.pdf',
                  selectedPDF: require('../assets/PDFs/Kindness2-10.pdf'),
                })
              }>
              <Image
                source={require('../assets/Kindness2-10.jpg')}
                style={styles.thumbnail}
              />
            </Pressable>
          </View>
        </ScrollView>
      </View>
      <View style={styles.backButtonContainer}>
        <Pressable style={styles.backButton} onPress={() => goBack()}>
          <Text style={styles.backButtonText}>Back</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#96C5FC',
    alignItems: 'center',
  },
  outerContainer: {
    flex: 1,
    backgroundColor: '#96C5FC',
  },
  backButtonContainer: {
    backgroundColor: '#96C5FC',
    alignItems: 'flex-start',
    padding: 5,
  },
  innerContainer: {
    flexDirection: 'row',
  },
  thumbnail: {
    width: Dimensions.get('window').width / 2.25,
    margin: 5,
    flexDirection: 'row',
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