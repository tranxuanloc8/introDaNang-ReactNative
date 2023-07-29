import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Item(props) {
  const { data } = props;
  const navigation = useNavigation();
  const ClickItem = () => {
    navigation.navigate("Detail", { data });
  };

  return (
    <TouchableOpacity onPress={ClickItem}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          backgroundColor: "#FFEDDE",
          borderRadius: 10,
          padding: 10,
        }}
      >
        {/* hình ảnh  */}
        <Image
          style={{
            width: 96,
            height: 96,
            borderRadius: 10,
          }}
          source={{ uri: data.hinhAnh[0] }}
        ></Image>
        {/* thông tin hiển thị  */}
        <View
          style={styles.inforContainer}
        >
          <Text style={styles.title}>{data.ten}</Text>
          <Text numberOfLines={2}>{data.moTa}</Text>
          <Text
            style={{
              color: "green",
            }}
            numberOfLines={1}
          >
            {data.thoiGian}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  inforContainer:{
    marginStart: 10,
    width: Dimensions.get("window").width - 96 - 40,
    flex:1,
    justifyContent:'space-evenly'
  }
});
