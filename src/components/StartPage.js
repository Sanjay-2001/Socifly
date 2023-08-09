import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";

const StartPage = ({ navigation }) => {
  const handleNextPage = () => {
    navigation.navigate("Login");
  };

  useEffect(() => {
    const timer = setTimeout(handleNextPage, 1000); // 4 seconds delay (4000 milliseconds)

    // Clean up the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient colors={["#620063", "#20042A"]} style={styles.container}>
      <TouchableOpacity onPress={handleNextPage}>
        <Image
          source={require("../assets/images/logo.png")}
          resizeMode="contain"
          style={styles.image}
        />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 146,
    height: 146,
    alignSelf: "center",
  },
});

export default StartPage;
