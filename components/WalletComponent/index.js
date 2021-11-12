import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Box from "../../assets/box.png";
import Shop from "../../assets/shop.png";

export default function WalletComponent({ image, name, time, money }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 25,
        marginLeft: 15,
        marginRight: 15,
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={image ? Box : Shop} style={styles.image} />
        <View>
          <Text>Sent to {name}</Text>
          <Text style={{ fontSize: 10, color: "#838383" }}>{time}</Text>
        </View>
      </View>
      <Text style={money >= 0 ? styles.positive : styles.negative}>
        Rs. {money}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
    marginRight: 25,
  },
  positive: {
    color: "green",
  },
  negative: {
    color: "red",
  },
});
