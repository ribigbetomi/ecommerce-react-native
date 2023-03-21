import axios from "axios";
import { url } from "../../splice/api";
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_LIST_MY_FAIL,
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_SUCCESS,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
} from "../Constants/OrderConstants";
import { CART_CLEAR_ITEMS } from "./../Constants/CartConstants";
import { ORDER_CREATE_FAIL } from "./../Constants/OrderConstants";
import { logout } from "./UserActions";

//  CREATE ORDER
export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_CREATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(`${url}/api/orders`, order, config);

    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
    // dispatch({ type: CART_CLEAR_ITEMS, payload: data });

    // localStorage.removeItem("cartItems");
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }

    dispatch({
      type: ORDER_CREATE_FAIL,
      payload: message,
    });
  }
};

//  ORDER DETAILS
export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`${url}/api/orders/${id}`, config);
    // console.log(data, "getOrderDetails");
    // console.log(data, "orderDetailsss");

    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }

    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: message,
    });
  }
};

//  ORDER PAY
// export const payOrder =
//   (orderId, paymentResult) => async (dispatch, getState) => {
//     try {
//       dispatch({ type: ORDER_PAY_REQUEST });

//       const {
//         userLogin: { userInfo },
//       } = getState();

//       const config = {
//         headers: {
//           Authorization: `Bearer ${userInfo.token}`,
//           "Content-Type": "application/json",
//         },
//       };

//       const { data } = await axios.put(
//         `${url}/api/orders/${orderId}/pay`,
//         paymentResult,
//         config
//       );

//       dispatch({ type: ORDER_PAY_SUCCESS, payload: data });
//     } catch (error) {
//       const message =
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message;

//       if (message === "Not authorized, token failed") {
//         dispatch(logout());
//       }

//       dispatch({
//         type: ORDER_CREATE_FAIL,
//         payload: message,
//       });
//     }
//   };

//  ORDER PAY PAYSTACK
export const payOrderr = (orderId, reference) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_PAY_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        authorization: `Bearer ${userInfo.token}`,
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      `${url}/api/orders/${orderId}/${reference}/paystack`,
      {},
      config
    );
    // console.log(data, "payOrderr");

    dispatch({ type: ORDER_PAY_SUCCESS });
    // navigation.navigate("Order", orderId);
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    if (message === "Not authorized, token failed") {
      // console.log(message);
      dispatch(logout());
    }

    dispatch({
      type: ORDER_CREATE_FAIL,
      payload: message,
    });
  }
};

//  USER ORDERS
export const listMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_LIST_MY_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`${url}/api/orders`, config);

    dispatch({ type: ORDER_LIST_MY_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }

    dispatch({
      type: ORDER_LIST_MY_FAIL,
      payload: message,
    });
  }
};
