import * as React from "react";
import { Button } from "@rneui/base";

export default () => {
  return (
    <Button
      buttonStyle={{
        width: 150,
        backgroundColor: "rgba(111, 202, 186, 1)",
        borderRadius: 5
      }}
      containerStyle={{ margin: 5 }}
      disabledStyle={{
        borderWidth: 2,
        borderColor: "#00F"
      }}
      disabledTitleStyle={{ color: "#00F" }}
      linearGradientProps={null}
      iconContainerStyle={{ background: "#000" }}
      loadingProps={{ animating: true }}
      loadingStyle={{}}
      onPress={() => alert("click")}
      title="Send"
      titleProps={{}}
      titleStyle={{ marginHorizontal: 5 }}
    />
  );
}