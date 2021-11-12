import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";

import ScheduleItem from "../../components/ScheduleItem";

const listing = [
  {
    name: "Amul Milk",
    subtitle: "dairy",
    price: 100,
    quantity: 1,
    schedule: 0,
  },
  {
    name: "Amul Milk",
    subtitle: "dairy",
    price: 100,
    quantity: 3,
    schedule: 0,
  },
];
const listing2 = [
  {
    title: "All",
    bool: true,
  },
  {
    title: "Cat 1",
  },
  {
    title: "Cat 2",
  },
  {
    title: "Cat 3",
  },
  {
    title: "Cat 4",
  },
  {
    title: "Cat 5",
  },
];
const listing3 = [
  {
    title: "All",
    bool: true,
  },
  {
    title: "Brand 1",
  },
  {
    title: "Brand 2",
  },
  {
    title: "Brand 3",
  },
  {
    title: "Brand 4",
  },
  {
    title: "Brand 5",
  },
];
export default function Schedule({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("wallet");
  const [query, setQuery] = useState("");
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View>
            <View
              style={{
                flexDirection: "row",
                borderWidth: 0.4,
                borderColor: "#aaa",
                borderRadius: 10,
                padding: 0,
                width: "95%",
                alignItems: "center",
                alignSelf: "center",
                marginBottom: 20,
              }}
            >
              <Image
                source={require("../../assets/search.png")}
                style={{ marginLeft: 10, marginRight: 2 }}
              />
              <TextInput
                placeholder="Search any item"
                placeholderTextColor="gray"
                style={{
                  flex: 1,
                  height: 40,
                  color: "black",
                  paddingLeft: 5,
                }}
                value={query}
                onChangeText={(text) => handleSearch(text)}
              ></TextInput>
            </View>
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              height: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {listing2.map((l) => (
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#098D73",
                  backgroundColor: l.bool ? "#098D73" : "#fff",
                  height: 30,
                  width: 80,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 7,
                  marginHorizontal: 10,
                }}
              >
                <Text style={{ color: l.bool ? "#fff" : "#098D73" }}>
                  {l.title}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {listing3.map((l) => (
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#098D73",
                  backgroundColor: l.bool ? "#098D73" : "#fff",
                  height: 30,
                  width: 80,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 7,
                  marginHorizontal: 10,
                }}
              >
                <Text style={{ color: l.bool ? "#fff" : "#098D73" }}>
                  {l.title}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={{marginTop:15}}>
          <View>
            {listing.map((item) => {
              return (
                <ScheduleItem
                  name={item.name}
                  subtitle={item.subtitle}
                  price={item.price}
                  quantity={item.quantity}
                  schedule={item.schedule}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          borderTopColor: "black",
          borderTopWidth: 0.5,
          paddingTop: 20,
          paddingBottom: 15,
          backgroundColor: "#098D73",
          paddingHorizontal: 15,
        }}
      >
        <View style={{ paddingLeft: 10 }}>
          <Text style={styles.text}>2 items added</Text>

          <Text style={styles.text}>Total - 230.00</Text>
        </View>
        <View style={{ paddingRight: 10, justifyContent: "center" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("cart");
            }}
          >
            <View
              style={{
                height: 30,
                width: 90,
                backgroundColor: "white",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.text2}>Go to cart</Text>
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
  text: {
    paddingBottom: 5,
    paddingTop: 5,
    color: "white",
  },
  text2: {
    color: "#098D73",
  },
});
