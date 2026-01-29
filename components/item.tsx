import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export const Item = ({ name, image }: { name: string; image: string }) => {
  return (
    <View style={s.itemList}>
      <Image style={s.imageStyle} source={image} />
      <Text style={s.txt}>{name}</Text>
    </View>
  );
};

const s = StyleSheet.create({
  itemList: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    backgroundColor: "#4186a4d4",
    margin: 10,
    height: 80,
    paddingHorizontal: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: "100%",
  },
  txt: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
