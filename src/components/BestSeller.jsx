import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import BestCard from "../assets/images/bestSeller.png";
import Star from "../assets/images/star.png";
const BestSeller = () => {
  return (
    <section className="bestSeller">
    <div className="contanier">
      <div className="row">
        <div id="cms-editable">
        <div className="bestTitle">
          <h2>Bestseller</h2>
        </div>
        </div>
        <div className="bestSellerCard">
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
                <div className="bestCard">
                  <img src={BestCard} alt="" className="best" />
                  <div className="bestInfo">
                    <span>1 it / 300 gr</span>
                    <img src={Star} alt="" />
                  </div>
                  <div className="bestDesc" id='cms-editable'>
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

export default BestSeller