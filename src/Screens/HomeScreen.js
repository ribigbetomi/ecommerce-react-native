import { useRoute } from "@react-navigation/native";
import { Box } from "native-base";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";
import Colors from "../color";
import HomeProduct from "../Components/HomeProduct";
import HomeSearch from "../Components/HomeSearch";

function HomeScreen() {
  const route = useRoute();
  const { keyword } = route.params;
  // console.log(keyword);
  return (
    <Box flex={1} bg={Colors.subGreen}>
      <HomeSearch />
      <HomeProduct keyword={keyword} />
    </Box>
  );
}

export default HomeScreen;
