import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function CartRecommend() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: 10,
          width: "100%",
          alignItems: "center",
        }}
      >
        <View>
          <Image
            source={require("../../assets/milk.png")}
            style={{ height: 70, width: 70 }}
          />
        </View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 12 }}>Amul Milk</Text>
          <Text style={{ color: "#555", fontSize: 10, marginTop: 5 }}>
            Diary
          </Text>

          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Text style={{ fontSize: 10, fontWeight: "bold" }}>Rs. 100</Text>
            <Text
              style={{
                fontSize: 10,
                textDecorationLine: "line-through",
                marginLeft: 4,
                color: "#555",
              }}
            >
              Rs. 100
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          height: 25,
          width: "80%",
          borderRadius: 7,
          alignSelf: "center",
          backgroundColor: "#098D73",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ color: "#fff" }}>Add +</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#EEE",
    marginLeft: 10,
    marginRight: 10,
    height: 160,
    width: 200,
  },
});
