import React from 'react'
import "./CategorySlider.module.css"
import { useQuery } from 'react-query'
import axios from 'axios'

import Slider from "react-slick";

export default function CategorySlider() {

  function getCategory() {
    

    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    
  }

  let {isError , isLoading , data , isFetching} =useQuery("categorySlider" , getCategory)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1
  };
   
  return <>
  {data?.data.data?
      <Slider className='my-5' {...settings}>
        {data?.data.data.map((category)=> <img height={250} className='w-100' src={category.image} alt="category" key={category._id}/>
        )}
        </Slider>


:''}
  </>
}
