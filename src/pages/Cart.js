
import { useEffect } from "react";
import { getCart, order } from "../features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";
import { ToastContainer } from "react-toastify";
import {Button} from "react-bootstrap"
import { URL } from "../utils/config"; 


function Cart() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"))
  
  useEffect(() => {
    if(user){
        const {token, _id } = user
        console.log(user)
        dispatch(getCart({ token, _id }));
      }
    }, []);
  
    const cartState = useSelector((state) => state.product.product);

  const columns = [
    {
      title: "No",
      dataIndex: "no",
    },
    {
      title: "Image",
      dataIndex: "image",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Color",
      dataIndex: "color",
    },
    {
      title: "Size",
      dataIndex: "size",
    },
  ];

  const data = [];
  let sum = 0;
  if(user && cartState){
    for (let i = 0; i < cartState.length; i++) {
      data.push({
      key: i,
      no: i + 1,
      title: cartState[i]?.title,
      size: cartState[i]?.size,
      price: cartState[i]?.price,
      image: <img src={`${URL}${cartState[i]?.image}`} width="100px" />,
      color: ( <div
          className="color-global"
          style={{ backgroundColor: cartState[i]?.color }}/>)
        })
        sum += cartState[i]?.price
      }
    }
      
  return <div style={{overflow:"scroll"}}>
    <Table columns={columns} dataSource={data}/>
    <a href="/order"><Button>Continue to order</Button></a>
    <h5>Total Price: ${sum}</h5>
    <ToastContainer />
  </div>;
}

export default Cart;