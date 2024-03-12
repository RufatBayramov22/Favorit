import React from 'react'
import BakeryStreet from "../assets/images/street.png";
import KidsDay from "../assets/images/kidsday.png";
import Bonus1 from "../assets/images/bonus1.png";
import BackSchool from "../assets/images/backschool.png";
import Bonus2 from "../assets/images/bonus2.png";
const IdeaInspring = () => {
  return (
    <section className="ideaInspring">
    <div className="contanier">
      <div className="row">
        <h2>Inspiring Ideas</h2>
        <div className="ideaFirst">
          <div className="street ideaCard">
            <img src={BakeryStreet} alt="" />
            <h3>Bakery Street</h3>
            <p>Lorem ipsum Lorem ipsum Lorem ipsum</p>
          </div>
          <div className="kidsDay ideaCard">
            <img src={KidsDay} alt="" />
            <h3>Kids Day</h3>
            <p>Lorem ipsum Lorem ipsum</p>
          </div>
        </div>
        <div className="ideaSecond">
          <div className="bonus1 ideaCard">
            <img src={Bonus1} alt="" />
            <h3>Bonus Card</h3>
            <p>Lorem ipsum Lorem ipsum</p>
          </div>
          <div className="backSchool ideaCard">
            <img src={BackSchool} alt="" />
            <h3>Back to school</h3>
            <p>Lorem ipsum Lorem ipsum</p>
          </div>
          <div className="bonus2 ideaCard">
            <img src={Bonus2} alt="" />
            <h3>Bonus Card</h3>
            <p>Lorem ipsum Lorem ipsum</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default IdeaInspring