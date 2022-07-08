import * as React from "react";
import { SearchBar } from "@rneui/base";

export default Searchbar = () => {
  const [value, setValue] = React.useState("");
  return (
    <SearchBar
      platform="default"
      containerStyle={{width:"100%"}}
      inputContainerStyle={{}}
      inputStyle={{}}
      leftIconContainerStyle={{}}
      rightIconContainerStyle={{}}
      loadingProps={{}}
      onChangeText={newVal => setValue(newVal)}
      onClearText={() => console.log(onClearText())}
      placeholder="Search"
      placeholderTextColor="#888"
      cancelButtonTitle="Cancel"
      cancelButtonProps={{}}
      onCancel={() => console.log(onCancel())}
      value={value}
    />
  );
}