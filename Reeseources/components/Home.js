import { View, StyleSheet, Image, Pressable } from "react-native";

import BraveButton from "./BraveButton";
import Logo from "./Logo";
import MissionButton from "./MissionButton";
import PledgeButton from "./PledgeButton";
import ProgramButton from "./ProgramButton";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.buttonContainer1}>
        <Pressable onPress={() => navigation.navigate("MissionPage")}>
          <MissionButton />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Program")}>
          <ProgramButton />
        </Pressable>
      </View>
      <View style={styles.buttonContainer2}>
        <Pressable onPress={() => navigation.navigate("BRAVE")}>
          <BraveButton />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Pledge")}>
          <PledgeButton />
        </Pressable>
      </View>
      <Image
        source={require("../assets/brave-logo2x.png")}
        style={{ width: 350, height: 150, padding: 5 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 15,
    backgroundColor: "#96C5FC",
    padding: 8,
    justifyContent: "center",
  },
  buttonContainer1: {
    flex: 2,
    flexDirection: "row",
    width: 370,
    height: 500,
    justifyContent: "space-between",
    padding: 12,
  },
  buttonContainer2: {
    flex: 2,
    flexDirection: "row",
    width: 370,
    height: 200,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
  },
});
