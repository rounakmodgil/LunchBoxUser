import React, { Component } from "react";
import { View, StyleSheet} from "react-native";

import NotificationItem from "../../components/NotificationItem";

class Notification extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headingContainer}>
          <NotificationItem />
          <NotificationItem />
        </View>
      </View>
    );
  }
}

export default Notification;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  headingContainer: {
    marginBottom: 40,
  },
  headingText: {
    fontSize: 16,
    marginLeft: 5,
    fontWeight: "bold",
  },
});
