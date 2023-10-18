import Body from "./components/Body"
import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Products from "./pages/Products"
import SingleProduct from "./pages/SingleProduct"
import Login from "./pages/Login"
// import Test from "./Test"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import Order from "./pages/Order"
import Search from "./pages/Search"

function App() {
  return (
    <BrowserRouter>
      <Header />
    <Routes>
      <Route path="/shop" element={<Body/>} />
      {/* <Route path="/shop/test" element={<Test/>} /> */}
      <Route path="/shop/products" element={<Products/>} />
      <Route path="/shop/products/:id" element={<SingleProduct/>} />
      <Route path="/shop/login" element={<Login/>} />
      <Route path="/shop/register" element={<Register/>} />
      <Route path="/shop/cart" element={<Cart/>} />
      <Route path="/shop/order" element={<Order/>} />
      <Route path="/shop/search" element={<Search/>} />
    </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App