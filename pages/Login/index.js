 import React, { useState } from "react";
 import {
   StyleSheet,
   Text,
   View,
   Image,
   TextInput,
   TouchableOpacity,
   ScrollView,
 } from "react-native";

 import { loginUser } from "../../api/apifunction";
 import { setAppToken } from "../../util/token";
 import Banner from "../../assets/banner1.png";
 
 const Login = ({  navigation }) => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
 
   const handleSubmit = async() => {
    const res = await loginUser(email, password);
    console.log(res.data);
    if (res) {
      const tok = res.data["bearer-token"];
      console.log(tok);
      setAppToken(tok);
      navigation.navigate("maintabscreen");
    } else {
      alert("Something Went Wrong. Please try again");
    }
   };
   return (
    <ScrollView>
     <View style={styles.container}>
       <View
         style={{
           justifyContent: "center",
           alignItems: "center",
           paddingTop: 20,
         }}
       >
         <Text style={{ fontSize: 16 }}>Lunch Box</Text>
       </View>
       <View style={{ justifyContent: "center", alignItems: "center" }}>
         <Image
           source={Banner}
           style={{ height: 200, resizeMode: "contain", marginTop: 30 }}
         />
       </View>
 
       <View style={{ justifyContent: "center", paddingBottom: 10 }}>
         <Text style={styles.texthead}>Login</Text>
         <View style={styles.inputcontainer}>
           <TextInput
             placeholderTextColor={"#555"}
             style={styles.input}
             value={email}
             onChangeText={setEmail}
             placeholder={"Email"}
           />
           <TextInput
             placeholderTextColor={"#555"}
             secureTextEntry={true}
             style={styles.input}
             value={password}
             onChangeText={setPassword}
             placeholder={"Password"}
           />
           <TouchableOpacity>
             <Text
               style={{ alignSelf: "flex-end", marginTop: 10, fontSize: 10 }}
             >
               Forgot password?
             </Text>
           </TouchableOpacity>
         </View>
 
         <TouchableOpacity
           onPress={() => {
           handleSubmit();
           }}
         >
           <View style={styles.container3}>
             <Text style={styles.text2}>Login</Text>
           </View>
         </TouchableOpacity>
 
         <TouchableOpacity onPress={() => navigation.navigate("phonenumber")}>
           <View style={styles.signupcontainer}>
             <Text style={{ fontSize: 16, marginTop: 25 }}>
               New User? <Text style={{ color: "#0E7783" }}>Register</Text>
             </Text>
           </View>
         </TouchableOpacity>
       </View>
       </View>
     </ScrollView>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     flexDirection: "column",
     justifyContent: "space-between",
   },
   input: {
     borderBottomColor: "#0E7783",
     borderBottomWidth: 1,
     marginTop: 15,
     marginBottom: 15,
     color: "black",
   },
   inputcontainer: {
     marginLeft: 20,
     marginRight: 20,
     marginBottom: 20,
   },
   image: {
     flex: 1,
     resizeMode: "cover",
     justifyContent: "center",
   },
   texthead: {
     color: "#098D73",
     fontSize: 20,
     fontWeight: "bold",
     textAlign: "center",
     marginBottom: 10,
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
   authcontainer: {
     flexDirection: "row",
     justifyContent: "space-evenly",
     marginTop: 20,
   },
   authitem: {
     height: 25,
     width: 100,
   },
   signupcontainer: {
     justifyContent: "center",
     alignItems: "center",
     marginTop: 10,
   },
 });
 
 export default Login;
 