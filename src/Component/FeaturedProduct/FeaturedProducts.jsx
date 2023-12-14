import React, { useContext, useEffect, useState } from 'react'
import "./FeaturedProducts.module.css"
import axios from 'axios'
import {useQuery} from "react-query"
import { BallTriangle } from  'react-loader-spinner'
import { Link } from 'react-router-dom'
import { cartContext } from '../../Context/CartContext'

import toast from 'react-hot-toast';
export default function FeaturedProducts(product) {


  let {addToCart}   = useContext(cartContext)
  
  
  async function addProduct(id){
    
    let response = await addToCart(id);
    if(response.data.status === 'success'){
      toast.success('Product successfully added', {
        duration: 4000,
        position: 'top-center',
      })
    }else{
      toast.error('Something fail , Try again', {
        duration: 4000,
        position: 'top-center',
      })
    }


  }

  function getAllProducts() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/products")
  }

  let {isLoading , isError , isFetching , data} = useQuery("featuredProducts" ,getAllProducts )

  return <><h2 className='mt-2'>All Products</h2>
  {isLoading? 
  <div className='w-100 d-flex justify-content-center py-5'>
  <BallTriangle
  height={100}
  width={100}
  radius={5}
  // color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
/>
</div>
:
<div className="row">
        
            {data?.data.data.map((product) => {
              return <div className="col-md-2" key={product._id}>
                <div className="product m-2 p-2">
                <Link to={`/productdetails/${product._id}`}>
                  <img className='w-100 mb-2' src={product.imageCover} alt="product" />
                  {/* <h4 className='font-sm text-main'>{product.category.name}</h4> */}
                  <h1 className='font-sm text-main'>{product.title.split(" ").slice(0 , 2)}</h1>
                  <h6 className='font-sm'>{product.description.split(" ").slice(0,2).join("         ")}</h6>
                  <p className='d-flex justify-content-between'>
                    <span>{product.price} $ </span>
                    <span>
                      <i className='fa fa-star rating-color me-1'></i>
                      {product.ratingsAverage}
                      </span>
                  </p>
                  </Link>
                
                  {/* <div class="center"> */}
                 <a href={`/productdetails/${product._id}`}>
                    <font color="#5d27b3">Details</font>
                  </a>
                  {/* </div> */}
                 
                 <button onClick={()=> addProduct(product._id)} className=' bg-main text-white w-100 btn-sm '>Add To Cart</button>
           
                {/* </Link> */}
                </div>
              </div>
            })}
          
      </div>
    }
  
  </>
}
