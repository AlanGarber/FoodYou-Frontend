import * as React from "react";
import { CheckBox } from "@rneui/base";

const CheckBoxed = (props) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <CheckBox
      checked={checked}
      checkedColor="#008700"
      containerStyle={{ width: "75%", backgroundColor:"transparent" }}
      onIconPress={() => setChecked(!checked)}
      onLongIconPress={() =>
        console.log("onLongIconPress()")
      }
      onLongPress={() => console.log("onLongPress()")}
      onPress={() => console.log("onPress()")}
      size={30}
      textStyle={{}}
      title={props.dietName}
      titleProps={{}}
      uncheckedColor="#F00"
    />
  );
}

export default CheckBoxed