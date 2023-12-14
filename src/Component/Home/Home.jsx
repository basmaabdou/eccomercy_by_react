import React, {  useEffect, useState } from 'react'
// import "./Home.module.css"

import FeaturedProducts from '../FeaturedProduct/FeaturedProducts';
import CategorySlider from '../CategorySlider/CategorySlider';
import MainSlider from '../MainSlider/MainSlider';
import { Helmet } from 'react-helmet';


export default function Home() {
  return <>
  {/* <Helmet>
                
                <title>Fresh Cart Home</title>
                
            </Helmet> */}
<MainSlider/>
  {/* <CategorySlider /> */}
    <FeaturedProducts/>
  </>
}
