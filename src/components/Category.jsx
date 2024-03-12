import React from 'react'
// import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Bakery from "../assets/images/bakert.png";
import Fruit from "../assets/images/fruit.png";
import Candy from "../assets/images/candy.jpg";
import Dairy from "../assets/images/dairy.png";
// import Products from '../utils/Products';
const Category = () => {
    // const [selectedCategory, setSelectedCategory] = useState("");
    // const [data, setData] = useState(
    //   Products.filter((curData) => curData.category === "")
    // );
    // const filterResult = (catItem) => {
    //   setSelectedCategory(catItem);
    //   const result = Products.filter((curData) => {
    //     return curData.category === catItem;
    //   });
    //   setData(result);
    // };
    // const [isOpen, setIsOpen] = useState(false);
    // const toggleDropdown = () => {
    //   setIsOpen((prevState) => !prevState);
    // };
  return (
    <section className="category">
    <div className="contanier">
      <div className="row">
        <div className="categoryTitle">
          <h2>Browse categories </h2>
        </div>
        <div className="categories">
          <>
            <Swiper
              slidesPerView={4}
              spaceBetween={40}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="bakery card">
                  <img src={Bakery} alt="" />
                  <h4>Bakery</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="fruit card">
                  <img src={Fruit} alt="" />
                  <h4>Fruits & Vegetables</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="candy card">
                  <img src={Candy} alt="" />
                  <h4>Candy & Sweets</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="dairy card">
                  <img src={Dairy} alt="" />
                  <h4>Cheese</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="dairy card">
                  <img src={Dairy} alt="" />
                  <h4  >Cheese</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="candy card">
                  <img src={Candy} alt="" />
                  <h4>Candy & Sweets</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="candy card">
                  <img src={Candy} alt="" />
                  <h4>Candy & Sweets</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bakery card">
                  <img src={Bakery} alt="" />
                  <h4>Bakery</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bakery card">
                  <img src={Bakery} alt="" />
                  <h4>Bakery</h4>
                </div>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
        <div className="categResp">
          <>
            <Swiper
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="bakery card">
                  <img src={Bakery} alt="" />
                  <h4>Bakery</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="fruit card">
                  <img src={Fruit} alt="" />
                  <h4>Fruits & Vegetables</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="candy card">
                  <img src={Candy} alt="" />
                  <h4>Candy & Sweets</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="dairy card">
                  <img src={Dairy} alt="" />
                  <h4>Cheese</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="dairy card">
                  <img src={Dairy} alt="" />
                  <h4>Cheese</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="candy card">
                  <img src={Candy} alt="" />
                  <h4>Candy & Sweets</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="candy card">
                  <img src={Candy} alt="" />
                  <h4>Candy & Sweets</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bakery card">
                  <img src={Bakery} alt="" />
                  <h4>Bakery</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bakery card">
                  <img src={Bakery} alt="" />
                  <h4>Bakery</h4>
                </div>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Category