import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import Category from "./inc/Category";
import CardsPage from "./inc/CardsPage";

function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#620063", "#370037"]} style={styles.rect}>
        <View style={styles.iconStackRow}>
          <View style={styles.iconStack}>
            <EntypoIcon name="menu" style={styles.icon}></EntypoIcon>
            <TextInput placeholder="" style={styles.textInput} />
            <FeatherIcon name="search" style={styles.icon2} />
          </View>
          <TouchableOpacity style={styles.button}>
            <View style={styles.createRow}>
              <Text style={styles.create}>Create</Text>

              <IoniconsIcon
                onPress={() => navigation.navigate("CreatePage")}
                name="ios-add-circle-outline"
                style={styles.icon3}
              ></IoniconsIcon>
            </View>
          </TouchableOpacity>
          <MaterialCommunityIconsIcon
            name="account-settings"
            style={styles.icon4}
          ></MaterialCommunityIconsIcon>
        </View>
      </LinearGradient>

      <ScrollView style={styles.contentContainer}>
        <CategoryScrollView />
        {/* Category component with independent scrolling */}
        <CardsPageScrollView />
        {/* CardsPage component with independent scrolling */}
      </ScrollView>
    </View>
  );
}

const CategoryScrollView = () => (
  <ScrollView style={styles.scrollView}>
    <Category />
  </ScrollView>
);

const CardsPageScrollView = () => (
  <ScrollView style={styles.scrollView}>
    <CardsPage />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "rgba(161,161,161,0)",
  },
  rect: {
    flex: 0.13,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    overflow: "hidden", // Clip the gradient within the rect
  },
  contentContainer: {
    flex: 0.87, // Use remaining space for content
  },
  scrollView: {
    marginBottom: 20, // Add margin to separate the ScrollView sections
  },
  icon: {
    color: "rgba(252,252,252,1)",
    fontSize: 40,
  },
  textInput: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
    paddingLeft: 10, // Added paddingLeft for the search icon
    color: "#121212",
    height: 34,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 22,
    color: "#fff",
  },
  icon2: {
    position: "absolute", // Absolute positioning for the search icon
    right: 18,
    top: 7,
    color: "rgba(255,255,255,1)",
    fontSize: 24,
  },
  iconStack: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    position: "relative", // Relative positioning for the icon stack
  },
  button: {
    width: 100,
    height: 34,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  create: {
    marginLeft: 10,
    color: "rgba(251,246,246,1)",
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 29,
    marginLeft: 10,
  },
  createRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon4: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
  },
  iconStackRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default HomePage;
