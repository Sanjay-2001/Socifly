import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/MaterialIcons";
import CardPage from "./inc/CardsPage";

const screenWidth = Dimensions.get("window").width;

function CreatePage({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#620063", "#370037"]} style={styles.rect}>
        <View style={styles.iconRow}>
          <View style={styles.iconContainer}>
            <EntypoIcon name="menu" style={styles.icon}></EntypoIcon>
            <FontAwesomeIcon
              name="angle-left"
              onPress={() => navigation.navigate("HomePage")}
              style={styles.icon}
            ></FontAwesomeIcon>
          </View>
          <Text style={styles.create}>CREATE</Text>
          <MaterialIconsIcon
            name="settings"
            style={[styles.icon, styles.settingsIcon]}
          ></MaterialIconsIcon>
        </View>
      </LinearGradient>
      <View style={styles.rect2}>
        <View style={styles.row2}>
          <View style={styles.iconRow2}>
            <MaterialCommunityIconsIcon
              name="image-plus"
              style={styles.icon2}
            ></MaterialCommunityIconsIcon>
            <View style={styles.loremIpsumColumn}>
              <Text style={styles.loremIpsum}>Add Images from gallery</Text>
              <Text style={styles.loremIpsum2}>Add your name and photo</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.rect3}>
        <Text style={styles.or}>OR</Text>
        <View style={styles.icon4Row}>
          <Icon name="wallpaper" style={styles.icon4}></Icon>
          <Text style={styles.selectWallpaper}>Select Wallpaper</Text>
        </View>
      </View>
      <CardPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  rect: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 93,
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    color: "#fff",
    fontSize: 40,
    marginLeft: 10,
  },
  create: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginRight: 17,
  },
  settingsIcon: {
    marginRight: 15,
    fontSize: 35,
  },
  rect2: {
    width: "100%",
    height: 130,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(173,173,173,1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 75,
  },
  loremIpsum: {
    color: "#121212",
    fontSize: 16,
    fontWeight: "bold",
  },
  loremIpsum2: {
    color: "#121212",
    marginTop: 5,
  },
  loremIpsumColumn: {
    width: 199,
    marginTop: 10,
    marginBottom: 27,
    marginLeft: 15,
  },
  iconRow2: {
    height: 88,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 29,
    marginRight: 66,
  },
  or: {
    fontWeight: "bold",
    fontSize: 20,
  },
  rect3: {
    marginTop: 10,
    alignItems: "center",
  },
  icon4: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
  },
  selectWallpaper: {
    color: "rgba(74,144,226,1)",
    marginLeft: 20,
    marginTop: 0,
  },
  icon4Row: {
    height: 44,
    flexDirection: "row",
    marginTop: 17,
    alignItems: "center",
  },
});

export default CreatePage;
