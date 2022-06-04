import React, { Fragment, useEffect  } from "react";
import "./Home.css";
import ProductCard from "./ProductCard";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

    return (
        <Fragment>
          <MetaData title="EMart" />
<img className="banner" src="https://media.gq.com.mx/photos/61e70ca25def32c5619cef06/16:9/w_1280,c_limit/Lenovo%20Yoga%20Slim%207%20Pro.jpg" alt="hero_img"/>
          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )};

export default Home;