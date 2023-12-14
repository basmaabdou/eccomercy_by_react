import React from 'react'
import "./NotFound.module.css"
import notFound from "../../Assets/images/error.svg"

export default function NotFound() {
  return <>
  <div className='py-4 d-flex justify-content-center'>
    <img src={notFound} alt="error" />
  </div>
  </>
}
