import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/images/footerLogo.png"
import {AiFillYoutube,AiOutlineInstagram} from "react-icons/ai"
import {TfiFacebook} from "react-icons/tfi"
import {GrLinkedinOption} from "react-icons/gr"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contanier">
        <div className="row">
          <div className="footerComp">
            <div className="footerLogo">
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
              <Link to="tel:+944 55 555-55-55"> +994-(55)-555-55-55</Link>
              <p>Lorem ipsum<span></span></p>
              
              <Link to="tel:+944 55 555-55-55"> +994-(55)-555-55-55</Link>
              <p>Lorem ipsum<span></span></p>
              <Link to="tel:+944 55 555-55-55"> +994-(55)-555-55-55</Link>
              <p>Lorem ipsum<span></span></p>
            </div>
            <div className="navigation">
              <h2>Navigation</h2>
              <Link>% Special Offers</Link>
              <Link>About Us</Link>
              <Link>Products</Link>
              <Link>Vacnacy</Link>
              <Link>Contact Us</Link>
            </div>
            <div className="partners">
              <h2>For Partners</h2>
              <Link>Link 1</Link>
              <Link>Link 2</Link>
              <Link>Link 3</Link>
              <Link>Link 4</Link>
            </div>
            <div className="socialMedia">
              <h2>Media</h2>
              <AiFillYoutube/>
              <TfiFacebook/>
              <GrLinkedinOption/>
              <AiOutlineInstagram/>
            </div>
            <div className="contacts">
              <h2>Contacts</h2>
              <p>Email</p>
              <p>Email</p>
              <p>Email</p>
              <p>Email</p>

            </div>
          </div>
          <h3>© All Rights Reserved</h3>
        </div>
      </div>
    </footer>
  )
}

export default Footer