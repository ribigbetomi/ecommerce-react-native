import { View } from "native-base";
import React from "react";
import * as Progress from "react-native-progress";
import Colors from "../../color";

const Loading = () => {
  return (
    <View alignItems="center">
      <Progress.Circle size={40} indeterminate={true} color={Colors.main} />
      {/* <div
        className="spinner-border text-success"
        role="status"
        style={{ width: "50px", height: "50px" }}
      >
        <span className="sr-only">Loading...</span>
      </div> */}
    </View>
  );
};

export default Loading;
