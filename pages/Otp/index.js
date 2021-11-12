import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  ScrollView,
  Pressable,
} from "react-native";
const windowHeight = Dimensions.get("window").height;

export default function Otp({ route, navigation }) {
  return (
    <SafeAreaView style={styles.page5container}>
      <ScrollView>
        <View style={styles.page5heading}>
          <Text style={styles.page5headingotp}>VERIFY OTP</Text>
          <Text style={styles.page5headingotp2}>
            Please type the verification code sent to yout registered number
          </Text>
        </View>

        <>
          <View style={styles.page5otpcontainer}>
            <TextInput
              keyboardType="numeric"
              style={styles.textInput}
              maxLength={1}
            ></TextInput>
            <TextInput
              keyboardType="numeric"
              style={styles.textInput}
              maxLength={1}
            ></TextInput>
            <TextInput
              keyboardType="numeric"
              style={styles.textInput}
              maxLength={1}
            ></TextInput>
            <TextInput
              keyboardType="numeric"
              style={styles.textInput}
              maxLength={1}
            ></TextInput>
          </View>

          <View style={styles.page5buttoncontainer}>
            <Pressable
              onPress={() => {
                navigation.replace("signup");
              }}
            >
              <View style={styles.container3}>
                <Text style={styles.text2}>Verify OTP</Text>
              </View>
            </Pressable>
            <Pressable>
              <Text style={styles.page5Resendcodebutton}>Resend code</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("phonenumber")}>
              <Text style={styles.page5Resendcodebutton}>
                Change Phone Number
              </Text>
            </Pressable>
          </View>
        </>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  page5container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },

  profileimgcontainer: {
    width: "100%",
    height: windowHeight,
    resizeMode: "contain",
  },
  page5heading: {
    alignItems: "center",
    marginTop: 60,
  },
  page5headingotp: {
    fontSize: 28,
    color: "#000",
  },
  page5headingotp2: {
    fontSize: 14,
    textAlign: "center",
    color: "#000",
    width: 250,
    marginTop: 20,
  },
  page5otpcontainer: {
    height: 200,
    justifyContent: "center",
    flexDirection: "row",
  },
  page5buttoncontainer: {
    marginTop: 100,
    alignItems: "center",
  },
  page5Verifynowcontainer: {
    width: 233,
    height: 66,
    backgroundColor: "#098D73",
    borderRadius: 50,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  page5Verifynowbutton: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  page5Resendcodebutton: {
    color: "#000000",
    marginTop: 10,
    fontSize: 14,
    opacity: 0.66,
  },
  textInput: {
    backgroundColor: "#DDD",
    fontWeight: "600",
    alignSelf: "center",
    fontSize: 20,
    height: 55,
    width: "14.5%",
    margin: 12,
    borderRadius: 10,
    borderWidth: 0,
    borderColor: "#3C2022",
    alignItems: "center",
    textAlign: "center",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
});
