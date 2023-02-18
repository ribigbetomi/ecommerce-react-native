import React from "react";
import { Text, ScrollView, Pressable, HStack, Button } from "native-base";
import { Box } from "native-base";
import Colors from "./../color";

const Order = () => {
  return (
    <Box w="full" bg={Colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Paind Orders */}
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            bg={Colors.deepGray}
            py={5}
            px={5}
          >
            <Text fontSize={9} color={Colors.blue} isTruncated>
              65184921684921
            </Text>
            <Text fontSize={12} bold color={Colors.black} isTruncated>
              PAID
            </Text>
            <Text fontSize={11} italic color={Colors.black} isTruncated>
              Des 12 2022
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg={Colors.main}
              _text={{ color: Colors.white }}
              _pressed={{ bg: Colors.main }}
            >
              $456
            </Button>
          </HStack>
        </Pressable>
        {/* not paid orders */}
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            bg={Colors.white}
            py={5}
            px={5}
          >
            <Text fontSize={9} color={Colors.blue} isTruncated>
              65184921684921
            </Text>
            <Text fontSize={12} bold color={Colors.black} isTruncated>
              NOT PAID
            </Text>
            <Text fontSize={11} italic color={Colors.black} isTruncated>
              Des 12 2021
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg={Colors.red}
              _text={{ color: Colors.white }}
              _pressed={{ bg: Colors.red }}
            >
              $456
            </Button>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  );
};

export default Order;
