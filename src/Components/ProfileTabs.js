import React, { useState } from "react";
import { useWindowDimensions, StyleSheet } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

import { Text } from "native-base";
import Colors from "../color";
import Profile from "./Profile";
import Order from "./Order";

const renderScene = SceneMap({
  first: Profile,
  second: Order,
});

const Tabs = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "PROFILE" },
    { key: "second", title: "ORDERS" },
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      // tabStyle={style.tabStyle}
      style={{ backgroundColor: Colors.white }}
      indicatorStyle={{ backgroundColor: Colors.black }}
      activeColor={Colors.black}
      inactiveColor={Colors.lightBlack}
      renderLabel={({ route, color }) => (
        <Text style={{ color, ...style.text }}>{route.title}</Text>
      )}
    />
  );
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
  );
};

const style = StyleSheet.create({
  tabStyle: {
    backgroundColor: "black",
  },
  text: {
    fontSize: 13,
    fontWeight: "bold",
  },
});

export default Tabs;
