import React, {useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { profileUpdate } from "../../api/apifunction";

const ProfileEdit=({navigation})=> {
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber]= useState("");
  const [city, setCity]=useState("");
  const [newpassword, setNewPassword]= useState("");
  const [newpasswordcp, setNewPasswordCp]= useState("");

  const handleSubmit = async() => {
    const res = await profileUpdate(name, phonenumber, city, newpassword, newpasswordcp);
    console.log(res.data);
    if (res) {
      alert("Profile updated succesfully")
    } else {
      alert("Something Went Wrong. Please try again");
    }
   };
    return (
      <SafeAreaView style={styles.mainContainer}>
        <ScrollView>
          <View style={styles.mainWrapper}>
            <View>
              <View style={styles.inputContainer}>
                <Text style={{ color: "#838383" }}>Name</Text>
                <TextInput
                  style={styles.input}
                  value={name}
                  onChangeText={setName}
                ></TextInput>
              </View>
              <View style={styles.inputContainer}>
                <Text style={{ color: "#838383" }}>Phonenumber</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setPhonenumber}
                  value={phonenumber}
                ></TextInput>
              </View>
              <View style={styles.inputContainer}>
                <Text style={{ color: "#838383" }}>City</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setCity}
                  value={city}
                ></TextInput>
              </View>
              <View style={styles.inputContainer}>
                <Text style={{ color: "#838383" }}>New Password</Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  onChangeText={setNewPassword}
                  value={newpassword}
                ></TextInput>
              </View>
              <View style={styles.inputContainer}>
                <Text style={{ color: "#838383" }}>Re-Enter New Password</Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  onChangeText={setNewPasswordCp}
                  value={newpasswordcp}
                ></TextInput>
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <TouchableOpacity onPress={()=>{handleSubmit();}}>
                <View style={styles.savechangescontainer}>
                  <Text
                    style={{
                      fontSize: 16,
                      paddingHorizontal: 25,
                      paddingVertical: 10,
                      color: "#ffffff",
                    }}
                  >
                    Save Changes
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  
}

export default ProfileEdit;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  mainWrapper: {
    margin: 10,
  },
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headingText: {
    fontSize: 16,
    marginLeft: 5,
    fontWeight: "bold",
  },
  input: {
    borderBottomColor: "#C4C4C4",
    borderBottomWidth: 1,
    color: "black",
  },
  input2: {
    backgroundColor: "#eaeaea",
    borderBottomColor: "#C4C4C4",
    borderBottomWidth: 1,
  },
  inputContainer: {
    marginBottom: 10,
    marginTop: 25,
  },
  savechangescontainer: {
    backgroundColor: "#098D73",
    borderRadius: 30,
  },
});
