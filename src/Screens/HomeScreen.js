import { Box } from "native-base";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";
import Colors from "../color";
import HomeProduct from "../Components/HomeProduct";
import HomeSearch from "../Components/HomeSearch";

function HomeScreen() {
  return (
    <Box flex={1} bg={Colors.subGreen}>
      <HomeSearch />
      <HomeProduct />
    </Box>
  );
}

export default HomeScreen;
