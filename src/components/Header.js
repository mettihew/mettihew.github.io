import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getProducts} from '../features/product/productSlice'
import { useNavigate } from 'react-router-dom'



function Header() {
  const dispatch = useDispatch()
  const [search, setSearch] = useState(false)
  const navigate = useNavigate()
   let data;
   const user = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    dispatch(getProducts())
  },[search])

 const pState = useSelector(state => state.product.product)

 const submitHandler = async() => {
 await localStorage.setItem("search", search)
 await   navigate('/search')
 }

  return (
    <div className="container-fluid header">





<div className="between">

  <div className="around" style={{width:"130px"}}  >
        <i className="fa fa-bars" style={{ fontSize: "30px", color:'white' }}/>
        <a href="/" className="no-a"><h2>shop</h2></a>
      </div>
      <div className="around" style={{width:"130px"}}>
        
        <div className='d-flex'>
        <a href='/login' className="align no-a">
        {user ? <p>{user.name}</p> : <p>login</p>}
        <i className="fa fa-user" style={{ fontSize: "30px" }} /> 
        </a> 
        </div> 

      <a href="/cart" className="no-a">
          <i className="fa fa-shopping-cart" style={{ fontSize: "30px" }}/>
        </a>
        </div>
</div>

<div className="around">
  <form onSubmit={submitHandler} className='w-100 d-flex'>
          <input type="text" placeholder="Search..." className="header-search-input" onChange={(ev) => setSearch(ev.target.value)} />
          <i className="fa fa-search header-search-icon"/>
  </form>
</div>


{search && pState?.map((eve) => {
          data = eve.title.toLowerCase()
          if(data.match(search)){
            return <a href={`/products/${eve._id}`} key={eve._id}> <p>{eve.title}</p> </a>
        }
})}


<div className="header-items">
        <a href="/products">ALL</a>
        <a href="/products">Today's Deals</a>
        <a href="/customer">Customer  Service</a>
        <a href="/registery">Registery</a>
        <a href="/gift">Gift Cards</a>
        <a href="/products">Sell</a>
        <a href="/products">Sell</a>
        <a href="/products">Sell</a>
</div>


    </div>
  );
}

export default Header;
