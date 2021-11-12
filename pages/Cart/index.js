import CheckBox from "@react-native-community/checkbox";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Picker,
  TextInput,
} from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

import CartItem from "../../components/CartItem";
import CartRecommend from "../../components/CartRecommend";
const listing = [
  {
    name: "Maharaja Thali",
    subtitle: "Swati's Kitchen",
    price: 100,
    quantity: 1,
    schedule: 0,
  },
  {
    name: "Maharaja Thali",
    subtitle: "Swati's Kitchen",
    price: 100,
    quantity: 3,
    schedule: 0,
  },
];

export default function Cart() {
  const [selectedValue, setSelectedValue] = useState("wallet");
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          {listing.map((item) => {
            return (
              <CartItem
                name={item.name}
                subtitle={item.subtitle}
                price={item.price}
                quantity={item.quantity}
                schedule={item.schedule}
              />
            );
          })}
        </View>
       
        <View
          style={{
            height: 80,
            marginTop: 20,
            borderTopColor: "#DDD",
            borderWidth: 1,
            borderBottomColor: "#DDD",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              <CheckBox tintColors={{ true: "#098D73", false: "#BBB" }} />
            </View>
            <View>
              <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
                No Contact Delivery
              </Text>
              <Text>
                Partner will check with you and leave the order outside
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 90,
            marginTop: 20,
            borderTopColor: "#DDD",
            borderWidth: 1,
            borderBottomColor: "#DDD",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
            Tip your delivery partner
          </Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <View
              style={{
                height: 30,
                width: 60,
                borderWidth: 1,
                borderColor: "#555",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 6,
                marginRight: 10,
              }}
            >
              <Text>Rs. 20</Text>
            </View>
            <View
              style={{
                height: 30,
                width: 60,
                borderWidth: 1,
                borderColor: "#555",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 6,
                marginRight: 10,
              }}
            >
              <Text>Rs. 30</Text>
            </View>
            <View
              style={{
                height: 30,
                width: 60,
                borderWidth: 1,
                borderColor: "#555",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 6,
                marginRight: 10,
              }}
            >
              <Text>Rs. 50</Text>
            </View>
            <View
              style={{
                height: 30,
                width: 60,
                borderWidth: 1,
                borderColor: "#555",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 6,
                marginRight: 10,
              }}
            >
              <Text>Custom</Text>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              height: 70,
              backgroundColor: "#eee",
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              paddingHorizontal: 25,
            }}
          >
            <FontAwesome5Icon
              name="pen-alt"
              color={"gray"}
              style={{ marginRight: 4 }}
            />
            <TextInput
              maxLength={70}
              style={{ color: "#000", textAlign: "center" }}
              placeholder="Add additional information like Eg: Do not ring the bell"
              placeholderTextColor="gray"
            />
          </View>
        </View>
        <View
          style={{
            minHeight: 150,
            marginTop: 20,
            marginBottom: 50,
            borderTopColor: "#DDD",
            borderWidth: 1,
            borderBottomColor: "#DDD",
            justifyContent: "center",
            paddingHorizontal: 10,
          }}
        >
          <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
            Payment Details
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Text>Item Total</Text>
            <Text>Rs 190</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Text>Partner Tip</Text>
            <Text>Rs 20</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Text>Delivery Fee</Text>
            <Text>Rs 20</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Total</Text>
            <Text style={{ fontWeight: "bold" }}>Rs 240</Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          paddingHorizontal: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          borderTopColor: "black",
          borderTopWidth: 0.5,
          paddingTop: 20,
          paddingBottom: 15,
          backgroundColor: "#098D73",
        }}
      >
        <View style={{ paddingLeft: 10 }}>
          <Text style={styles.textHead}>2 items added</Text>
          <Text style={styles.text}>Bill - 230.00</Text>
          <Text style={styles.text}>Delivery - 0.00</Text>
          <Text style={styles.text}>Total - 230.00</Text>
        </View>
        <View style={{ paddingRight: 10, justifyContent: "center" }}>
          <View style={styles.container2}>
            <Picker
              selectedValue={selectedValue}
              style={{ height: 50, width: 150, color: "#fff" }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item label="Wallet" value="wallet" />
              <Picker.Item label="Online Pay" value="online" />
            </Picker>
          </View>
          <TouchableOpacity>
            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                backgroundColor: "white",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.text2}>Confirm and Pay</Text>
            </View>
          </TouchableOpacity>
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
  },
  container2: {
    flex: 1,
    alignItems: "center",
  },
  textHead: {
    paddingBottom: 10,
    paddingTop: 5,
    color: "white",
    fontSize: 16,
  },
  text: {
    paddingBottom: 2,
    paddingTop: 2,
    color: "white",
    fontSize: 12,
  },
  text2: {
    color: "#23973F",
  },
});
