import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Pressable,
  Dimensions,
  StyleSheet,
} from 'react-native';

import Markdown from 'react-native-markdown-display';

export default function Writing({navigation: {goBack}}){
      const copy = `
1. What can you do to put a stop to the culture of bullying?
2. How can you support your peers who have been bullied in the past?
3. Do you think bullying is more prevalent online or in the classroom? At school or during extracurricular activities?
4. When you see someone being bullied, do you feel comfortable going to a teacher or adult for help? Why or why not?
5. What is the best way to get someone to stop bullying another person? Should you defend the victim? Start a fight? Make fun of the bully? Why or why not?
6. What is the difference between teasing and bullying? How can you tell the difference between them?
7. At what point does teasing become bullying? Does the frequency of the behavior play a role?
8. Have you ever felt bullied by someone? What made you feel this way?
9. Have you ever bullied another person? How did you feel before, during, and after?
10. What is the danger of standing around and watching while someone else is bullied?
11. What kinds of consequences do kids who are bullied suffer?
12. Why is it important to accept people for who they are?
13. Do you think there are particular types of attitudes that contribute to bullying? Are there people who think bullying is acceptable? Why or why not?
14. In what situations do you and your friends see people bullied? Do you ever try to stop someone from getting bullied?
15. How do you feel when someone teases you or gives you a hard time for something you like? Why do you feel this way?
16. Are there any risks to standing up for someone who is being bullied? What are they? How do they impact your decision to get involved in a situation?
17. Have you ever talked to your parents about bullying? What did they say?
18. Write about a time when you stood up for something that you believed in. Was it hard to express an opinion that other people didn’t agree with? Why or why not?
19. Write short one-paragraph stories about four different types of bullying. How do you think the people in each story would feel if the behavior lasted for a week? What if it lasted a month? The entire school year?
20. Why do you think some people bully others?
21. What feeling does the bully get from putting someone else down?
22. Come up with an idea for a new way to increase awareness about bullying. How can you help people understand that bullying is a problem?
23. Are some types of bullying more harmful than others?
24. What would you do if someone tried to bully you?
25. What would you do if you saw someone trying to hurt one of your friends? Would you intervene or get an adult to help? Why?
26. Have you ever wanted to stand up for someone who was being made fun of? Did you intervene? Why or why not?
27. How do you feel when you see someone else being teased?
28. Why do you think people have trouble accepting others who are different from them?
29. Write about a time when you did something nice for someone because you saw that another person had hurt him or her. What did you do? How did the other person feel afterward?
30. How do you think a bullying victim feels when he or she is laughed at, hurt, or degraded?
31. How can you encourage other people to be more accepting of those who are different?
`;

    return (
      <SafeAreaView style={styles.outerContainer}>
        <ScrollView>
          <View style={styles.innerContainer}>
            <Text style={styles.activityText}>Writing Prompts</Text>
            <Markdown style={{body:styles.paragraph}}>{copy}</Markdown>
          </View>
        </ScrollView>
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
    fontSize: 70,
    textAlign: 'center',
    fontFamily: 'Dancing Script',
    fontWeight: '700',
    paddingBottom: 15,
  },
  container: {
    width: 160,
    height: 130,
    backgroundColor: '#CAE2FE',
    borderRadius: 45,
  },
  paragraph: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'Gabriela-Regular',
  },
  buttonContainer1: {
    flexDirection: 'row',
    width: 370,
    height: 150,
    justifyContent: 'space-evenly',
    padding: 5,
  },
});