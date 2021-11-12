import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";

import backgroundImg from "../../assets/walletbackground.png";
import WalletList from "../../components/WalletComponent";

const listing = [
  {
    name: "Nithin",
    money: -50,
    time: "21st July, 09:39 PM",
    image: 0,
  },
  {
    name: "Nithin",
    money: 50,
    time: "21st July, 09:39 PM",
    image: 1,
  },
  {
    name: "Nithin sdfkuh",
    money: 100,
    time: "21st July, 09:39 PM",
    image: 0,
  },
];

export default function Wallet() {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImg} style={styles.image}>
        <ScrollView>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 100,
              marginBottom: 180,
            }}
          >
            <Text style={{ color: "white", fontSize: 18, marginBottom: 35 }}>
              Current Balance
            </Text>
            <Text style={{ color: "white", fontSize: 20 }}>Rs 100</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.container3}>
              <Text style={styles.text2}>Add Money</Text>
            </View>
          </TouchableOpacity>
          <View style={{ marginTop: 25 }}>
            <Text
              style={{
                fontWeight: "bold",
                marginBottom: 10,
                marginLeft: 10,
                fontSize: 14,
                backgroundColor: "white",
              }}
            >
              Payment History
            </Text>
            <View
              style={{
                paddingTop: 5,
                paddingBottom: 5,
                backgroundColor: "#E5E5E5",
                paddingLeft: 10,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                July 2021
              </Text>
            </View>
            {listing.map((item) => (
              <WalletList
                money={item.money}
                name={item.name}
                time={item.time}
                image={item.image}
              />
            ))}
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  container3: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginHorizontal: 35,
    borderColor: "#098D73",
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 25,
    backgroundColor: "#098D73",
    justifyContent: "center",
    alignItems: "center",
  },
  text2: {
    color: "white",
    fontSize: 16,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
