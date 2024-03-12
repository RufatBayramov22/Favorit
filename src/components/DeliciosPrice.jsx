import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import BestCard from "../assets/images/bestSeller.png";
import Star from "../assets/images/star.png";
const DeliciosPrice = () => {
  return (
    <section className="deliciosPrice">
    <div className="contanier">
      <div className="row">
        <div className="deliciosTitle">
          <h2>Delicious Prices</h2>
        </div>
        <div className="deliciosCard">
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
                <div className="priceCard">
                  <img src={BestCard} alt="" className="best" />
                  <div className="priceInfo">
                    <span>1 it / 300 gr</span>
                    <img src={Star} alt="" />
                  </div>
                  <div className="priceDesc">
                    <h2>Title</h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when
                      looking at its layout.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="priceCard">
                  <img src={BestCard} alt="" className="best" />
                  <div className="priceInfo">
                    <span>1 it / 300 gr</span>
                    <img src={Star} alt="" />
                  </div>
                  <div className="priceDesc">
                    <h2>Title</h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when
                      looking at its layout.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="priceCard">
                  <img src={BestCard} alt="" className="best" />
                  <div className="priceInfo">
                    <span>1 it / 300 gr</span>
                    <img src={Star} alt="" />
                  </div>
                  <div className="priceDesc">
                    <h2>Title</h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when
                      looking at its layout.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="priceCard">
                  <img src={BestCard} alt="" className="best" />
                  <div className="priceInfo">
                    <span>1 it / 300 gr</span>
                    <img src={Star} alt="" />
                  </div>
                  <div className="priceDesc">
                    <h2>Title</h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when
                      looking at its layout.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="priceCard">
                  <img src={BestCard} alt="" className="best" />
                  <div className="priceInfo">
                    <span>1 it / 300 gr</span>
                    <img src={Star} alt="" />
                  </div>
                  <div className="priceDesc">
                    <h2>Title</h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when
                      looking at its layout.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="priceCard">
                  <img src={BestCard} alt="" className="best" />
                  <div className="priceInfo">
                    <span>1 it / 300 gr</span>
                    <img src={Star} alt="" />
                  </div>
                  <div className="priceDesc">
                    <h2>Title</h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when
                      looking at its layout.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
        <div className=" bestcard">
          <>
            <Swiper
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="bestCard">
                  <img src={BestCard} alt="" className="best" />
                  <div className="bestInfo">
                    <span>1 it / 300 gr</span>
                    <img src={Star} alt="" />
                  </div>
                  <div className="bestDesc">
                    <h2>Title</h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when
                      looking at its layout.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bestCard">
                  <img src={BestCard} alt="" className="best" />
                  <div className="bestInfo">
                    <span>1 it / 300 gr</span>
                    <img src={Star} alt="" />
                  </div>
                  <div className="bestDesc">
                    <h2>Title</h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when
                      looking at its layout.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bestCard">
                  <img src={BestCard} alt="" className="best" />
                  <div className="bestInfo">
                    <span>1 it / 300 gr</span>
                    <img src={Star} alt="" />
                  </div>
                  <div className="bestDesc">
                    <h2>Title</h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when
                      looking at its layout.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bestCard">
                  <img src={BestCard} alt="" className="best" />
                  <div className="bestInfo">
                    <span>1 it / 300 gr</span>
                    <img src={Star} alt="" />
                  </div>
                  <div className="bestDesc">
                    <h2>Title</h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when
                      looking at its layout.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bestCard">
                  <img src={BestCard} alt="" className="best" />
                  <div className="bestInfo">
                    <span>1 it / 300 gr</span>
                    <img src={Star} alt="" />
                  </div>
                  <div className="bestDesc">
                    <h2>Title</h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when
                      looking at its layout.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bestCard">
                  <img src={BestCard} alt="" className="best" />
                  <div className="bestInfo">
                    <span>1 it / 300 gr</span>
                    <img src={Star} alt="" />
                  </div>
                  <div className="bestDesc">
                    <h2>Title</h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when
                      looking at its layout.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bestCard">
                  <img src={BestCard} alt="" className="best" />
                  <div className="bestInfo">
                    <span>1 it / 300 gr</span>
                    <img src={Star} alt="" />
                  </div>
                  <div className="bestDesc">
                    <h2>Title</h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when
                      looking at its layout.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bestCard">
                  <img src={BestCard} alt="" className="best" />
                  <div className="bestInfo">
                    <span>1 it / 300 gr</span>
                    <img src={Star} alt="" />
                  </div>
                  <div className="bestDesc">
                    <h2>Title</h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when
                      looking at its layout.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bestCard">
                  <img src={BestCard} alt="" className="best" />
                  <div className="bestInfo">
                    <span>1 it / 300 gr</span>
                    <img src={Star} alt="" />
                  </div>
                  <div className="bestDesc">
                    <h2>Title</h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when
                      looking at its layout.
                    </p>
                  </div>
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

export default DeliciosPrice