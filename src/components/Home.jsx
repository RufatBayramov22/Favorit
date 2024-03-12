import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

import SpecialImg from "../assets/images/special.png";
import SpecialSecond from "../assets/images/specialSecond.png";




//contact

import BestSeller from "./BestSeller";
import Category from "./Category";
import DeliciosPrice from "./DeliciosPrice";
import IdeaInspring from "./IdeaInspring";
import Contact from "./Contact";
const Home = () => {
  return (
    <main>
      <section className="specialOffer">
        <div className="contanier">
          <div className="row">
            <div className="special">
              <>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  navigation={true}
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Pagination, Navigation,Autoplay]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="specialCard">
                      <div className="specialInfo">
                        <h2>Special Offers</h2>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.
                        </p>
                      </div>
                      <div className="specialImg">
                        <img src={SpecialImg} alt="" />
                        <img src={SpecialSecond} alt="" className="second" />
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="specialCard">
                      <div className="specialInfo">
                        <h2>Special Offers</h2>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.
                        </p>
                      </div>
                      <div className="specialImg">
                        <img src={SpecialImg} alt="" />
                        <img src={SpecialSecond} alt="" className="second" />
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="specialCard">
                      <div className="specialInfo">
                        <h2>Special Offers</h2>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.
                        </p>
                      </div>
                      <div className="specialImg">
                        <img src={SpecialImg} alt="" />
                        <img src={SpecialSecond} alt="" className="second" />
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="specialCard">
                      <div className="specialInfo">
                        <h2>Special Offers</h2>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.
                        </p>
                      </div>
                      <div className="specialImg">
                        <img src={SpecialImg} alt="" />
                        <img src={SpecialSecond} alt="" className="second" />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </>
            </div>
          </div>
        </div>
      </section>
    <BestSeller/>

   <Category/>

   <DeliciosPrice/>


<IdeaInspring/>

    <Contact/>
    </main>
  );
};

export default Home;
