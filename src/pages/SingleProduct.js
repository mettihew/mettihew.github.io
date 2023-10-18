import React, { useState, useEffect } from "react";
import leg from "../images/men-leg.jpg"
import person1 from "../images/person1.jpg"
import person2 from "../images/person2.jpg"
import person3 from "../images/person3.jpg"
import { getAproduct } from "../features/product/productSlice";
import {useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom";
import { Rating } from 'react-simple-star-rating'
import * as yup from "yup"
import { useFormik } from "formik";
import { addToCart } from "../features/product/productSlice";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { URL } from "../utils/config"; 


function SingleProduct() {
  const [colorDiv, setColorDiv] = useState()
  const [size, setSize] = useState()
  const [submit, setSubmit] = useState(false)
  const dispatch = useDispatch()
  const location = useLocation()
  const userId = location.pathname.split("/")[2]

  const user = JSON.parse(localStorage.getItem("user"))

  const schema = yup.object({
    color: yup.string().required("Select color, "),
    size: yup.string().required('Select Size')
  })

  useEffect(() => {
    dispatch(getAproduct({_id: userId}))
   },[])
 
   const productState = useSelector(state => state.product.product)

  const formik = useFormik({
    initialValues: {
      color: "",
      size: ""
    },
    validationSchema: schema,
    onSubmit: (ev) => {
      const product = { color: ev.color, size: ev.size, title: productState[0].title, token: user.token, price:productState[0].price, image:productState[0].image,  }
      setColorDiv(ev)
    dispatch(addToCart(product))
   setSubmit(true)
    }
  })

  return (
  <div className="single-product">


    {/* the flex line top of the page */}
    <div className="single-product-header">
      {/* images */}
      <div className="single-product-images">
      <img src={`${URL}${productState[0]?.image}`} alt="product" className="single-product-big-image" />

      <div>
        <img src={`${URL}${productState[0]?.image}`} alt="product" className="single-product-small-image" />
        <img src={`${URL}${productState[0]?.image}`} alt="product" className="single-product-small-image" />
      </div>
      </div>

      {/* details */}
      <div className="d-flex flex-column w-50">
        <h4>{productState[0]?.description}</h4>
        <div className="blue"><p className="text-ifno"></p> Brand: {productState[0]?.brand}
        <p>4.7 ***** - 3,432ratings</p>
        <p className="border-bottom-global" >
          | 32 answered questions
        </p>
        </div>
        <div className="d-flex">
        <p>Price: </p>
         <h5 className="text-danger">${productState[0]?.price}.99-$161.05</h5>
        </div>
        <p>Color:</p>
        <select style={{ width: "fit-content", padding:'5px' }} onChange={formik.handleChange("color")} >
          <option>Select color</option>
          {productState[0]?.color.map((ev, id) => (
            <option onClick={() => setColorDiv(ev)} key={id}>{ev}</option>
            ))}
        </select> 

            {colorDiv && <div className="flx my-2"> <p>selected color:</p>
        <div className="color-global" style={{backgroundColor: colorDiv}}/>
             {/* <h4>{colorDiv}</h4>  */}
             </div>}

<div className="d-grid my-3">
          Size:
          <select style={{ width: "fit-content", padding:'5px' }} className="my-2" onChange={formik.handleChange("size")} >
          <option>Select size</option>
          {productState[0]?.size.map((ev, id) => (
             <option key={id} onClick={() => setSize(ev)}>{ev}</option> 
            ))}
            </select>   
             {size && <div className="flx my-2"> <p>selected size:</p> <h4>{size}</h4> </div>}
</div>


        <p className="blue">Size Chart</p>
        <p>. 100% Cotton</p>
        <p>. Imported</p>
        <p>. Lace Up closure</p>
        <p>. Machine Wash</p>
        <p>{productState[0]?.description}</p>
      <p className="blue">Show more</p>

      </div>

      {/* add to cart button */}
 
      {user ? 

      <div className="single-product-add-to-cart-button">
     {(!colorDiv || !size) &&  <p>to buy, select size and color</p>}
     {(colorDiv && size) &&  <p className="text-success">you're fine to order</p>}
      <div className="text-danger">{ formik.errors.color }{formik.errors.size} </div>
      <button className="add-to-cart-button" type="submit" onClick={formik.handleSubmit}>Add to Cart</button>
    { submit && <a href="/cart"> <i className="fa fa-shopping-cart" style={{fontSize:"30px"}} /> </a> }
      </div>

      :

      <div className="single-product-add-to-cart-button">
      <a href="/login">
      <i className="fa fa-user" style={{ fontSize: "30px" }} /> 
      <p>Login to Order</p>
      </a>
      </div>
      }


    </div>
    {/* ends of the flex line  */}





         {/* men  */}
      <img src={leg} alt="leg" width="100%"/>
<div className="m-4">
      <h5>Product Description</h5>
      <p style={{paddingBottom:"10px",marginLeft:"30px",}} className="border-bottom-global">This product is really awesome and some details will be here soon..</p>


      <h4>Product Details</h4>
      <div style={{paddingBottom:"10px",marginLeft:"30px",}} className="border-bottom-global" >

     <div className="d-flex">
      <h6 >Product Dimensions &nbsp;:</h6>&nbsp;
      <p>14.6 x 11.15 x 3.45 inches, 15.52 Ounces </p>
     </div>
     <div className="d-flex">
      <h6 >Product Dimensions &nbsp;:</h6>&nbsp;
      <p>14.6 x 11.15 x 3.45 inches, 15.52 Ounces </p>
     </div>
     <div className="d-flex">
      <h6 >Product Dimensions &nbsp;:</h6>&nbsp;
      <p>14.6 x 11.15 x 3.45 inches, 15.52 Ounces </p>
     </div>

      </div>

      <div style={{padding:"30px 0"}} className="border-bottom-global" >
      <h4>Important information</h4>
      <p>To report an issue with this product, click here.</p>
      </div>

<div className="d-flex" style={{marginTop:"40px"}}>




  {/* customer views and  person images  */}
  <div className="single-product-review-images">
      <div>
      <h4>Customer reviews</h4>
<div className="d-flex">
      <p style={{color:'yellow', marginRight:'10px'}}> <Rating size="20" /> </p> <h6>4.7 out of 5</h6>
</div> 
      <p>3.343 global ratings</p>
      <div className="blue">

        <div className="d-flex">
        <p>5 star</p>
      <div className="front" />
            <div className="back" />
        <p>82%</p>
        </div>
        
        <div className="d-flex">
        <p>4 star</p>
      <div className="front" />
            <div className="back" />
        <p>62%</p>
        </div>
        <div className="d-flex">
        <p>3 star</p>
      <div className="front" />
            <div className="back" />
        <p>42%</p>
        </div>
        <div className="d-flex">
        <p>2 star</p>
      <div className="front" />
            <div className="back" />
        <p>12%</p>
        </div>
        <div className="d-flex">
        <p>1 star</p>
      <div className="front" />
            <div className="back" />
        <p>6%</p>
        </div>
      </div>

      </div>

      <div className="col single-product-person-images">

      <div className="between">
      <h4>Review with images</h4>
      <p className="blue">See all photos</p>
      </div>
      <div className="align" style={{borderBottom: "1px solid grey", paddingBottom:"30px" }}>
          <i className="fa fa-arrow-left" />
            <img src={person1} className="person-image" />
            <img src={person2} className="person-image" />
            <img src={person3} className="person-image" />
            <img src={person1} className="person-image" />
          <i className="fa fa-arrow-right" />
      </div>
      <div style={{fontSize:"10px", padding:"20px 0" }}>

      <select style={{width:"fit-content", height:'fit-content'}}>
          <option>Top reviews</option>
      </select>

      </div>

      </div>
  </div>


</div>



</div>

<ToastContainer />


</div>
  );
}

export default SingleProduct;
