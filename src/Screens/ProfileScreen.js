import React, { useEffect } from "react";
import { Text, Center, Image, Heading } from "native-base";
import Colors from "../color";
import Tabs from "./../Components/ProfileTabs";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../Redux/Actions/UserActions";
import moment from "moment";
import Loading from "../Components/loadingError/Loading";
import Message from "../Components/loadingError/Error";
import { FontAwesome5 } from "@expo/vector-icons";

const ProfileScreen = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);
  // console.log(userInfo, "info");

  const { loading, error, user } = useSelector((state) => state.userDetails);
  // console.log(user, "userdetails");

  useEffect(() => {
    dispatch(getUserDetails(userInfo._id));
  }, [userInfo]);

  return (
    <>
      <Center bg={Colors.main} pt={10} pb={6}>
        {error && <Message variant={Colors.red}>{error} </Message>}
        {loading && <Loading />}
        {user && (
          <>
            {/* <Image
              source={require("../../assets/default-avatar.jpg")}
              alt="profile Image"
              w={24}
              h={24}
              resizeMode="cover"
            /> */}
            <FontAwesome5 name="user" size={30} color="#fff" />
            <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
              {user.name.toUpperCase()}
            </Heading>
            <Text italic fontSize={10} color={Colors.white}>
              Joined : {moment(user.createdAt).format("ll")}
            </Text>
          </>
        )}
      </Center>
      <Tabs />
    </>
  );
};

export default ProfileScreen;
