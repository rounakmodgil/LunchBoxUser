import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";

import Edit from "../../assets/edit.png";
import Star from "../../assets/star.png";
import Feedback from "../../assets/feedback.png";
import About from "../../assets/about.png";

const Profile = ({ navigation }) => {
    return(
  <SafeAreaView style={styles.container}>
    <ScrollView>
      <View style={styles.details}>
        <Text style={styles.name}>John Doe</Text>
        <View style={styles.details2}>
          <Text style={styles.phonenumber}>1234567890</Text>
          <Text style={styles.mail}>johndoe@gmail.com</Text>
        </View>
      </View>
      <Text style={styles.profiletext}>YOUR PROFILE</Text>
      <View style={styles.lists}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("editprofile");
          }}
        >
          <View style={styles.listitem}>
            <Image style={styles.img} source={Edit} />
            <Text style={styles.listtext}>Edit Profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.listitem}>
            <Image style={styles.img} source={About} />
            <Text style={styles.listtext}>About</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.listitem}>
            <Image style={styles.img} source={Feedback} />
            <Text style={styles.listtext}>Send Feedback</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.listitem}>
          <Image style={styles.img} source={Star} />
          <Text style={styles.listtext}>Rate us on Play Store</Text>
        </View>
        <Pressable>
          <View style={styles.listitem}>
            <Text style={styles.logout}>Log Out</Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  </SafeAreaView>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    overflow: "hidden",
    alignContent: "center",
    //alignItems:"center",
    paddingHorizontal: 10,
  },
  details: {
    paddingBottom: 25,
    marginTop: 10,
    borderBottomColor: "#838383",
    borderBottomWidth: 0.5,
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  details2: {
    flexDirection: "row",
    marginTop: 20,
  },
  phonenumber: {
    flex: 1,
  },
  mail: {
    flex: 2,
  },

  profiletext: {
    marginTop: 20,
    color: "#575757",
  },
  lists: {
    paddingTop: 15,
    paddingBottom: 15,

    borderBottomColor: "#838383",
  },
  lists2: {
    paddingTop: 15,
  },

  listitem: {
    flexDirection: "row",
    marginBottom: 15,
    marginTop: 15,
  },
  listtext: {
    marginLeft: 10,
  },

  listtext2: {
    color: "#7C1C00",
    marginLeft: 10,
  },

  logout: {
    color: "#960000",
    fontWeight: "bold",
    marginLeft: 30,
  },
  img: {
    height: 17,
    width: 16,
    resizeMode: "contain",
  },
});

export default Profile;
