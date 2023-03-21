import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Pressable,
  ScrollView,
  Text,
} from "native-base";

import { useNavigation } from "@react-navigation/native";
import Colors from "../color";
import RatingComponent from "./RatingComponent";
import Products from "../data/products";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";
import Message from "./loadingError/Error";
import Loading from "./loadingError/Loading";
import Currency from "react-currency-formatter";

const HomeProduct = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProduct());
  }, []);
  // console.log(products);
  return (
    <>
      {error && <Message variant={Colors.red}>{error} </Message>}
      {loading && <Loading />}
      {products && (
        <ScrollView
          flex={1}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <Flex
            flexWrap="wrap"
            direction="row"
            justifyContent="space-between"
            px={6}
          >
            {products.map((p) => {
              let productId = p._id;
              return (
                <Pressable
                  onPress={() => navigation.navigate("Single", productId)}
                  key={p._id}
                  w="47%"
                  bg={Colors.white}
                  rounded="md"
                  shadow={2}
                  pt={0.3}
                  my={3}
                  pb={2}
                  overflow="hidden"
                  // onPress={() => navigation.navigate("Single", p)}
                >
                  <Image
                    source={{ uri: p.image }}
                    alt={p.name}
                    w="full"
                    h={24}
                    resizeMode="contain"
                  />
                  <Box px={4} pt={1}>
                    <Heading size="sm" bold>
                      <Currency quantity={p.price} currency="NGN" />
                    </Heading>
                    <Text fontSize={10} mt={1} width="full" isTruncated>
                      {p.name}
                    </Text>
                    <RatingComponent value={p.rating} />
                  </Box>
                </Pressable>
              );
            })}
          </Flex>
        </ScrollView>
      )}
    </>
  );
};

export default HomeProduct;
