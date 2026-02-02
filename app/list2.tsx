import dados from "@/assets/constants/mook2";
import { Header } from "@/components/header";
import { Item } from "@/components/item";
import { router } from "expo-router";

import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function List2() {
  const voltar = () => {
    router.push("/");
  };

  return (
    <>
      <Header image={require("@/assets/images/3.webp")} />
      <View>
        <TouchableOpacity onPress={voltar}>
          <Text style={s.backbtn}>🔙</Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={s.wrap}>
        <FlatList
          data={dados}
          renderItem={({ item }) => (
            <Item name={item.name} image={item.imagem} />
          )}
        ></FlatList>
      </SafeAreaView>
    </>
  );
}

const s = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  backbtn: {
    fontSize: 40,
    position: "absolute",
    top: -200,
  },
});
