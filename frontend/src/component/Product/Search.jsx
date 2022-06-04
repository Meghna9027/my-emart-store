import React, { useState, Fragment } from "react";
import MetaData from "../layout/MetaData";
import "./Search.css";
import { useNavigate } from 'react-router-dom'; 
import {useDispatch } from "react-redux";
import {getProduct } from "../../actions/productAction";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const redirect = useNavigate();
  const dispatch = useDispatch();

  return (
    <Fragment>
      <MetaData title="Search A Product -- EMart" />
      <form className="searchBox" onSubmit={(e)=>{e.preventDefault();redirect(`/products/${keyword}`);dispatch(getProduct(keyword)); }}>
        <input
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
};

export default Search;
