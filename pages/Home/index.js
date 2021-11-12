import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import MaIcon from "react-native-vector-icons/MaterialCommunityIcons";

import Logo from "../../assets/logo.png";
import RadioContainer from "../../components/RadioContainer";
import LunchCard from "../../components/LunchCard";
import { TextInput } from "react-native-paper";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const Home = ({ navigation }) => {
  const [checked, setChecked] = useState("first");
  const [veg, setVeg] = useState(false);
  const [nonveg, setNonveg] = useState(false);
  const [millet, setMillet] = useState(false);
  return (
    <ScrollView style={styles.homecontainer}>
      <View style={styles.homeheader}>
        <View style={styles.homeheaderwrapper1}>
          <View style={{height:50, alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
          <MaIcon
            name="google-maps"
            size={25}
            color="white"
            style={{ marginRight: 5 }}
          />
          <Text style={{color:"#fff", }}> Flat-102, Kalyan Nagar Venture-3...</Text>
          </View>
          <View style={styles.homeheadericoncontainer}>
            <Pressable
              onPress={() => {
                navigation.navigate("notifications");
              }}
            >
              <MaIcon
                name="bell-outline"
                size={25}
                color="white"
                style={{ marginRight: 15 }}
              />
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate("cart");
              }}
            >
              <MaIcon name="cart-outline" size={25} color="white" />
            </Pressable>
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TextInput
            placeholder={"Search any dish or cook"}
            style={{
              fontSize: 12,
              width: windowWidth * 0.95,
              height: 40,
              backgroundColor: "#fff",
              borderRadius: 10,
              borderTopLeftRadius: 10,
              borderTopEndRadius: 10,
            }}
          />
        </View>
      </View>
      <View style={styles.homeradiocontainer}>
        <RadioContainer
          checked={checked}
          veg={veg}
          nonveg={nonveg}
          millet={millet}
          setChecked={setChecked}
          setVeg={setVeg}
          setNonveg={setNonveg}
          setMillet={setMillet}
        />
      </View>
      <View style={{ padding: 10 }}>
        <LunchCard navigation={navigation} />
        <LunchCard navigation={navigation} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homecontainer: {
    backgroundColor: "#fff",
    flex: 1,
  },
  homeheader: {
    height: windowHeight/6.5,
    backgroundColor: "#098D73",
    paddingHorizontal: 5,
  },
  homeheaderwrapper1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  homeheadericoncontainer: {
    flexDirection: "row",
  },
  homeradiocontainer: {
    paddingVertical: 10,
  },
});

export default Home;
