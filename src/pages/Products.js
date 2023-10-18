import React, { useEffect } from "react";
import LeftMenuProducts from "../components/LeftMenuProducts";
import { getProducts } from "../features/product/productSlice";
import {useDispatch, useSelector } from "react-redux"
import { URL } from "../utils/config";


function Products() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  },[])

  const productState = useSelector(state => state.product.product)

  return (
    <div className="container-fluid d-flex">

      <div className="left">
      <LeftMenuProducts/>
      </div>

      <div className="products-items">
        {productState?.map((ev) => (
        <a href={`/products/${ev._id}`} key={ev._id}>  
        <div className="products-box"  > 

            <div className="best-seller-orange">
              <p style={{position:'absolute'}} className="best-seller-orange-text">Best Seller</p>
            </div>
            <img src={`${URL}${ev.image}`} />

            {ev.title}
            <h6>
            {ev.description}
            </h6>
            
            <div className="d-flex">
            <h6 className="text-warning">&#9733;&#9733;&#9733;&#9733;&#9733;</h6> 
            <p className="text-primary">48.562</p>
            </div>
            <p className="">${ev.price}</p>

          </div>
        </a>

        ))}
      </div>
    </div>
  );
}

export default Products;
