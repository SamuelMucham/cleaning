import { Header } from "@/components/header";
import { router } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomePage() {
  const visit = () => {
    router.push("/list");
  };

  return (
    <SafeAreaView style={s.wrap}>
      <View style={s.body}>
        <Text style={s.title}>relógios</Text>
        <Text style={s.paragraph}>loja de relógios</Text>
      </View>
      <TouchableOpacity style={s.btn} onPress={visit}>
        <Text style={s.btnText}>comprar</Text>
      </TouchableOpacity>
      <Header image={require("@/assets/images/logo.png")} />
      <Header image={require("@/assets/images/logo00.png")} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <view style={s.body2}></view>
      </ScrollView>
    </SafeAreaView>
  );
}
const s = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  body2: {
    alignItems: "center",
    height: 10,
  },
  body: {
    backgroundColor: "#8f7d7d",
    gap: 25,
  },

  title: {
    color: "#000000",
    textAlign: "center",
    fontSize: 30,
    fontWeight: 700,
  },
  paragraph: {
    backgroundColor: "#8f7d7d",
    textAlign: "center",
    fontSize: 22,
    paddingBottom: 15,
  },
  btn: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 19,
    backgroundColor: "#206470",
    width: 200,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#090909",
    borderRadius: 999,
  },
  btnText: {
    color: "#000000",
    fontSize: 22,
  },
});

<View style={s.body2}>
  <Image source={require("../assets/images/2.webp")} />
</View>;
