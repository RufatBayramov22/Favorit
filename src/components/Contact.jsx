import React from 'react'
import { Link } from 'react-router-dom'
import Phone from "../assets/images/phone.svg";
import Location from "../assets/images/location.svg";

const Contact = () => {
  return (
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
            <div className="info">
            <p>
              <img src={Location} alt="" />
              Məhəmməd Naxçıvani küçəsi 25A, Baku 1065
            </p>
            <Link to="tel:+944 55 555-55-55">
              <img src={Phone} alt="" />
              +994-(55)-555-55-55
            </Link>
            <p className="feel">Feel the form to get call:</p>
            </div>
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
  )
}

export default Contact