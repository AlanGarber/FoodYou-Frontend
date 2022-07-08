import * as React from "react";
import { Header, Icon } from "@rneui/base";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default () => {
  return (
    <Header
      backgroundImageStyle={{}}
      barStyle="default"
      centerComponent={{
        text: "FoodYou",
        style: { color: "#fff", fontFamily: "monospace" }
      }}
      centerContainerStyle={{}}
      containerStyle={{
        width: 350,
        backgroundColor: "#41AC92"
      }}
      leftContainerStyle={{}}
      linearGradientProps={{}}
      placement="center"
      rightContainerStyle={{}}
      statusBarProps={{}}
    />
  );
}