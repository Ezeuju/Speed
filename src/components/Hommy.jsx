import React from 'react'
import Nav from "../components/Nav"
import {Link} from "react-router-dom"
import { BsArrowRight } from 'react-icons/bs';
import { FaTruck } from 'react-icons/fa';
import { AiOutlineDollar} from 'react-icons/ai';
import { CiPercent} from 'react-icons/ci';
import { BiHeadphone} from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import lap9 from "../assets/lap9.png";
import lap23 from "../assets/lap23.png";
import lap12 from "../assets/lap12.png";
import lap83 from "../assets/lap83.png";
import lap63 from "../assets/lap63.png";
import lap73 from "../assets/lap73.png";
// import lap3 from "../assets/lap3.png";
import Footer from "../components/Footer"
import Homeproduct from "../components/Homeproduct"
import "./home.css"

const Hommy = () => {
    // const [Homeproduct, setHomeproduct] = useState()
  return (
    <div>
          <Nav />
      <div className='top_banner'>
        <div className='container'>
            <div className='detail'>
                <h2>The best Laptop Collection 2023</h2>
              
                <Link to="/product">Shop Now!<BsArrowRight /></Link>
                </div>
                <div className='img_box'>
                  <img src={lap9} alt="sliderimg"/>
                </div>
             
            </div>
        
        <div className="product_type">
          <div className="container">
            <div className="box">
              <div className="img_box">
                <img src={lap23} alt="laptop" />
              </div>
              <div className="detail">
                <p>23 products</p>
              </div>
            </div>
            <div className="box">
              <div className="img_box">
                <img src={lap12} alt="laptop" />
              </div>
              <div className="detail">
                <p>29 products</p>
              </div>
            </div>
            <div className="box">
              <div className="img_box">
                <img src={lap63} alt="laptop" />
              </div>
              <div className="detail">
                <p>15 products</p>
              </div>
            </div>
            <div className="box">
              <div className="img_box">
                <img src={lap73} alt="laptop" />
              </div>
              <div className="detail">
                <p>17 products</p>
              </div>
            </div>
            <div className="box">
              <div className="img_box">
                <img src={lap83} alt="laptop" />
              </div>
              <div className="detail">
                <p>20 products</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="about">
        <div className="container">
          <div className='box'>
            <div className='icon'>
              <FaTruck />
              </div>
              <div className="detail">
                <h3>Free Shipping</h3>
                <p>Order above $1000</p>
            </div>
          </div>
          <div className='box'>
            <div className='icon'>
              < AiOutlineDollar />
              </div>
              <div className="detail">
                <h3>Return & Refund</h3>
                <p>Money Back Guaranty</p>
            </div>
          </div>
          <div className='box'>
            <div className='icon'>
              <CiPercent />
              </div>
              <div className="detail">
                <h3>Member Discount</h3>
                <p>On every Order</p>
            </div>
          </div>
          <div className='box'>
            <div className='icon'>
              <BiHeadphone />
              </div>
              <div className="detail">
                <h3>Customer Support</h3>
                <p>Every Time Call Support</p>
            </div>
          </div>
        </div>
      </div>
      <div className='product'>
      <h2>Top Products</h2>
      <div className='container'>
        {
          Homeproduct.map((curElm) => 
          {
            return(
              <div className='box' key={curElm.id}>
                <div className='img_box'>
                  <img src={curElm.Img} alt={curElm.Title}/>
                  <div className='icon'>
                    <li onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></li>
                    <li onClick={() => view (curElm)}><BsEye /></li>
                    <li><AiOutlineHeart /></li>                                     
                  </div>
                </div>
                <div className='detail'>
                  <p>{curElm.Cat}</p>
                  <h3>{curElm.Title}</h3>
                  <h4>${curElm.Price}</h4>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
    <div className='banner'>
      <div className='container'>
      <div className='detail'>
        <h4>LATEST TECHNOLOGY ADDED</h4>
        <h3>Apple iPad 10.2 9th Gen - 2021</h3>
        <p>$ 986</p>
        <Link to='/product' className='link'>Shop Now  <BsArrowRight /></Link>
      </div>
      <div className='img_box'>
        <img src={lap73} alt='sliderimg'></img>
      </div>
      </div>
    </div>

        <Footer />

    </div>
  )
}

export default Hommy
