import * as React from "react";
import { Header} from "@rneui/base";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default () => {
  return (
    <Header
      backgroundColor="#41ac92"
      backgroundImageStyle={{}}
      barStyle="default"
      centerComponent={{
        text: "FoodYou",
        style: { color: "#fff" }
      }}
      centerContainerStyle={{}}
      containerStyle={{ width: 350 }}
      leftContainerStyle={{}}
      linearGradientProps={{}}
      placement="center"
      rightContainerStyle={{}}
      statusBarProps={{}}
    />
  );
}