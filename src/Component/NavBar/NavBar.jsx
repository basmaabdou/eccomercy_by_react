import React, { useContext } from 'react'
import "./NavBar.module.css"
import {Link, useNavigate} from "react-router-dom"
import logo from "../../Assets/images/freshcart-logo.svg"
import { userContext } from '../../Context/UserContext'
// import jwt_decode from "jwt-decode";



export default function NavBar() {

  // let encodedToken = localStorage.getItem("userToken")
  // let decodedToken = jwt_decode(encodedToken)


let {userToken , setUserToken} = useContext(userContext)
let navigate = useNavigate()

function logOut() {
  localStorage.removeItem('userToken')
  setUserToken(null)
  navigate("/login")
}

  return <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        {userToken !== null?
        <>
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/categories">Categories</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart">Cart</Link>
        </li>
        
        </>: ""}
        
        

        
        </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
  
        {userToken !== null ?<>
          <li className="nav-item">
          <span className="nav-link cursor-pointer" onClick={()=> logOut()}>LogOut</span>
        </li>
        </>:
        <>
        
        <li className="nav-item">
          <Link className="nav-link" to="/login">LogIn</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li>
        
        </>}
       
        
        
        
        

        
        </ul>
      
    </div>
  </div>
</nav>
  </>
}
