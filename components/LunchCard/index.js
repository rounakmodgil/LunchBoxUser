import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";

import Thali from "../../assets/thali.jpeg";

export default function LunchCard({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [moncount, monsetCount] = useState(0);
  const [tuecount, tuesetCount] = useState(0);
  const [wedcount, wedsetCount] = useState(0);
  const [thucount, thusetCount] = useState(0);
  const [fricount, frisetCount] = useState(0);
  const [satcount, satsetCount] = useState(0);
  const [suncount, sunsetCount] = useState(0);
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Pressable>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 8,
            height: 210,
            overflow: "hidden",
            marginVertical: 5,
          }}
        >
          <View
            style={{
              height: 170,
              padding: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View>
                <Image
                  source={Thali}
                  style={{
                    height: 110,
                    width: 110,
                    margin: 10,
                    borderRadius: 4,
                  }}
                />
              </View>
              <View>
                <Text style={{ fontSize: 15, fontWeight: "500" }}>
                  Maharaja Thali
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 5,
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 14, fontWeight: "600" }}>
                    Rs 100
                  </Text>
                  <Text
                    style={{
                      textDecorationLine: "line-through",
                      fontSize: 12,
                      color: "#555",
                      marginLeft: 3,
                    }}
                  >
                    {" "}
                    Rs 120
                  </Text>
                </View>
                <View style={{ height: 60, justifyContent: "center" }}>
                  <Text style={{ fontSize: 13, color: "#555" }}>
                    1x ShahiPanner 1x Mixed Veg
                  </Text>
                  <Text style={{ fontSize: 13, color: "#555" }}>
                    6x Chapati 2x GulabJamun
                  </Text>
                </View>
                <Text style={{ fontSize: 13 }}>By Swatis Kitchen</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              height: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pressable
              style={{
                flex: 2,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#098D73",
              }}
            >
              {counter === 0 && (
                <Pressable onPress={() => setCounter(1)}>
                  <Text style={{ color: "#fff" }}>Get Once</Text>
                </Pressable>
              )}
              {counter !== 0 && (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Pressable
                    onPress={() => {
                      setCounter(counter - 1);
                    }}
                  >
                    <Text style={{ color: "#fff", padding:5 }}>-</Text>
                  </Pressable>
                  <Pressable>
                    <Text style={{ color: "#fff" }}>{counter}</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      setCounter(counter + 1);
                    }}
                  >
                    <Text style={{ color: "#fff", padding:5 }}>+</Text>
                  </Pressable>
                </View>
              )}
            </Pressable>

            <Pressable
              onPress={() => {
                setModalVisible(true);
              }}
              style={{
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                flex: 2,
              }}
            >
              <Text style={{ color: "#098D73", fontWeight: "500" }}>
                Schedule
              </Text>
            </Pressable>
          </View>
        </View>
      </Pressable>
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
                  source={require("../../assets/thali.jpeg")}
                />
                <View>
                  <Text style={styles.title}>Maharaja Thali</Text>
                  <Text style={styles.subtitle}>By Swati's Kitchen</Text>
                  <Text style={styles.subtitle}>Rs. 150</Text>
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
                  <Text>Monday</Text>
                </View>
                <View>
                  {moncount === 0 && (
                    <TouchableOpacity onPress={() => monsetCount(moncount + 1)}>
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
                    <TouchableOpacity onPress={() => tuesetCount(tuecount + 1)}>
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
                    <TouchableOpacity onPress={() => wedsetCount(wedcount + 1)}>
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
                    <TouchableOpacity onPress={() => thusetCount(thucount + 1)}>
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
                    <TouchableOpacity onPress={() => frisetCount(fricount + 1)}>
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
                    <TouchableOpacity onPress={() => satsetCount(satcount + 1)}>
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
                    <TouchableOpacity onPress={() => sunsetCount(suncount + 1)}>
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 10,
    backgroundColor: "white",
    marginVertical: 10,
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
  itemImage: {
    height: 90,
    width: 90,
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
});
