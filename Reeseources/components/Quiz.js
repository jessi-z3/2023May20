import React from 'react';

import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  Dimensions,
  StyleSheet,
  Alert,
} from 'react-native';

import QuizeSingleChoice from 'react-native-react-native-quiz-single-choice';

export default function Quiz({navigation, navigation: {goBack}}) {
  const data = [
    {
      question: 'Nearly one-third of American teens are involved in bullying.',
      optionA: 'True',
      optionB: 'False',
      answer: 'True',
    },
    {
      question: 'Less than 10% of American teens admit to bullying others.',
      optionA: 'True',
      optionB: 'False',
      answer: 'False',
    },
    {
      question:
        'Students who are bullied in school are usually attentive students with good attendance.',
      optionA: 'True',
      optionB: 'False',
      answer: 'False',
    },
    {
      question: 'Most students who bully are insecure.',
      optionA: 'True',
      optionB: 'False',
      answer: 'False',
    },
    {
      question:
        'Contrary to stereotypes, male bullies are not usually bigger and physically stronger than their peers.',
      optionA: 'True',
      optionB: 'False',
      answer: 'False',
    },
    {
      question:
        ' Students who witness bullying often refuse to remain friends with the victim and feel guilty for not reporting the incident.',
      optionA: 'True',
      optionB: 'False',
      answer: 'True',
    },
    {
      question: 'Bullies have trouble making friends.',
      optionA: 'True',
      optionB: 'False',
      answer: 'False',
    },
    {
      question:
        'Bullies do poorly in school compared to others who do not bully.',
      optionA: 'True',
      optionB: 'False',
      answer: 'True',
    },
    {
      question:
        'Most bullies discontinue violent or aggressive behavior in adulthood.',
      optionA: 'True',
      optionB: 'False',
      answer: 'False',
    },
    {
      question: 'If you are being bullied, it’s best to handle it alone.',
      optionA: 'True',
      optionB: 'False',
      answer: 'False',
    },
  ];
  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <QuizeSingleChoice
          containerStyle={{
            backgroundColor: '#96C5FC',
            paddingTop: 30,
            justifyContent: 'center',
          }}
          questionTitleStyle={{
            fontSize: 22,
            color: '#FFF',
            fontFamily: 'Gabriela-Regular',
          }}
          responseStyle={{
            borderRadius: 15,
            backgroundColor: '#CAE2FE',
          }}
          responseTextStyle={{
            fontSize: 16,
            fontWeight: 'normal',
            fontFamily: 'Gabriela-Regular',
            color: '#7C97CE',
          }}
          selectedResponseStyle={{
            borderRadius: 15,
            backgroundColor: 'navy',
          }}
          selectedResponseTextStyle={{
            fontSize: 14,
            fontWeight: 'normal',
            fontFamily: 'Gabriela-Regular',
          }}
          responseRequired={true}
          nextButtonText={'Next'}
          nextButtonStyle={{backgroundColor: '#CAE2FE'}}
          nextButtonTextStyle={{
            color: '#7C97CE',
            fontFamily: 'Gabriela-Regular',
          }}
          prevButtonText={'Previous'}
          prevButtonStyle={{
            backgroundColor: '#CAE2FE',
            fontFamily: 'Gabriela-Regular',
          }}
          prevButtonTextStyle={{
            color: '#7C97CE',
            fontFamily: 'Gabriela-Regular',
          }}
          endButtonText={'Done'}
          endButtonStyle={{backgroundColor: 'navy'}}
          endButtonTextStyle={{
            color: '#7C97CE',
            fontFamily: 'Gabriela-Regular',
          }}
          buttonsContainerStyle={{marginTop: 'auto'}}
          onEnd={results => {
            const correct = results.filter(result => result.isRight == true);
            function ObjectLength(correct) {
              var length = 0;
              for (var key in correct) {
                if (correct.hasOwnProperty(key)) {
                  ++length;
                }
              }
              return length;
            }
            const points = ObjectLength(correct) * 10;
            console.log('Your Score: ' + points);
            Alert.alert('Your Score: ' + points);
          }}
          data={data}
        />
      </View>
      <View style={{padding: 5, justifyContent: 'space-between', flexDirection: 'row'}}>
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
    justifyContent: 'center',
  },
  innerContainer: {
    flex: 1,
    padding: 15,
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
});
