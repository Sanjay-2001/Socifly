import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function Login({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        style={styles.backgroundGradient}
        colors={["#620063", "#20042A"]}
      >
        <Text style={styles.welcome}>WELCOME!</Text>
      </LinearGradient>
      <View style={styles.content}>
        <TextInput
          placeholder="Username or Email"
          style={styles.input}
        ></TextInput>
        <TextInput placeholder="Password" style={styles.input}></TextInput>

        <LinearGradient
          colors={["#620063", "#20042A"]}
          style={styles.buttonGradient}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("HomePage")}
          >
            <Text style={styles.logIn}>LOG IN</Text>
          </TouchableOpacity>
        </LinearGradient>
        <TouchableOpacity
          onPress={() => {
            // Handle Forgot Password action here
          }}
        >
          <Text style={styles.link}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={styles.signupContainer}>
          <Text style={styles.createAccount}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              // Handle Sign Up action here
            }}
          >
            <Text style={styles.link}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    top: 10,
  },
  welcome: {
    color: "white",
    fontSize: 50,
    marginBottom: 20,
  },
  logIn: {
    marginBottom: 5,
    color: "white",
    fontSize: 20,
  },
  buttonGradient: {
    borderRadius: 6,
    marginBottom: 30,
  },
  button: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    color: "rgba(74,144,226,1)",
    textDecorationLine: "underline",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
  },
  signupContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  createAccount: {
    color: "#121212",
    fontSize: 16,
    marginRight: 5,
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 10,
    textAlign: "center",
    marginBottom: 20,
  },
});

export default Login;
