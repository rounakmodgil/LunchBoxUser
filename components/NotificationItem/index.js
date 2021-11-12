import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image,
} from "react-native";

export default function NotificationItem(){
    return(
        <View style={{flexDirection:"row",marginTop:10,borderBottomWidth:1,borderBottomColor:"#eee"}}>
            <Image style={{height:50,width:50,resizeMode:"contain"}} source={require("../../assets/logo.png")} />
            <View style={{paddingLeft:10}}>
                <Text>heading</Text>
                <Text>Text</Text>
            </View>
        </View>
    )
}