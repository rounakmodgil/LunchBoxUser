import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

export default function CartItem({
  name,
  subtitle,
  price,
  quantity,
  schedule,
}) {
  const [count, setCount] = useState(quantity);
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <Text style={{ fontWeight: "bold" }}>Rs. {price}</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.itemImage}
            source={require("../../assets/thali.jpeg")}
          />
          {schedule === 0 && count === 0 && (
            <TouchableOpacity onPress={() => setCount(count + 1)}>
              <View style={styles.addContainer}>
                <Text style={{ color: "white" }}>Add +</Text>
              </View>
            </TouchableOpacity>
          )}
          {schedule === 0 && count !== 0 && (
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => setCount(count - 1)}>
                <Text style={styles.minus}>-</Text>
              </TouchableOpacity>
              <Text>{count}</Text>
              <TouchableOpacity onPress={() => setCount(count + 1)}>
                <Text style={styles.plus}>+</Text>
              </TouchableOpacity>
            </View>
          )}
          {schedule === 1 && (
            <TouchableOpacity onPress={() => setCount(count + 1)}>
              <View style={styles.addContainer}>
                <Text style={{ color: "white", fontSize: 10 }}>
                  Re-Schedule
                </Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
  },
  itemImage: {
    height: 70,
    width: 70,
    borderRadius:6,
    marginBottom:4
  },
  addContainer: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: "#098D73",
    borderRadius: 10,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    borderColor: "#098D73",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  minus: {
    paddingRight: 5,
  },
  plus: {
    paddingLeft: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom:5
  },
  subtitle: {
    color: "#838383",
  },
});
