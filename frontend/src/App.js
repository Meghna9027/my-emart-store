import './App.css';
import { useEffect } from "react";
import {Routes, Route} from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './component/layout/Header/Header';
import Search from './component/Product/Search';
import Login from "./component/User/Login";
import store from "./store";
import { loadUser } from './actions/userAction';
// import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import Payment from "./component/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import About from "./component/layout/About/About";

const stripeApiKey="pk_test_51Kjl7CSIjPUOOOtzL4zOfLs5kFcqz4Rvywfiy6Wy09bCILJAes5Qab06Is2UkeFgkpUQvIKUNtwVXUKorkI1aCaD00PC4VNgnd";
function App() {
  const { loading ,isAuthenticated } = useSelector((state) => state.userReducer);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
  }, []);
  //  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Header />
      <Routes> 
      <Route exact path='/' element={<Home />} />
      <Route exact path='/product/:id' element={<ProductDetails />} />
      <Route exact path='/products' element={<Products />} />
      <Route path='/products/:keyword' element={<Products />} />
      <Route exact path='/search' element={<Search />} />
      <Route exact path="/about" element={<About />} />
      { !loading && isAuthenticated === false ? <Route exact path='/login' element={<Login history={[]} location={{}} />} /> : <Route exact path='/account' element={<Profile />} />}
      <Route exact path='/login' element={<Login history={[]} location={{}} />} />
      <Route exact path='/cart' element={<Cart />} />
      { !loading && isAuthenticated === false ? <Route exact path='/login' element={<Login history={[]} location={{}} />} /> : <Route exact path='/shipping' element={<Shipping />} />}
      { !loading && isAuthenticated === false ? <Route exact path='/login' element={<Login history={[]} location={{}} />} /> : <Route exact path='/process/payment' element={<Elements stripe={loadStripe(stripeApiKey)} ><Payment /></Elements>} />}
      { !loading && isAuthenticated === false ? <Route exact path='/login' element={<Login history={[]} location={{}} />} /> : <Route exact path='/success' element={<OrderSuccess />} />}
      { !loading && !isAuthenticated ? <Route exact path='/login' element={<Login history={[]} location={{}} />} /> : <Route exact path='/orders' element={<MyOrders />} />}
      { !loading && isAuthenticated === false ? <Route exact path='/login' element={<Login history={[]} location={{}} />} /> : <Route exact path='/order/confirm' element={<ConfirmOrder />} />}
      { !loading && !isAuthenticated ? <Route exact path='/login' element={<Login history={[]} location={{}} />} /> : <Route exact path='/order/:id' element={<OrderDetails />} />}
      </Routes>
      <Footer />
      </Router>
  )
}

export default App;
