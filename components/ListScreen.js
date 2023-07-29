import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TextInput } from "react-native";
import Item from "./ItemLocation";
import du_lieu from "../database/data/data.locations.firebase.js";

export default function ListScreen() {
  const [error, setError] = useState([]);

  const [fullData, setFullData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchQuery, setsearchQuery] = useState("");

  useEffect(() => {
    setFullData(du_lieu);
    setSearchData(du_lieu);
  }, []);

  const handeSearch = (text) => {
    if (text) {
      const newData = fullData.filter((item) => {
        const itemData = item.ten ? item.ten.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setSearchData(newData);
      setsearchQuery(text);
      console.log(searchData.length);
    } else {
      setSearchData(fullData);
      setsearchQuery(text);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        margin: 10,
      }}
    >
      <View
        style={{
          marginTop: 30,
          marginBottom: 10,
        }}
      >
        <TextInput
          placeholder="Bạn muốn đi đâu"
          value={searchQuery}
          onChangeText={(text) => handeSearch(text)}
          clearButtonMode="always"
          autoCapitalize="none"
          autoCorrect={false}
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 10,
          }}
        ></TextInput>
      </View>
      <Text
        style={{
          fontSize: 20,
          marginBottom: 5,
        }}
      >
        Danh sách địa điểm
      </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={searchData}
        renderItem={({ item }) => <Item data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}