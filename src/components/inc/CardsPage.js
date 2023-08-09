import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { LinearGradient } from "expo-linear-gradient";

function CardPage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/pics/pic1.png")}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <View style={styles.toolbar}>
          <TouchableOpacity>
            <MaterialCommunityIconsIcon
              name="heart-circle"
              style={styles.icon1}
            />
          </TouchableOpacity>
          <View style={styles.iconGroup}>
            <LinearGradient
              colors={["#620063", "#370037"]}
              style={styles.iconButton}
            >
              <TouchableOpacity>
                <FeatherIcon name="share-2" style={styles.icon2} />
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              colors={["#620063", "#370037"]}
              style={styles.iconButton}
            >
              <TouchableOpacity>
                <FeatherIcon name="download" style={styles.icon3} />
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              colors={["#620063", "#370037"]}
              style={styles.iconButton}
            >
              <TouchableOpacity>
                <EntypoIcon name="edit" style={styles.icon4} />
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    width: 334,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(168,168,168,1)",
    shadowOffset: {
      height: 5,
      width: 0,
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 308,
    height: 346,
  },
  toolbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", // Align items vertically within the toolbar
    padding: 10,
    backgroundColor: "#fff",
  },
  iconButton: {
    padding: 7,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    overflow: "hidden",
  },
  iconGradient: {
    borderRadius: 6,
    overflow: "hidden",
  },
  iconButtonH: {
    padding: 7,
    backgroundColor: "#620063",
    borderRadius: 6,
    justifyContent: "center",
    width: 46, // Set width for the heart icon container
    alignItems: "center", // Center heart icon vertically
  },
  iconGroup: {
    flexDirection: "row",
    alignItems: "center", // Center icons vertically
    marginRight: 9, // Add margin to the left
  },
  icon1: {
    color: "rgba(235,124,148,1)",
    fontSize: 50, // Reduce the heart icon size
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
  },
  icon4: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
  },
});

export default CardPage;
