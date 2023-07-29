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


export default function Detail({ route }) {
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
            Vị trí:
          </Text>{" "}
          {data.viTri}
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
            Trải nghiệm:
          </Text>{" "}
          {data.traiNghiem}
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
            Di chuyển:
          </Text>{" "}
          {data.diChuyen}
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
            Thời gian mở cửa:
          </Text>{" "}
          {data.thoiGian}
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
            Giá vé:
          </Text>{" "}
          {data.giaVe}
        </Text>
      </ScrollView>
    </View>
  );
}
