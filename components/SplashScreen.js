import React from "react";
import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import Logo from "../assets/danang.png";
import youtube from "../assets/youtube.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import tiktok from "../assets/tiktok.png";

const BGColor = "#fff";
const TitleColor = "#F18934";

export default function Splash() {
  facebookPress = () => {
    Linking.openURL("https://www.facebook.com/danang.entertainment/");
  };
  youtubePress = () => {
    Linking.openURL("https://www.youtube.com/@DaNangTV");
  };
  twitterPress = () => {
    Linking.openURL("https://twitter.com/nang_review");
  };
  tiktokPress = () => {
    Linking.openURL("https://www.tiktok.com/@reviewdanang24");
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: BGColor,
      }}
    >
      <View
        style={{
          marginTop: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 26,
            fontWeight: "bold",
            color: TitleColor,
            marginBottom: 10,
          }}
        >
          WELCOME TO ĐÀ NẴNG
        </Text>

        <Image
          source={Logo}
          style={{
            width: 150,
            height: 150,
          }}
        ></Image>
      </View>

      <View
        style={{
          marginTop: 100,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity onPress={this.facebookPress}>
          <Image
            source={facebook}
            style={{
              width: 50,
              height: 50,
              marginHorizontal: 10,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.youtubePress}>
          <Image
            source={youtube}
            style={{
              width: 50,
              height: 50,
              marginHorizontal: 10,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={twitterPress}>
          <Image
            source={twitter}
            style={{
              width: 50,
              height: 50,
              marginHorizontal: 10,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={tiktokPress}>
          <Image
            source={tiktok}
            style={{
              width: 50,
              height: 50,
              marginHorizontal: 10,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
