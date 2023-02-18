import React, { useState } from "react";
import {
  View,
  Text,
  Box,
  ScrollView,
  Image,
  Heading,
  HStack,
  Spacer,
} from "native-base";

import NumericInput from "react-native-numeric-input";

import { useNavigation } from "@react-navigation/native";
import RatingComponent from "../Components/RatingComponent";
import Colors from "../color";
import Buttons from "./../Components/Buttons";
import ReviewComponent from "../Components/ReviewComponent";

const SingleProductScreen = ({ route }) => {
  const [value, setValue] = useState(0);
  const navigation = useNavigation();
  const product = route.params;
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView
        px={5}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Image
          alt="image"
          w="full"
          h={300}
          resizeMode="contain"
          source={{ uri: product.image }}
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          {product.name}
        </Heading>
        <RatingComponent
          value={product.rating}
          text={`${product.numReviews} reviews`}
          size={15}
        />
        <HStack space={2} alignItems="center" my={5}>
          {product.countInStock <= 0 ? (
            <Heading bold italic color={Colors.red} fontSize={12}>
              Out of Stock
            </Heading>
          ) : (
            <NumericInput
              value={value}
              onChange={(e) => setValue(e)}
              totalWidth={140}
              totalHeight={30}
              iconSize={25}
              step={1}
              maxValue={product.countInStock}
              minValue={0}
              borderColor={Colors.deepGray}
              rounded
              textColor={Colors.black}
              iconStyle={{ color: Colors.white }}
              rightButtonBackgroundColor={Colors.main}
              leftButtonBackgroundColor={Colors.main}
            />
          )}

          <Spacer />
          <Heading bold color={Colors.black} fontSize={20}>
            ${product.price}
            {/* ${product.price} */}
          </Heading>
        </HStack>
        <Text fontSize={12} lineHeight={24}>
          {product.description}
        </Text>
        <Buttons
          bg={Colors.main}
          mt={10}
          color={Colors.white}
          onPress={() => navigation.navigate("Cart")}
        >
          ADD TO CART
        </Buttons>
        <ReviewComponent />
      </ScrollView>
    </Box>
  );
};

export default SingleProductScreen;
