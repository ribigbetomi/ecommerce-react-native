import {
  CART_ADD_ITEM,
  CART_CLEAR_ITEMS,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
} from "./../Constants/CartConstants";

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(
            (x) => (x.product === existItem.product ? item : x)
            // (x) => {
            //   let newQty = Number(existItem.qty) + Number(item.qty);
            //   return x.product === existItem.product
            //     ? { ...existItem, qty: newQty }
            //     : x;
            // }
          ),
        };
      } else {
        return {
          // ...state,
          // cartItems: state.cartItems.filter(
          //   (x) => x.product !== action.payload
          // ),
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case CART_REMOVE_ITEM:
      // const itemm = action.payload;
      // const existItemm = state.cartItems.find((x) => x.product === itemm);
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
        // cartItems: state.cartItems.map(
        //   // (x) => (x.product === itemm ? item : x)
        //   (x) => {
        //     let newQty = Number(existItemm.qty) - Number(1);
        //     return (
        //       x.product === existItemm.product && { ...existItem, qty: newQty }
        //     );
        //   }
        // ),
      };

    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };

    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };

    case CART_CLEAR_ITEMS:
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};
