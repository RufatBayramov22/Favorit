import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Star from "../assets/images/star.png";
import Special from "../assets/images/catalog/catalogImg.png";
import CountdownTimer from "../Timer/CountDownTimer";
import Products from "../utils/Products";
import { Scrollbar,  } from 'swiper/modules';




const CatalogMain = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Category");
  const [data, setData] = useState(
    Products.filter((curData) => curData.category === "")
  );
  const filterResult = (catItem) => {
    setSelectedCategory(catItem);
    const result = Products.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };
  const targetDate = "2024-12-31T23:59:59";
  return (
    <main>
      <section className="catalogMain">
        <div className="contanier">
          <div className="row">
            <div className="catalogPreview">
              <div className="catalogScrool">
              <div className="catalogItem">
                        <h4 onClick={toggleDropdown}>
                          {selectedCategory === "All Category"
                            ? "All Prdoucts"
                            : selectedCategory}
                        </h4>
                        <p className={`title ${isOpen ? "open" : ""}`}>
                          Favorite Exclusives
                        </p>
                        <p onClick={() => filterResult("Receipts")}>Receipts</p>
                        <p onClick={() => filterResult("Bakery")}>
                          Bakery Street
                        </p>
                        <p onClick={() => filterResult("Beauty")}>
                          Beauty & Health
                        </p>
                        <p onClick={() => filterResult("Milk")}>
                          Milk, eggs, butter
                        </p>
                        <p onClick={() => filterResult("Cheese")}>Cheese</p>
                        <p onClick={() => filterResult("Vegetables")}>
                          Vegetables, fruits, berries
                        </p>
                        <p onClick={() => filterResult("Meat")}>
                          Meat & Poultry
                        </p>
                        <p onClick={() => filterResult("Desserts")}>Desserts</p>
                        <p onClick={() => filterResult("SeaFood")}>
                          Fish, seafood, caviar
                        </p>
                        <p onClick={() => filterResult("Farm products")}>
                          Farm products
                        </p>
                        <p onClick={() => filterResult("Сhips")}>
                          Сhips, nuts, dried fruits
                        </p>
                        <p onClick={() => filterResult("Tea")}>
                          Tea, coffee, cacao
                        </p>
                        <p onClick={() => filterResult("Water")}>
                          Water, juice, beverage
                        </p>
                        <p onClick={() => filterResult("Ice Cream")}>
                          Frozen, Ice Cream
                        </p>
                        <p onClick={() => filterResult("Kids")}>For Kids</p>
                      </div>
                      <>
                  <h2 className="respons">All Items</h2>
                  <Swiper
                    scrollbar={{
                      hide: false,
                    }}
                    modules={[Scrollbar]}
                    className="mySwiper secondSwiper"
                  >
                    <SwiperSlide>
                      <div className="secondSwiperItems">
                        <p>Favorite Exclusives</p>
                        <p onClick={() => filterResult("Receipts")}>Receipts</p>
                        <p onClick={() => filterResult("Bakery")}>
                          Bakery Street
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="secondSwiperItems">
                        <p onClick={() => filterResult("Beauty")}>
                          Beauty & Health
                        </p>
                        <p onClick={() => filterResult("Milk")}>
                          Milk, eggs, butter
                        </p>
                        <p onClick={() => filterResult("Cheese")}>Cheese</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="secondSwiperItems">
                        <p onClick={() => filterResult("Vegetables")}>
                          Vegetables, fruits, berries
                        </p>
                        <p onClick={() => filterResult("Meat")}>
                          Meat & Poultry
                        </p>
                        <p onClick={() => filterResult("Desserts")}>Desserts</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="secondSwiperItems">
                        <p onClick={() => filterResult("SeaFood")}>
                          Fish, seafood, caviar
                        </p>
                        <p onClick={() => filterResult("Farm products")}>
                          Farm products
                        </p>
                        <p onClick={() => filterResult("Сhips")}>
                          Сhips, nuts, dried fruits
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="secondSwiperItems">
                        <p onClick={() => filterResult("Tea")}>
                          Tea, coffee, cacao
                        </p>
                        <p onClick={() => filterResult("Water")}>
                          Water, juice, beverage
                        </p>
                        <p onClick={() => filterResult("Ice Cream")}>
                          Frozen, Ice Cream
                        </p>
                        <p onClick={() => filterResult("Kids")}>For Kids</p>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </>
              </div>
              <div className="catalogCards">
                <div className="firstCards">
                  {data.map((values) => {
                    const { id, title, image } = values;
                    return (
                      <>
                        <Link
                          className="bestCard "
                          to="/singleproduct"
                          key={id}
                        >
                          <img src={image} alt="" className="best" />
                          <div className="bestInfo">
                            <span>1 it / 300 gr</span>
                            <img src={Star} alt="" />
                          </div>
                          <div className="bestDesc">
                            <h2>{title}</h2>
                            <p>
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout.
                            </p>
                          </div>
                        </Link>
                      </>
                    );
                  })}

                  {/* <Link className="bestCard " to="/singleproduct">
                    <img src={SecondProd} alt="" className="best" />
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
                  </Link>
                  <Link className="bestCard " to="/singleproduct">
                    <img src={ThirdProd} alt="" className="best" />
                    <div className="bestInfo">
                      <span>1 it / 300 gr</span>
                      <img src={Star} alt="" />
                    </div>
                    <div className="bestDesc">
                      <h2>Emmentaller</h2>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="secondCards">
                  <Link className="bestCard " to="/singleproduct">
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
                  </Link>
                  <Link className="bestCard " to="/singleproduct">
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
                  </Link>
                  <Link className="bestCard " to="/singleproduct">
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
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="specialCard">
              <div className="specialImg">
                <img src={Special} alt="" />
              </div>
              <div className="specialInfo">
                <h2>Special Offers</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <div className="timer">
                  <CountdownTimer targetDate={targetDate} />
                </div>
              </div>
            </div>
            <div className="specialSecond">
              <div className="specialInfo">
                <h2>Special Offers</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <div className="timer">
                  <CountdownTimer targetDate={targetDate}/>
                </div>
              </div>
              <div className="specialImg">
                <img src={Special} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CatalogMain;
