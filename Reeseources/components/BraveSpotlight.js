import {
  View,
  StyleSheet,
  Image,
  Text,
} from 'react-native';

export default function BraveSpotlight({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Spotlight</Text>
        <Image
          source={require('../assets/reececarrbravepledges.jpg')}
          style={styles.image1}
        />
        <Text style={styles.subHeaderText}>B.R.A.V.E. Bracelets</Text>
        <Image
          source={require('../assets/brave-bracelets.jpg')}
          style={styles.image2}
        />
        <Text style={styles.text}>
          Over the years, Reese has sent B.R.A.V.E. bracelets to every state,
          even some to Spain.
        </Text>
        <Text style={styles.subHeaderText}>Buddy Bench</Text>
        <Image
          source={require('../assets/bottle-caps.jpg')}
          style={styles.image2}
        />
        <Text style={styles.text}>
          Reese washing and sorting bottle caps to be recycled for a B.R.A.V.E.
          buddy bench, so no kid has to sit alone. It takes over 150 lbs. of
          caps to make one. Way to Reese-cycle!
        </Text>
        <Text style={styles.subHeaderText}>B.R.A.V.E. Bandanas</Text>
        <Image
          source={require('../assets/bandanas.jpg')}
          style={styles.image3}
        />
        <Text style={styles.text}>
          Ava gives these out to elementary-aged kids in her community to tie
          onto their backpacks as a visual reminder to ALWAYS be kind.
        </Text>
        <Text style={styles.subHeaderText}>B.R.A.V.E. Bunnies</Text>
        <Image
          source={require('../assets/YT_Gianna_Capri_1_t1100.jpg')}
          style={styles.image4}
        />
        <Text style={styles.text}>
          Gianna passed out “B.R.A.V.E Bunnies” to every student at Morning Star
          School as a reminder to be kind to all.
        </Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#96C5FC',
    padding: 15,
    alignItems: 'center',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 70,
    textAlign: 'center',
    fontFamily: 'Dancing Script',
    fontWeight: '700',
    paddingBottom: 15,
  },
  subHeaderText: {
    color: '#FFFFFF',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Dancing Script',
    fontWeight: '700',
    paddingTop: 20,
  },
  text: {
    color: 'navy',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Gabriela-Regular',
    paddingTop: 5,
  },
  image1: {
    width: 450,
    height: 350,
  },
  image2: {
    width: 375,
    height: 500,
  },
  image3: {
    width: 375,
    height: 750,
  },
  image4: {
    width: 375,
    height: 750,
  },
});