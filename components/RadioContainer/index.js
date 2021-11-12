import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { RadioButton, Checkbox } from "react-native-paper";

const RadioContainer = ({ navigation, checked, setChecked , veg, setVeg, nonveg, setNonveg, millet, setMillet}) => {
  return (
    <>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly", paddingVertical:5 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RadioButton
            color={"#347937"}
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />
          <Text> Breakfast</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RadioButton
            color={"#347937"}
            value="second"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
          />
          <Text>Lunch</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RadioButton
            color={"#347937"}
            value="third"
            status={checked === "third" ? "checked" : "unchecked"}
            onPress={() => setChecked("third")}
          />
          <Text> Dinner</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly", paddingVertical:5 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Checkbox
            color={"#347937"}
            value="veg"
            status={veg === true ? "checked" : "unchecked"}
            onPress={() => setVeg(!veg)}
          />
          <Text>Veg</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Checkbox
            color={"#347937"}
            value="nonveg"
            status={nonveg === true ? "checked" : "unchecked"}
            onPress={() => setNonveg(!nonveg)}
          />
          <Text>Non Veg</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Checkbox
            color={"#347937"}
            value="millet"
            status={millet === true ? "checked" : "unchecked"}
            onPress={() => setMillet(!millet)}
          />
          <Text>Millet Meal</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default RadioContainer;
