
function LeftMenuProducts() {

  const brands = [{brand: "puma"},{brand: "Nike"},{brand: "puma"},{brand: "Nike"},]

  return (
    <div className='left-menu-products container'>

        <div className='d-grid'>
        <h6>Department</h6>
        
        <a href='/'><i className='fa fa-angle-left' /> Men</a>
        <a href='/'><i className='fa fa-angle-left' /> Women</a>
        <a href='/'><i className='fa fa-angle-left' /> Children</a>
        <a href='/'><i className='fa fa-angle-left' /> Sports</a>
        <a href='/'><i className='fa fa-angle-left' /> Hike</a>
        </div>
  

  <div className='d-grid my-3'>

        <h6 style={{marginBottom:'-5px'}}>More-sustainable Prolducts</h6>

        <div className='d-flex p-l-10'>
        <input type='checkbox' />
         <p className='my-3'>&nbsp; Climate Pledge Friendly</p>
        </div>

  </div>

  <div className='d-grid'>

    <h6 style={{marginBottom:'-5px'}}>Featured Brands</h6>

    {brands.map((ev,id) => (
        <div key={id} className='d-flex p-l-10'style={{marginBottom:'-25px'}}>
            <input type='checkbox' />
            <p className='my-3'>&nbsp; {ev.brand}</p>
        </div>
    ))}

    </div>

    <h6 className="my-3" >Customer Review</h6>
    <p style={{fontSize:"30px", color:"yellow"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</p>

    <h6>Price</h6>
    {brands.map((ev,id) => (
        <div key={id} className='d-flex p-l-10'style={{marginBottom:'-25px'}}>
            <input type='checkbox' />
            <p className='my-3'>&nbsp; {ev.brand}</p>
        </div>
    ))}



<h6 style={{marginTop:"33px"}} >Seller</h6>

    {brands.map((ev,id) => (
        <div key={id} className='d-flex p-l-10'style={{marginBottom:'-25px'}}>
            <input type='checkbox' />
            <p className='my-3'>&nbsp; {ev.brand}</p>
        </div>
    ))}






































    


    </div>
  )
}

export default LeftMenuProducts