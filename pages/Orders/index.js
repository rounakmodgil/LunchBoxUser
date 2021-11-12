import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import OrderItem from "../../components/OrderItem";
const orderItems = [
  {
    pack: 1,
    status: 1,
    schedule: false,
  },
  {
    pack: 0,
    status: 0,
    schedule: true,
  },
  {
    pack: 0,
    status: 1,
    schedule: false,
  },
];
const Orders = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={{ fontWeight: "bold", paddingHorizontal: 5 }}>
          Your Orders
        </Text>

        <View>
          {orderItems.map((o) => (
            <OrderItem
              pack={o.pack}
              status={o.status}
              schedule={o.schedule}
              navigation={navigation}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 20,
  },
});

export default Orders;
