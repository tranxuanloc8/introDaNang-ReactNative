import React, { useRef } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  Dimensions,
  FlatList,
  Animated,
} from "react-native";
import Swiper from "react-native-swiper";
import Item from "./ItemFood";


export default function DetailFood({ route }) {
  const { data } = route.params;
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View
      style={{
        flex: 1,
        margin: 10,
      }}
    >
      <Swiper
        containerStyle={{flex: 0.5,marginTop: 30,}}
       autoplay={true}>
        {data.hinhAnh.map((image, index) => (
          <View
            key={index}
          >
            <Image
              source={{ uri: image }}
              style={{borderRadius:10, width: "100%", height: "100%", resizeMode: "cover" }}
            />
          </View>
        ))}
      </Swiper>

      <ScrollView
        style={{
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 500,
            marginVertical: 5,
          }}
        >
          {data.ten}
        </Text>
        <Text
          style={{
            fontSize: 18,
            marginBottom: 5,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Mô tả:
          </Text>{" "}
          {data.moTa}
        </Text>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Nơi bán:
          </Text>
          {data.noiBan.map((item,index) => (
            <Text style={{
                fontSize: 18,
                marginBottom: 5,
              }} key={index}>* {item}</Text>
          ))}
        </View>
        <Text
          style={{
            fontSize: 18,
            marginBottom: 5,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Giá:
          </Text>{" "}
          {data.gia}
        </Text>
    
      </ScrollView>
    </View>
  );
}
