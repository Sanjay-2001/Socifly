import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect2}></View>
      <View style={styles.rect3}></View>
      <ImageBackground
        style={styles.rect4}
        imageStyle={styles.rect4_imageStyle}
        source={require("../assets/images/Gradient_qp5hCuk.png")}
      >
        <Text style={styles.welcome}>WELCOME!</Text>
      </ImageBackground>
      <Icon name="home" style={styles.icon}></Icon>
      <View style={styles.rect5}>
        <Text style={styles.usernameOrEmail}>Username or Email</Text>
      </View>
      <View style={styles.rect6}>
        <Text style={styles.password}>Password</Text>
      </View>
      <ImageBackground
        style={styles.rect7}
        imageStyle={styles.rect7_imageStyle}
        source={require("../assets/images/Gradient_WgsyJ83.png")}
      >
        <Text style={styles.logIn}>LOG IN</Text>
      </ImageBackground>
      <Text style={styles.loremIpsum}></Text>
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      <Text style={styles.createNewAccount}>Create new account?</Text>
      <Text style={styles.signUp}>Sign Up</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(144,19,254,1)",
    justifyContent: "space-between"
  },
  rect2: {
    flex: 1,
    backgroundColor: "rgba(244, 244, 244,1)"
  },
  rect3: {
    top: 244,
    left: -312,
    width: 100,
    height: 100,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  rect4: {
    top: -15,
    left: 0,
    width: 375,
    height: 421,
    position: "absolute"
  },
  rect4_imageStyle: {},
  welcome: {
    fontFamily: "akatab-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 50,
    marginTop: 229,
    marginLeft: 61
  },
  icon: {
    top: 28,
    left: -380,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  rect5: {
    top: 466,
    left: 50,
    width: 275,
    height: 57,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 6
  },
  usernameOrEmail: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 20,
    marginLeft: 77
  },
  rect6: {
    top: 545,
    left: 48,
    width: 275,
    height: 57,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 6
  },
  password: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 20,
    marginLeft: 107
  },
  rect7: {
    top: 630,
    left: 116,
    width: 139,
    height: 37,
    position: "absolute",
    borderRadius: 6,
    overflow: "hidden"
  },
  rect7_imageStyle: {},
  logIn: {
    fontFamily: "roboto-100",
    color: "rgba(252,250,250,1)",
    fontSize: 20,
    marginTop: 6,
    marginLeft: 39
  },
  loremIpsum: {
    top: 680,
    left: 191,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  forgotPassword: {
    top: 709,
    left: 119,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(74,144,226,1)",
    textDecorationLine: "underline",
    fontSize: 18
  },
  createNewAccount: {
    top: 746,
    left: 61,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18
  },
  signUp: {
    top: 746,
    left: 235,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(74,144,226,1)",
    fontSize: 18,
    textDecorationLine: "underline"
  }
});

export default Untitled;
