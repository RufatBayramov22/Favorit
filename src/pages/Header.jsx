import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/favLogo.jpg";
import { LiaAngleDownSolid } from "react-icons/lia";
import { GoSearch } from "react-icons/go";
import { BsCreditCard } from "react-icons/bs";
import { HiUserCircle } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <header className="header">
      <div className="contanier">
        <div className="row">
          <div className="headerComp">
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className="searchComp">
              <div className="searchInp">
                <li className="item">
                  By Item <LiaAngleDownSolid />
                  <ul className="dropdownContent">
                    <Link>Option 1</Link>
                    <Link>Option 2</Link>
                    <Link>Option 3</Link>
                  </ul>
                </li>
                <input type="search" placeholder="Bakery..." />
                <GoSearch className="search" />
              </div>
              <div className="cash">
                <div className="prestigeCard">
                  <Link>
                    <BsCreditCard fill="#F04923" />
                    Favorite Card
                  </Link>
                </div>
                <div className="login">
                  <Link>
                    <HiUserCircle fill="#F04923" />
                    Login
                  </Link>
                </div>

                <nav className="burgerMenu">
                  <input
                    type="checkbox"
                    id="checkbox"
                    className="burger-menu-icon"
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                  />
                  <label htmlFor="checkbox" className="toggle">
                    <div className="bars" id="bar1"></div>
                    <div className="bars" id="bar2"></div>
                    <div className="bars" id="bar3"></div>
                  </label>

                  <div className={isOpen ? "mainMenu active" : "mainMenu"}>
                    <ul className="burgerMenuItem">
                      <li>
                        <Link>%Special Offers</Link>
                      </li>
                      <li>
                        <Link>New!</Link>
                      </li>
                      <li>
                        <Link>Bakery Street</Link>
                      </li>

                      <li className="dropItem" onClick={toggleDropdown}>
                        Catalog
                        <AiFillCaretDown />
                        {isDropdownOpen && (
                          
                              <ul className="dropdownContent catalogDrop">
                    <Link to="/catalogmain">Bakery</Link>
                    <Link to="/catalogmain">Milk,Egg,Butter</Link>
                    <Link to="/catalogmain">Cheese</Link>
                    <Link to="/catalogmain">ABC Cafe</Link>
                    <Link to="/catalogmain">Vegetables, fruits, berries</Link>
                    <Link to="/catalogmain">Water,juice,drinks</Link>
                    <Link to="/catalogmain">Dishes to Order</Link>
                    <Link to="/catalogmain">Present</Link>
                    <Link to="/catalogmain">Sausages,delicacies</Link>
                    <Link to="/catalogmain">Meat and pultry</Link>
                    <Link to="/catalogmain">Fish,SeaFood,Caviar</Link>
                    <Link to="/catalogmain">Frozen,IceCream</Link>
                    <Link to="/catalogmain">Alcohol</Link>
                    <Link to="/catalogmain">Groceries, canning</Link>
                    <Link to="/catalogmain">Chips, nuts, dried fruits</Link>
                    <Link to="/catalogmain">Tea, coffee, cocoa</Link>
                    <Link to="/catalogmain">Cakes, sweets, desserts</Link>
                    <Link to="/catalogmain">Farm products</Link>
                    <Link to="/catalogmain">Conscious choice</Link>
                    <Link to="/catalogmain">Our brands</Link>
                    <Link to="/catalogmain">Household chemicals, cleaning</Link>
                    <Link to="/catalogmain">Beauty, hygiene</Link>
                    <Link to="/catalogmain">Goods for children</Link>
                    <Link to="/catalogmain">House, car, dacha</Link>
                    <Link to="/catalogmain">Home Appliances</Link>
                    <Link to="/catalogmain">Goods for pets</Link>
                    <Link to="/catalogmain">Books, office, sports</Link>
                    <Link to="/catalogmain">Pharmacy, health</Link>
                    
                          </ul>
                        )}
                      </li>
                      <li>
                        <Link>Beaty and Health</Link>
                      </li>
                      <li>
                        <Link>Food Type</Link>
                      </li>
                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link>Contact</Link>
                      </li>
                      <Link className="card">
                    <BsCreditCard fill="#F04923" />
                    Favorite Card
                  </Link>
                  <Link className="admin" to="/login">
                    <HiUserCircle fill="#F04923" />
                    Login
                  </Link>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="navComp">
            <span></span>
            <nav className="navBar">
              <ul className="navList">
                <li className="navItem baku">
                  <MdLocationOn fill="#F04923" className="navigate" />
                  Baku <LiaAngleDownSolid />
                </li>
                <li className="dropItem special">
                  %Special Offers <AiFillCaretDown />
                  <ul className="dropdownContent">
                    <Link>Option 1</Link>
                    <Link>Option 2</Link>
                    <Link>Option 3</Link>
                  </ul>
                </li>
                <p>/</p>
                <li className="navItem">
                  <Link>New!</Link>
                </li>
                <p>/</p>
                <li className="navItem">
                  <Link>Bakery Street</Link>
                </li>
                <p>/</p>
                <li className="dropItem">
                  Catalog
                  <AiFillCaretDown />
                  <ul className="dropdownContent catalogDrop">
                    <Link to="/catalogmain">Bakery</Link>
                    <Link to="/catalogmain">Milk,Egg,Butter</Link>
                    <Link to="/catalogmain">Cheese</Link>
                    <Link to="/catalogmain">ABC Cafe</Link>
                    <Link to="/catalogmain">Vegetables, fruits, berries</Link>
                    <Link to="/catalogmain">Water,juice,drinks</Link>
                    <Link to="/catalogmain">Dishes to Order</Link>
                    <Link to="/catalogmain">Present</Link>
                    <Link to="/catalogmain">Sausages,delicacies</Link>
                    <Link to="/catalogmain">Meat and pultry</Link>
                    <Link to="/catalogmain">Fish,SeaFood,Caviar</Link>
                    <Link to="/catalogmain">Frozen,IceCream</Link>
                    <Link to="/catalogmain">Alcohol</Link>
                    <Link to="/catalogmain">Groceries, canning</Link>
                    <Link to="/catalogmain">Chips, nuts, dried fruits</Link>
                    <Link to="/catalogmain">Tea, coffee, cocoa</Link>
                    <Link to="/catalogmain">Cakes, sweets, desserts</Link>
                    <Link to="/catalogmain">Farm products</Link>
                    <Link to="/catalogmain">Conscious choice</Link>
                    <Link to="/catalogmain">Our brands</Link>
                    <Link to="/catalogmain">Household chemicals, cleaning</Link>
                    <Link to="/catalogmain">Beauty, hygiene</Link>
                    <Link to="/catalogmain">Goods for children</Link>
                    <Link to="/catalogmain">House, car, dacha</Link>
                    <Link to="/catalogmain">Home Appliances</Link>
                    <Link to="/catalogmain">Goods for pets</Link>
                    <Link to="/catalogmain">Books, office, sports</Link>
                    <Link to="/catalogmain">Pharmacy, health</Link>
                  </ul>
                </li>
                <p>/</p>
                <li className="navItem">
                  <Link>Beauty and Health</Link>
                </li>
                <p>/</p>
                <li className="dropItem">
                  Food Type
                  <AiFillCaretDown />
                  <ul className="dropdownContent">
                    <Link>Lactos-free</Link>
                    <Link>Sugar-free</Link>
                    <Link>Gluten-free</Link>
                    <Link>Organic</Link>
                    <Link>Vegan</Link>
                  </ul>
                </li>

                <p>/</p>
                <li className="navItem">
                  <Link to="/blog">Blog</Link>
                </li>
                <p>/</p>
                <li className="navItem">
                  <Link to="/about">About Us</Link>
                </li>
                <p>/</p>
                <li className="navItem">
                  <Link>Career</Link>
                </li>
                <p>/</p>
                <li className="navItem">
                  <Link>Contact</Link>
                </li>
                
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
