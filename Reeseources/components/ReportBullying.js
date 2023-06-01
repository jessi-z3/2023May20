import {SafeAreaView, View, Text, TextInput, Pressable, StyleSheet, Dimensions} from 'react-native';
import React from 'react';


export default function ReportBullying({navigation: {goBack}}) {
  const [victim, onChangeVictim] = React.useState('');
  const [bully, onChangeBully] = React.useState('')
  const [location, onChangeLocation] = React.useState('')
  const [timeAndDate, onChangeTimeAndDate] = React.useState('')
  const [description, onChangeDescription] = React.useState('')
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerWithinContainer}>
        <Text style={styles.headerText}>Create Report</Text>
        <TextInput
          style={styles.textbox}
          placeholder=" Victim Name"
          value={victim}
          onChangeText={onChangeVictim}
        />
        <TextInput
          style={styles.textbox}
          placeholder=" Bully Name"
          value={bully}
          onChangeText={onChangeBully}
        />
        <TextInput
          style={styles.textbox}
          placeholder=" Location"
          value={location}
          onChangeText={onChangeLocation}
        />
        <TextInput
          style={styles.textbox}
          placeholder=" Time and Date"
          value={timeAndDate}
          onChangeText={onChangeTimeAndDate}
        />
        <TextInput
          style={styles.textbox}
          placeholder=" Description"
          value={description}
          onChangeText={onChangeDescription}
        />
      </View>
      <Pressable style={styles.backButton} onPress={() => goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#96C5FC',
  },
  containerWithinContainer: {
    padding: 15,
  },
  headerText: {
    color: 'white',
    fontFamily: 'Gabriela-Regular',
    fontSize: 30,
  },
  textbox: {
    height: 40,
    width: Dimensions.get('window').width/1.125,
    backgroundColor: '#CAE2FE',
    borderColor: '#7C97CE',
    borderWidth: 2,
    borderStyle: 'solid',
    margin: 8,
  },
  backButton: {
    height: 30,
    width: Dimensions.get('window').width / 4,
    backgroundColor: '#CAE2FE',
    borderRadius: 45,
    justifyContent: 'center',
    margin: 15,
  },
  backButtonText: {
    color: '#7C97CE',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Gabriela-Regular',
  },
});