import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";

function OrderItem({ pack, schedule, status, navigation }) {
  const [moncount, monsetCount] = useState(0);
  const [tuecount, tuesetCount] = useState(0);
  const [wedcount, wedsetCount] = useState(0);
  const [thucount, thusetCount] = useState(0);
  const [fricount, frisetCount] = useState(0);
  const [satcount, satsetCount] = useState(0);
  const [suncount, sunsetCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headermainContainer}>
        <View style={styles.headerContainer}>
          <Image
            source={
              pack
                ? require("../../assets/box.png")
                : require("../../assets/shop.png")
            }
            style={styles.profileimg}
          />
          <View>
            <Text style={styles.headerText}>John Doe Shop</Text>
            <Text style={styles.headerSubText}>Madhapur, Hyderabad</Text>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text
              style={styles.headerText}
              style={{ textAlign: "center", fontWeight: "bold" }}
            >
              Rs. 124
            </Text>
          </View>
          <View style={styles.statusContainer}>
            {status === 0 && <Text style={styles.statusText}>Running</Text>}
            {status === 1 && <Text style={styles.statusText}>Delivered</Text>}
          </View>
        </View>
      </View>
      <View style={{ paddingHorizontal: 5, marginBottom: 5 }}></View>
      <View style={styles.itemsContainer}>
        <Text style={styles.itemsHeader}>ITEMS</Text>
        <Text style={styles.itemsText}>1 x Milk, 12 x Eggs</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingRight: 10,
        }}
      >
        <View style={styles.itemsContainer}>
          <Text style={styles.itemsHeader}>ORDERED ON</Text>
          <Text style={styles.itemsText}>07July 2021 at 12:24am</Text>
        </View>
        <View style={styles.itemsContainer}>
          <Text style={styles.itemsHeader}>ORDERED ID</Text>
          <Text style={styles.itemsText}>673482346891</Text>
        </View>
      </View>

      <View style={styles.rateContainer}>
        <TouchableOpacity>
          {schedule && (
            <TouchableWithoutFeedback
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <Text style={{ color: "#552E30", fontSize: 11 }}>
                Re-Schedule
              </Text>
            </TouchableWithoutFeedback>
          )}
          {!schedule && (
            <Text style={{ color: "#552E30", fontSize: 11 }}>Cancel</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate();
          }}
        >
          <Text style={{ color: "#552E30", fontSize: 11 }}> Rate</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Map");
          }}
        >
          <Text style={{ color: "#552E30", fontSize: 11 }}> Navigation</Text>
        </TouchableOpacity>
      </View>
      <View>
        {modalVisible && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              handlereport();
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{ flexDirection: "row", marginBottom: 20 }}>
                  <Text
                    style={{
                      marginRight: 13,
                      fontWeight: "bold",
                      borderBottomColor: "green",
                      borderBottomWidth: 1,
                    }}
                  >
                    Item 1
                  </Text>
                  <Text style={{ marginRight: 13, color: "gray" }}>Item 2</Text>
                  <Text style={{ marginRight: 13, color: "gray" }}>Item 3</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    width: 220,
                    justifyContent: "space-evenly",
                    backgroundColor: "#fff",
                  }}
                >
                  <Image
                    style={styles.itemImage}
                    source={require("../../assets/milk.png")}
                  />
                  <View>
                    <Text style={styles.title}>Amul Milk</Text>
                    <Text style={styles.subtitle}>diary</Text>
                    <Text style={styles.subtitle}>Rs. 120</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginVertical: 10,
                    width: 150,
                    marginTop: 20,
                  }}
                >
                  <View>
                    <Text>Monday</Text>
                  </View>
                  <View>
                    {moncount === 0 && (
                      <TouchableOpacity
                        onPress={() => monsetCount(moncount + 1)}
                      >
                        <View style={styles.addContainer}>
                          <Text style={{ color: "white" }}>Add +</Text>
                        </View>
                      </TouchableOpacity>
                    )}
                    {moncount !== 0 && (
                      <View style={styles.buttonContainer}>
                        <TouchableOpacity
                          onPress={() => monsetCount(moncount - 1)}
                        >
                          <Text style={styles.minus}>-</Text>
                        </TouchableOpacity>
                        <Text>{moncount}</Text>
                        <TouchableOpacity
                          onPress={() => monsetCount(moncount + 1)}
                        >
                          <Text style={styles.plus}>+</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginVertical: 10,
                    width: 150,
                  }}
                >
                  <View>
                    <Text>Tuesday</Text>
                  </View>
                  <View>
                    {tuecount === 0 && (
                      <TouchableOpacity
                        onPress={() => tuesetCount(tuecount + 1)}
                      >
                        <View style={styles.addContainer}>
                          <Text style={{ color: "white" }}>Add +</Text>
                        </View>
                      </TouchableOpacity>
                    )}
                    {tuecount !== 0 && (
                      <View style={styles.buttonContainer}>
                        <TouchableOpacity
                          onPress={() => tuesetCount(tuecount - 1)}
                        >
                          <Text style={styles.minus}>-</Text>
                        </TouchableOpacity>
                        <Text>{tuecount}</Text>
                        <TouchableOpacity
                          onPress={() => tuesetCount(tuecount + 1)}
                        >
                          <Text style={styles.plus}>+</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginVertical: 10,
                    width: 150,
                  }}
                >
                  <View>
                    <Text>Wednesday</Text>
                  </View>
                  <View>
                    {wedcount === 0 && (
                      <TouchableOpacity
                        onPress={() => wedsetCount(wedcount + 1)}
                      >
                        <View style={styles.addContainer}>
                          <Text style={{ color: "white" }}>Add +</Text>
                        </View>
                      </TouchableOpacity>
                    )}
                    {wedcount !== 0 && (
                      <View style={styles.buttonContainer}>
                        <TouchableOpacity
                          onPress={() => wedsetCount(wedcount - 1)}
                        >
                          <Text style={styles.minus}>-</Text>
                        </TouchableOpacity>
                        <Text>{wedcount}</Text>
                        <TouchableOpacity
                          onPress={() => wedsetCount(wedcount + 1)}
                        >
                          <Text style={styles.plus}>+</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginVertical: 10,
                    width: 150,
                  }}
                >
                  <View>
                    <Text>Thursay</Text>
                  </View>
                  <View>
                    {thucount === 0 && (
                      <TouchableOpacity
                        onPress={() => thusetCount(thucount + 1)}
                      >
                        <View style={styles.addContainer}>
                          <Text style={{ color: "white" }}>Add +</Text>
                        </View>
                      </TouchableOpacity>
                    )}
                    {thucount !== 0 && (
                      <View style={styles.buttonContainer}>
                        <TouchableOpacity
                          onPress={() => thusetCount(thucount - 1)}
                        >
                          <Text style={styles.minus}>-</Text>
                        </TouchableOpacity>
                        <Text>{thucount}</Text>
                        <TouchableOpacity
                          onPress={() => thusetCount(thucount + 1)}
                        >
                          <Text style={styles.plus}>+</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginVertical: 10,
                    width: 150,
                  }}
                >
                  <View>
                    <Text>Friday</Text>
                  </View>
                  <View>
                    {fricount === 0 && (
                      <TouchableOpacity
                        onPress={() => frisetCount(fricount + 1)}
                      >
                        <View style={styles.addContainer}>
                          <Text style={{ color: "white" }}>Add +</Text>
                        </View>
                      </TouchableOpacity>
                    )}
                    {fricount !== 0 && (
                      <View style={styles.buttonContainer}>
                        <TouchableOpacity
                          onPress={() => frisetCount(fricount - 1)}
                        >
                          <Text style={styles.minus}>-</Text>
                        </TouchableOpacity>
                        <Text>{fricount}</Text>
                        <TouchableOpacity
                          onPress={() => frisetCount(fricount + 1)}
                        >
                          <Text style={styles.plus}>+</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginVertical: 10,
                    width: 150,
                  }}
                >
                  <View>
                    <Text>Saturday</Text>
                  </View>
                  <View>
                    {satcount === 0 && (
                      <TouchableOpacity
                        onPress={() => satsetCount(satcount + 1)}
                      >
                        <View style={styles.addContainer}>
                          <Text style={{ color: "white" }}>Add +</Text>
                        </View>
                      </TouchableOpacity>
                    )}
                    {satcount !== 0 && (
                      <View style={styles.buttonContainer}>
                        <TouchableOpacity
                          onPress={() => satsetCount(satcount - 1)}
                        >
                          <Text style={styles.minus}>-</Text>
                        </TouchableOpacity>
                        <Text>{satcount}</Text>
                        <TouchableOpacity
                          onPress={() => satsetCount(satcount + 1)}
                        >
                          <Text style={styles.plus}>+</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginVertical: 10,
                    width: 150,
                  }}
                >
                  <View>
                    <Text>Sunday</Text>
                  </View>
                  <View>
                    {suncount === 0 && (
                      <TouchableOpacity
                        onPress={() => sunsetCount(suncount + 1)}
                      >
                        <View style={styles.addContainer}>
                          <Text style={{ color: "white" }}>Add +</Text>
                        </View>
                      </TouchableOpacity>
                    )}
                    {suncount !== 0 && (
                      <View style={styles.buttonContainer}>
                        <TouchableOpacity
                          onPress={() => sunsetCount(suncount - 1)}
                        >
                          <Text style={styles.minus}>-</Text>
                        </TouchableOpacity>
                        <Text>{suncount}</Text>
                        <TouchableOpacity
                          onPress={() => sunsetCount(suncount + 1)}
                        >
                          <Text style={styles.plus}>+</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    width: 200,
                    marginTop: 10,
                  }}
                >
                  <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Update</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Cancel</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        )}
      </View>
    </View>
  );
}

export default OrderItem;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  headermainContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: -5,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: -25,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  headerSubText: {
    fontSize: 12,
    color: "#838383",
  },
  profileimg: {
    height: 30,
    width: 30,
    marginRight: 15,
  },
  statusContainer: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "rgba(4,133,66,0.25)",
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: "center",
    marginLeft: 5,
  },
  statusText: {
    color: "#048542",
    fontSize: 10,
  },
  itemsContainer: {
    marginTop: 5,
    marginLeft: 5,
    marginBottom: 3,
  },
  itemImage: {
    height: 90,
    width: 90,
  },
  itemsHeader: {
    color: "#838383",
    fontSize: 11,
  },
  itemsText: {
    fontSize: 11,
    marginTop: 2,
    marginBottom: 5,
  },
  rateContainer: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
    padding: 8,
    marginTop: 3,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#eee",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    height: 30,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#098D73",
  },
  buttonClose: {
    backgroundColor: "#f0505c",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 20,
    textAlign: "center",
    fontSize: 16,
  },
  addContainer: {
    height: 25,
    width: 60,
    backgroundColor: "#098D73",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    height: 25,
    width: 60,
    borderRadius: 5,
    borderColor: "#098D73",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  minus: {
    paddingHorizontal: 6,
    paddingLeft: 7,
  },
  plus: {
    paddingHorizontal: 6,
    paddingRight: 7,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#838383",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
    paddingBottom: 10,
    paddingTop: 12,
  },
});
