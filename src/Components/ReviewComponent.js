import React, { useState } from "react";
import {
  Box,
  CheckIcon,
  FormControl,
  Heading,
  Text,
  TextArea,
  VStack,
  Select,
  Center,
} from "native-base";

import RatingComponent from "./RatingComponent";
import Buttons from "./Buttons";
import Colors from "../color";
import Message from "./NotificationsComponent";

const ReviewComponent = () => {
  const [rating, setRating] = useState("");

  const reviews =
    "this product is one of the best products I have ever have, this product is one of the best products I have ever have, this product is one of the best products I have ever have, this product is one of the best products I have ever have,";

  const noReviews = "sorry there is no reviews yet";
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        Reviews
      </Heading>
      {/*If there is no reviews */}
      <Message
        color={Colors.main}
        size={15}
        bg={Colors.deepGray}
        Children={noReviews}
        bold
      />

      {/*if there is reviews*/}
      <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
          User Doe
        </Heading>
        <RatingComponent value={4} size={12} />
        <Text my={2}>Jan 12 2022</Text>
        <Message color={Colors.black} size={12} Children={reviews} />
      </Box>
      {/*add review button */}

      <Box mt={6}>
        <Heading fontSize={15} bold mb={4}>
          REVIEW THIS PRODUCT
        </Heading>
        <VStack space={6}>
          <FormControl>
            <FormControl.Label
            //   _text={{
            //     fontSize: "12px",
            //     fontWeight: "bold",
            //   }}
            >
              Rating
            </FormControl.Label>

            <Select
              bg={Colors.deepGray}
              borderWidth={0}
              minWidth="200"
              rounded={5}
              py={3}
              placeholder="Choose Rate"
              _selectedItem={{
                bg: Colors.deepGray,
                endIcon: <CheckIcon size={5} />,
              }}
              value={rating}
              onValueChange={(e) => setRating(e)}
              selectedValue={rating}
            >
              <Select.Item label="1 - poor" value="1" />
              <Select.Item label="2 - fair" value="2" />
              <Select.Item label="3 - good" value="3" />
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Comment
            </FormControl.Label>
            <TextArea
              h={24}
              w="full"
              bg={Colors.deepGray}
              placeholder="This product is good ..."
              py={4}
              _focus={{
                bg: Colors.subGreen,
              }}
            />
          </FormControl>
          <Buttons bg={Colors.main} color={Colors.white}>
            SUBMIT
          </Buttons>
          {/*if not login */}
          <Message
            color={Colors.white}
            size={12}
            Children="Press 'Login' to write a review"
            bg={Colors.black}
          />
        </VStack>
      </Box>
    </Box>
  );
};

export default ReviewComponent;
