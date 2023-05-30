import { StyleSheet, Linking, ScrollView, View, Text,Pressable, Dimensions} from 'react-native';

import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

export default function HelpScreen({navigation: {goBack}}) {{
    this.state = {
      tableHead: ['The Problem', 'What you can do'],
      tableData: [
        [
          //  NEED TO ADD some highlighting here to show the text is a button for calling
          'There has been a crime or someone is at immediate risk of harm.',
          <Text
            style={{
              color: 'blue',
              margin: 10,
              fontFamily: 'Gabriela-Regular',
              fontSize: 16,
            }}
            onPress={() => Linking.openURL('tel:911')}>
            Call 911
          </Text>,
        ],
        [
          //  NEED TO ADD some highlighting here to show the text is a button for calling
          'Someone is feeling hopeless, helpless, thinking of suicide.',
          <Text
            style={{color: 'blue', margin: 10, fontFamily: 'Gabriela-Regular', fontSize: 16,}}
            onPress={() => Linking.openURL('tel:988')}>
            Call 988
          </Text>,
        ],
        [
          'Someone is acting differently than normal, such as always seeming sad or anxious, struggling to complete tasks, or not being able care for themselves.',
          'Find a local counselor or other mental health services',
        ],
        [
          'A child is being bullied in school.',
          'Contact the:\n1. School counselor \n2. School principal\n3. School superintendent\n4. State Department of Education',
        ],
        [
          'The school is not adequately addressing harassment based on race, color, national origin, sex (including sexual orientation and gender identity), disability, or religion.',
          'Contact:\n- School superintendent\n- State Department of Education\n- U.S. Department of Education, Office for Civil Rights\n- U.S. Department of Justice, Civil Rights Division',
        ],
      ],
    };
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <Text style={styles.paragraph}>
            If you have done everything you can to resolve the situation and
            nothing has worked, or someone is in immediate danger, there are
            ways to get help.
          </Text>
          <Table borderStyle={{borderColor: '#7C97CE'}}>
            <Row
              data={state.tableHead}
              style={styles.head}
              textStyle={styles.text}
            />
            {state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {rowData.map((cellData, cellIndex) => (
                  <Cell
                    key={cellIndex}
                    data={cellData}
                    textStyle={styles.text}
                  />
                ))}
              </TableWrapper>
            ))}
          </Table>
        </ScrollView>
        <View style={{padding: 15}}>
          <Pressable style={styles.buttons} onPress={() => goBack()}>
            <Text style={styles.textButton}>Back</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#96C5FC',
    justifyContent: 'flex-start'
  },
  scrollContainer: {
    flex: 1,
    paddingVertical: 20,
  },
  paragraph: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Gabriela-Regular',
    paddingTop: 35,
  },
  text: {
    margin: 10,
    color: '#7C97CE',
    fontFamily: 'Gabriela-Regular',
    fontSize: 16,
  },
  head: {
    marginTop: 10,
    color: 'white',
  },
  tableHead: {
    marginTop: 10,
    color: 'white',
  },
  row: {flexDirection: 'row', backgroundColor: '#CAE2FE'},
  buttons: {
    height: 30,
    width: Dimensions.get('window').width / 4,
    backgroundColor: '#CAE2FE',
    borderRadius: 45,
    justifyContent: 'center',
  },
  textButton: {
    color: '#7C97CE',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Gabriela-Regular',
  },
});