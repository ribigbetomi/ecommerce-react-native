import React from "react";
import { Text, Center, Image, Heading } from "native-base";
import Colors from "../color";
import Tabs from "./../Components/ProfileTabs";

const ProfileScreen = () => {
  return (
    <>
      <Center bg={Colors.main} pt={10} pb={6}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/zpune/image/upload/v1644396418/random/11_dzj0un.png",
          }}
          alt="profile Image"
          w={24}
          h={24}
          resizeMode="cover"
        />
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
          Admin Doe
        </Heading>
        <Text italic fontSize={10} color={Colors.white}>
          Joined Des 12 2022
        </Text>
      </Center>
      <Tabs />
    </>
  );
};

export default ProfileScreen;
