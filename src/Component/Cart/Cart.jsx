import React, { useContext, useEffect } from 'react'
import "./Cart.module.css"
import { cartContext } from './../../Context/CartContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Cart() {

  let{ getLoggedCart ,removeProduct , updateCount } = useContext(cartContext);
  let [cartDetails , setCartDetails] = useState(null)

  async function removeItem(id) {
    let {data} = await removeProduct(id)
    setCartDetails(data)
  }
  async function updateItem(id , count) {
    let {data} = await updateCount(id , count)
    setCartDetails(data)
  }
  async function getCart() {
    let {data} = await getLoggedCart()
    setCartDetails(data)
  }


  useEffect(()=>{
    getCart();
    
  } , [])


  return <>
  {cartDetails ? <div className='w-75 my-3 bg-main-light p-3 mx-auto'>
    <h3>Shopping Cart</h3>
    {cartDetails.data.products.map((product) =>
    <div className="row border-bottom py-2 px-2 ">
        <div className="col-md-1">
          <img className='w-100' src={product.product.imageCover} alt="img product" />
        </div>
        <div className="col-md-11">
          <div className='d-flex align-items-center justify-content-between'>
            <div>
            <h6>{product.product.title}</h6>
            <h6 className='text-main p-0 y-1'>Price : {product.price} EGY</h6>
            </div>
            <div>
              <button onClick={()=> updateItem(product.product.id ,product.count +1 )} className='border-main p-1'>+</button>
              <span className='px-2'>{product.count}</span>
              <button onClick={()=> updateItem(product.product.id ,product.count -1 )} className='border-main p-1'>-</button>
            </div>
          </div>
          <button onClick={()=> removeItem(product.product.id)} className='btn p-0'><i className='ps-0 fas fa-trash px-2 text-danger font-sm'></i>Remove</button>
        </div>
        
    </div>
    
)}
<br></br>
<h6 className='  text-main mb-3 '>Total Cart Items : {cartDetails.data.totalCartPrice}</h6>
<div className="d-flex mt-3 justify-content-center">
  
<Link to={"/address"} className='btn bg-main text-white me-3'>Online Payment</Link>
</div>
  </div>
  
:""}
  </>
}
