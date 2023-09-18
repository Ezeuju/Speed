import React from 'react'
import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import  "../components/nav.css"
import logo from "../assets/logo.png";
// import { Link } from "react-router-dom";


const nav = () => {
  return (
    <>
      <div className="free">
        
            <div className="icon">  <FaTruckMoving /> </div>
            <p> FREE Shipping when shopping upto $1000
          </p>
      </div>
      <div className="main_header">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="search_box">
          <input type='text' value="" placeholder='Search Your Product...' autoComplete='off' onChange={(e) => setSearch(e.target.value)}></input>
          <button onClick={() => searchbtn (search)}>Search</button>
          </div>
          <div className="icon">
            <div className="account">
              <div className="user_icon">
              <AiOutlineUser />
              </div>
              <p>Hello, user</p>
           </div>
           <div className="second_icon">
            <p className="link"><AiOutlineHeart /></p>
            <p className="link"><AiOutlineShoppingCart /></p>
           
           </div>
              
            
          
          </div>
        </div>

      </div>
    </>
  )
}

export default nav
