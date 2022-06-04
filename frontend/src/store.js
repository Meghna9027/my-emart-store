import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { newReviewReducer, productDetailsReducer, productsReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import { userReducer } from "./reducers/userReducer";
import { myOrdersReducer, newOrderReducer, orderDetailsReducer } from "./reducers/orderReducer";

const reducer = combineReducers({
    products: productsReducer,
    productDetailsReducer: productDetailsReducer,
    userReducer: userReducer,
    cartReducer: cartReducer,
    newOrderReducer: newOrderReducer,
    myOrdersReducer: myOrdersReducer,
    orderDetailsReducer: orderDetailsReducer,
    newReviewReducer: newReviewReducer
});

let initialState ={
  cartReducer: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;