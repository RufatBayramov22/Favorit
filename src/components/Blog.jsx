import React from "react";
import { Link } from "react-router-dom";
import BlogFirstImg from "../assets/images/blog/blogFirst.png";
import BonusCard from "../assets/images/blog/bonuscard.png";
import BacktoSch from "../assets/images/blog/backtosch.png";
import FavApp from "../assets/images/blog/favapp.png";
const Blog = () => {
  return (
    <main>
      <section className="blog">
        <div className="contanier">
          <div className="row">
            <h2>BLOG</h2>
            <div className="blogComp">
              <div className="blogFirstComp">
                <div className="firstImg">
                  <img src={BlogFirstImg} alt="" />
                </div>
                <div className="firstInfo">
                  <span className="new">NEW</span>
                  <h5>Get your exclusive products In our Store</h5>
                  <span className="date">19.09.2023</span>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                  <Link>MORE</Link>
                </div>
              </div>
              <div className="blogSecondComp">
                <div className="blogCards">
                  <div className="card">
                    <img src={BonusCard} alt="" />
                    <h5>Bonus Card</h5>
                    <span>11.08.2023</span>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <Link>MORE</Link>
                  </div>
                  <div className="card">
                    <img src={BacktoSch} alt="" />
                    <h5>Back to School</h5>
                    <span>05.08.2023</span>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <Link>MORE</Link>
                  </div>
                  <div className="card">
                    <img src={FavApp} alt="" />
                    <h5>Favorite App</h5>
                    <span>12.08.2023</span>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <Link>MORE</Link>
                  </div>
                </div>
                <button>MORE</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
