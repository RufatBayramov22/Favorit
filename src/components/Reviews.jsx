import React from "react";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import BestCard from "../assets/images/bestSeller.png";
import Star from "../assets/images/star.png";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
const Reviews = () => {
  const [comment, setComment] = useState("");
  const [userName, setUserName] = useState(""); // State for user's name
  const [userComments, setUserComments] = useState([]);
  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  const onUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const onUserNameCommentClick = () => {
    if (userName.trim() === "") {
      alert("Kullanıcı adı boş bırakılamaz!");
      return;
    }
    setUserComments([...userComments, { userName, comment }]);
    setUserName("");
    setComment("");
  };
  return (
    <main>
      <section className="singleProduct">
        <div className="contanier">
          <div className="row">
            <div className="singleComponent">
              <div className="singleComps">
                <div className="singleSwiper">
                  <Carousel infiniteLoop autoPlay>
                    <div className="image">
                      <img src={BestCard} alt="" />
                    </div>
                    <div className="image">
                      <img src={BestCard} alt="" />
                    </div>
                    <div className="image">
                      <img src={BestCard} alt="" />
                    </div>
                    <div className="image">
                      <img src={BestCard} alt="" />
                    </div>
                  </Carousel>
                </div>
                <div className="singleInfo">
                  <div className="info">
                    <h2>Item Title</h2>
                    <span>1 it, 500 gr</span>
                    <button>Favorite Exclusives</button>
                  </div>
                  <div className="star">
                    <img src={Star} alt="" />
                  </div>
                </div>
              </div>
              <div className="singleAbout">
                <div className="single">
                  <Link className="about" to="/singleproduct">
                    About Product
                  </Link>
                  <Link className="sing" to="/reviews">
                    Reviews
                  </Link>
                </div>

                <div className="comment">
                  <div className="mainComment">
                    <input
                      type="text"
                      placeholder="Name..."
                      value={userName}
                      onChange={onUserNameChange}
                    />
                    <textarea
                      className="inputBox"
                      value={comment}
                      onChange={onChangeHandler}
                      placeholder="Write your Message..."
                    />
                    <button
                      className="commentBtn"
                      onClick={onUserNameCommentClick}
                    >
                      Send
                    </button>
                  </div>
                  <div className="add">
                    {userComments.map((userComment, index) => (
                      <div className="addComment" key={index}>
                        <div className="userName">{userComment.userName}</div>
                        <div className="commentMessage">
                          {userComment.comment}
                        </div>
                        <span></span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="weightSlides">
                <h2>Wieght / Volume :</h2>
                <>
                  <Swiper
                    navigation={true}
                    slidesPerView={3}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper firstSwiper"
                  >
                    <SwiperSlide>
                      <img src={BestCard} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={BestCard} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={BestCard} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={BestCard} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={BestCard} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={BestCard} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={BestCard} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={BestCard} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={BestCard} alt="" />
                    </SwiperSlide>
                  </Swiper>
                </>
                <>
      <Swiper
       navigation={true} 
        slidesPerView={2}
        
        pagination={{
          clickable: true,
        }}
        modules={[Navigation,Pagination]}
        className="mySwiper secondSwiper"
      >
        <SwiperSlide>
          <img src={BestCard} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BestCard} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BestCard} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BestCard} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BestCard} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BestCard} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BestCard} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BestCard} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BestCard} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Reviews;
