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

const { width, height } = Dimensions.get("window");

export default function Item(props) {
  const { data } = props;
  const navigation = useNavigation();
  const ClickItem = () => {
    navigation.navigate("DetailFood", { data });
  };

  return (
    <TouchableOpacity onPress={ClickItem}>
      <View style={styles.container}>
        {/* hình ảnh  */}

        <Image
          style={{ width: '100%', height: 110, borderRadius: 10 }}
          source={{ uri: data.hinhAnh[0] }}
        ></Image>

        {/* thông tin hiển thị  */}
        <View style={styles.inforContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {data.ten}
          </Text>
          <Text numberOfLines={2}>{data.moTa}</Text>
          <Text
            style={{
              color: "green",
            }}
            numberOfLines={1}
          >
            {data.gia}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFEDDE",
    padding: 5,
    borderRadius: 10,
    width: width * 0.45,
    alignItems: "center",
    height: 200,
    marginVertical: 4,
    marginHorizontal: 4
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  inforContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
