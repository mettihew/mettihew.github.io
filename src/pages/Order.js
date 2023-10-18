
import { useEffect, useState } from "react";
import { getOrder, order, deleteCart } from "../features/order/orderSlice";
import { getCart } from "../features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Button } from "react-bootstrap"
import { URL } from "../utils/config"; 


function Order() {
  const dispatch = useDispatch();
  let token = localStorage.getItem('token')

  useEffect(() =>{
    dispatch(getCart({token}))
    dispatch(getOrder())
  },[])


     const cartState = useSelector((state) => state.product.product);
     
     const orderHandler = async() => {
       await dispatch(order(cartState))
       await dispatch(deleteCart())
       await dispatch(getOrder())
       
      }
      const orderState = useSelector((state) => state.order.order);

      let sum = 0;
      //  orderState[0]?.order?.map(ev => sum += ev.price)
       



  return (
        <div className="grid">   
    <div className="center">
    <div className="payment">
      <h4>Credit card detail</h4>
    <input placeholder="card number" defaultValue={"4000-9853-3237-5600"}/>
    <div className="d-flex">
    <input placeholder="month" defaultValue={"05"}/>
    <input placeholder="year" defaultValue={"09"}/>
    </div>
    <input placeholder="cvv" defaultValue={"666"}/>
    <Button onClick={orderHandler}>Submit your order</Button>
    </div>

<div className="d-grid">
{ orderState.length > 0 &&
orderState?.map(ev => (

  <div key={ev._id} className="p-3 align m-2">
    <p>price will be here</p>
   {ev?.order.map(ev => (
    <div key={ev._id}>
    <img  src={`${URL}${ev.image}`} width="100px"/>
    </div>
    ))} 
    </div>
    ))
  }

    </div>



    <p>price: {sum}</p>
  
    <ToastContainer />
  </div>
  </div>

)}

export default Order;