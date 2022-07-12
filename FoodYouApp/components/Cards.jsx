import * as React from "react";
import { Card } from "@rneui/base";
import { View, Image } from "react-native";

export default Cards = () => {
  return (
    <Card
      containerStyle={{
        backgroundColor: "#C4C4C4",
        opacity: "0.4",
        borderRadius: "20%"
      }}
      wrapperStyle={{}}
    >
      {" "}
      <View
        style={{
          position: "relative",
          alignItems: "center"
        }}
      >
        <Image
          style={{ width: "100%", height: 100 }}
          resizeMode="contain"
          source={{ uri: "https://" }}
        />
        <Card.Divider />
        <Card.Title>CARD WITH DIVIDER</Card.Title>
      </View>
    </Card>
  );
}