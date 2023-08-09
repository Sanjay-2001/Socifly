import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function Untitled2(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <View style={styles.iconStackRow}>
            <View style={styles.iconStack}>
              <EntypoIcon name="menu" style={styles.icon}></EntypoIcon>
              <TextInput placeholder="" style={styles.textInput}></TextInput>
              <FeatherIcon name="search" style={styles.icon2}></FeatherIcon>
            </View>
            <TouchableOpacity style={styles.button}>
              <View style={styles.createRow}>
                <Text style={styles.create}>Create</Text>
                <IoniconsIcon
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
        </View>
        <View style={styles.rect2}>
          <View style={styles.button2Row}>
            <TouchableOpacity style={styles.button2}>
              <Text style={styles.goodMorning}>Good Morning</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button3}>
              <Text style={styles.goodNight}>Good Night</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button4}>
              <Text style={styles.specialDay}>Special Day</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button5}>
              <Text style={styles.love}>Love</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button6Row}>
            <TouchableOpacity style={styles.button6}>
              <Text style={styles.motivational}>Motivational</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button7}>
              <Text style={styles.devotional}>Devotional</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button8}>
              <Text style={styles.festival}>Festival</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button9}>
              <Text style={styles.birthday}>Birthday</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button10}>
            <Text style={styles.video}>Video</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.rect3}>
        <View style={styles.imageStackStack}>
          <View style={styles.imageStack}>
            <Image
              source={require("../assets/images/Screenshot_(529).png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <MaterialCommunityIconsIcon
              name="heart-circle"
              style={styles.icon5}
            ></MaterialCommunityIconsIcon>
          </View>
          <TouchableOpacity style={styles.button11}>
            <FeatherIcon name="share-2" style={styles.icon6}></FeatherIcon>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button12}>
            <FeatherIcon name="download" style={styles.icon7}></FeatherIcon>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button13}>
            <EntypoIcon name="edit" style={styles.icon8}></EntypoIcon>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: "rgba(161,161,161,0)"
  },
  rect: {
    top: 0,
    left: 0,
    width: 375,
    height: 117,
    position: "absolute",
    backgroundColor: "rgba(144,19,254,1)",
    flexDirection: "row"
  },
  icon: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(252,252,252,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  textInput: {
    top: 4,
    left: 39,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 34,
    width: 187,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 22
  },
  icon2: {
    top: 10,
    left: 190,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    height: 24,
    width: 24
  },
  iconStack: {
    width: 226,
    height: 44
  },
  button: {
    width: 83,
    height: 34,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 22,
    flexDirection: "row",
    marginLeft: 12,
    marginTop: 4
  },
  create: {
    fontFamily: "roboto-regular",
    color: "rgba(251,246,246,1)",
    marginTop: 7
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 29,
    height: 31,
    width: 24,
    marginLeft: 5
  },
  createRow: {
    height: 31,
    flexDirection: "row",
    flex: 1,
    marginRight: 6,
    marginLeft: 7,
    marginTop: 2
  },
  icon4: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    height: 36,
    width: 33,
    marginLeft: 7
  },
  iconStackRow: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 8,
    marginLeft: 6,
    marginTop: 52
  },
  rect2: {
    top: 109,
    width: 375,
    height: 178,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(189,188,188,1)",
    shadowOffset: {
      height: 4,
      width: 0
    },
    elevation: 60,
    shadowOpacity: 1,
    shadowRadius: 20,
    left: 0
  },
  button2: {
    width: 91,
    height: 24,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(163,163,163,1)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 22
  },
  goodMorning: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 12,
    marginTop: 5,
    marginLeft: 7
  },
  button3: {
    width: 75,
    height: 24,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(163,163,163,1)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 22,
    marginLeft: 14
  },
  goodNight: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 12,
    marginTop: 5,
    marginLeft: 7
  },
  button4: {
    width: 74,
    height: 24,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(163,163,163,1)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 22,
    marginLeft: 15
  },
  specialDay: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 12,
    marginTop: 5,
    marginLeft: 5
  },
  button5: {
    width: 55,
    height: 24,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(163,163,163,1)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 22,
    marginLeft: 9
  },
  love: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 12,
    marginTop: 5,
    marginLeft: 13
  },
  button2Row: {
    height: 24,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 23,
    marginRight: 19
  },
  button6: {
    width: 79,
    height: 24,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(163,163,163,1)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 22
  },
  motivational: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 12,
    marginTop: 4,
    marginLeft: 6
  },
  button7: {
    width: 72,
    height: 24,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(163,163,163,1)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 22,
    marginLeft: 17
  },
  devotional: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 12,
    marginTop: 4,
    marginLeft: 9
  },
  button8: {
    width: 56,
    height: 24,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(163,163,163,1)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 22,
    marginLeft: 24
  },
  festival: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 12,
    marginTop: 4,
    marginLeft: 5
  },
  button9: {
    width: 66,
    height: 24,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(163,163,163,1)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 22,
    marginLeft: 19
  },
  birthday: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 12,
    marginTop: 4,
    marginLeft: 11
  },
  button6Row: {
    height: 24,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 23,
    marginRight: 19
  },
  button10: {
    width: 46,
    height: 24,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(163,163,163,1)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 22,
    marginTop: 13,
    marginLeft: 29
  },
  video: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 12,
    marginTop: 4,
    marginLeft: 7
  },
  rectStack: {
    width: 375,
    height: 287,
    marginLeft: -1
  },
  rect3: {
    width: 334,
    height: 406,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(168,168,168,1)",
    shadowOffset: {
      height: 5,
      width: 0
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    marginTop: 44,
    marginLeft: 22
  },
  image: {
    top: 0,
    left: 0,
    width: 308,
    height: 346,
    position: "absolute"
  },
  icon5: {
    top: 335,
    left: 0,
    position: "absolute",
    color: "rgba(235,124,148,1)",
    fontSize: 53,
    height: 58,
    width: 53
  },
  imageStack: {
    top: 0,
    left: 0,
    width: 308,
    height: 393,
    position: "absolute"
  },
  button11: {
    top: 346,
    left: 124,
    width: 46,
    height: 44,
    position: "absolute",
    backgroundColor: "rgba(144,19,254,1)",
    borderRadius: 8
  },
  icon6: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginTop: 2,
    marginLeft: 3
  },
  button12: {
    top: 346,
    left: 185,
    width: 46,
    height: 44,
    position: "absolute",
    backgroundColor: "rgba(144,19,254,1)",
    borderRadius: 8
  },
  icon7: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginLeft: 3
  },
  button13: {
    top: 346,
    left: 247,
    width: 46,
    height: 44,
    position: "absolute",
    backgroundColor: "rgba(144,19,254,1)",
    borderRadius: 8
  },
  icon8: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    height: 44,
    width: 40,
    marginLeft: 2
  },
  imageStackStack: {
    width: 308,
    height: 393,
    marginLeft: 13
  }
});

export default Untitled2;
