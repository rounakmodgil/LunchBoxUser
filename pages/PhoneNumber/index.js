import React from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";

const PhoneNumber = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <Text style={{ fontSize: 26, color: "black" }}>User Registration</Text>
      </View>

      <View
        style={{
          marginTop: 250,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextInput
          style={styles.input}
          placeholderTextColor="#000"
          placeholder="Phone Number"
        />
        <Pressable
          onPress={() => {
            navigation.navigate("otp");
          }}
        >
          <View style={styles.container3}>
            <Text style={styles.text2}>Request OTP</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  input: {
    borderBottomColor: "#0E7783",
    borderBottomWidth: 1,
    marginTop: 15,
    marginBottom: 15,
    width: 200,
    fontSize: 22,
    color: "white",
    textAlign: "center",
  },
  inputcontainer: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
  texthead: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 55,
  },
  container3: {
    paddingHorizontal: 60,
    paddingVertical: 12,
    marginHorizontal: 35,
    borderColor: "#098D73",
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 15,
    borderRadius: 25,
    backgroundColor: "#098D73",
    justifyContent: "center",
    alignItems: "center",
  },
  text2: {
    color: "white",
    fontSize: 16,
  },
  authcontainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  authitem: {
    height: 25,
    width: 100,
  },
  signupcontainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});

export default PhoneNumber;
