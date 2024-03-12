import React from "react";
import { Link } from "react-router-dom";
import FavImage from "../assets/images/aboutImg/aboutFavo.png";
import Fav2img from "../assets/images/aboutImg/aboutFavoirt2.png";
import Bag from "../assets/images/aboutImg/bagChoose.png";
import Bakery from "../assets/images/aboutImg/bakeryChoose.png";
import Fresh from "../assets/images/aboutImg/freshChoose.png";
import Search from "../assets/images/aboutImg/search.svg"
//contact
import Phone from "../assets/images/phone.svg";
import Location from "../assets/images/location.svg";
const AboutUs = () => {
  return (
    <main>
      <section className="aboutUs">
        <div className="contanier">
          <div className="row">
          <video width="540" height="500" controls>
      <source src="movie.mp4" type="video/mp4" />
      <source src="movie.ogg" type="video/ogg" />
      Your browser does not support the video tag.
    </video>
            <div className="aboutFavorit">
              <h2 className="none">About Us</h2>
              <h2 className="about">About Favorite Market</h2>
              <div className="favCompFirst">
                <img src={FavImage} alt="" />
                <div className="firstInfo">
                  <h4>Favorite Market</h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
              </div>
              <div className="favCompSecond">
                <div className="firstInfo">
                  <h4>Work With Us</h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                  <div className="cvInp">
                    <input type="text" placeholder="Upload Your CV.." />
                    <button type="submit">SEND</button>
                  </div>
                </div>
                <div className="favImg">
                  <img src={Fav2img} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="choose">
        <div className="contanier">
          <div className="row">
            <div className="title">
              <span></span>
              <h2>WHY CHOOSE US</h2>
              <span></span>
            </div>
            <div className="chooseProd">
              <div className="bag card">
                <img src={Bag} alt="" />
                <h3>Exclusive products</h3>
                <p>
                  Our exclusive products are the real pearls of our market. We
                  carefully select and offer only the best to our clients. These
                  unique products are not only of high quality
                </p>
              </div>
              <div className="bakery card">
                <img src={Bakery} alt="" />
                <h3>Bakery Street</h3>
                <p>
                  Welcome to Bakery Street at Favorite Market, where the aroma
                  of freshly baked goods fills the air, and every corner is a
                  delightful discovery for your taste buds.
                </p>
              </div>
              <div className="fresh card">
                <img src={Fresh} alt="" />
                <h3>Always fresh products</h3>
                <p>
                  At Favorite Market, we take pride in delivering always fresh
                  products to our valued customers. Our commitment to quality
                  means that you can trust every item on our shelves to be at
                  its peak of freshness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="searchProd">
        <div className="contanier">
          <div className="row">
            <div className="title">
            <span></span>
              <h2>YOUR FAVORITE PRODUCTS</h2>
              <span></span>
            </div>
            <div className="serch">
              <div className="inpSearch">
                  <img src={Search} alt="" />
                <input type="text" placeholder="              Bananas . . ."/>
              </div>
              <div className="elements">
                <div className="element1">
                  <p>Exclusive Products</p>
                  <p>Bakery </p>
                  <p>Fresh Products</p>
                </div>
                <div className="element1">
                  <p>Milk, cheese & eggs</p>
                  <p>Frozen Food</p>
                  <p>ECO Products</p>
                </div>
                <div className="element1">
                  <p>Drinks & Juices</p>
                  <p>House, for car</p>
                  <p>Child’s world</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="contanier">
          <div className="row">
            <h2>Contact</h2>
            <div className="contactInfo">
              <div className="leftContact">
              <iframe
      width="663"
      height="424"
      frameBorder="0"
      scrolling="no"
      marginHeight="0"
      marginWidth="0"
      id="gmap_canvas"
      src="https://maps.google.com/maps?width=763&amp;height=424&amp;hl=en&amp;q=%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20M%C9%99h%C9%99mm%C9%99d%20Nax%C3%A7%C4%B1vani%20k%C3%BC%C3%A7%C9%99si%2025A,%20Baku%201065%20Baku+(Favorit)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      title="Google Map"
    ></iframe>

          
              </div>
              <div className="rightContact">
                <p>
                  <img src={Location} alt="" />
                  Məhəmməd Naxçıvani küçəsi 25A, Baku 1065
                </p>
                <Link to="tel:+944 55 555-55-55">
                  <img src={Phone} alt="" />
                  +994-(55)-555-55-55
                </Link>
                <p>Feel the form to get call:</p>
                <form action="">
                  <input type="text" placeholder="Name Surname..." required />
                  <input type="email" placeholder="E-mail..." required />
                  <input type="tel" placeholder="Phone Number..." required />
                  <input type="text" placeholder="Message" required />
                  <button type="submit">SEND</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
