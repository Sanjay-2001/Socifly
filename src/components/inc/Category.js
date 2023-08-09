import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

const categories = [
  { id: "1", name: "Good Morning" },
  { id: "2", name: "Good Night" },
  { id: "3", name: "Special Day" },
  { id: "4", name: "Love" },
  { id: "5", name: "Motivational" },
  { id: "6", name: "Devotional" },
  { id: "7", name: "Festival" },
  { id: "8", name: "Birthday" },
  { id: "9", name: "Video" },

  // Add more categories as needed
];

function Category(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.row}>
          {categories.map((category) => (
            <TouchableOpacity style={styles.button1} key={category.id}>
              <Text style={styles.categoryName}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rect: {
    width: "100%",
    height: 160,
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
  row: {
    marginTop: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  button1: {
    width: 91,
    height: 24,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 22,
    margin: 8,
  },
  categoryName: {
    color: "#121212",
    fontSize: 10,
    marginTop: 5,
    // marginLeft: 11,
    textAlign: "center",
    justifyContent: "center",
  },
});

export default Category;
