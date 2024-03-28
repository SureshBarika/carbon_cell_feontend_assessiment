import { Component } from "react";

import Popup from "reactjs-popup";

import { HiMiniBars4 } from "react-icons/hi2";
import { MdVerified, MdOutlineWbSunny } from "react-icons/md";
import { FaRegComment, FaRegHeart, FaRecycle } from "react-icons/fa";
import {
  HiArrowPathRoundedSquare,
  HiMiniArrowTrendingUp,
  HiMiniArrowTrendingDown,
} from "react-icons/hi2";
import { LuShare } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { PiMountains } from "react-icons/pi";
import { BsExclamationCircle, BsDroplet } from "react-icons/bs";
import { IoBulbOutline } from "react-icons/io5";

import SideNavigationBar from "../SideNavigationBar";
import PopulationBarChart from "../PopulationBarChart";
import PieCharts from "../PieChart";

import "./index.css";

class Home extends Component {
  render() {
    return (
      <div className="home-main-container">
        <div className="left-navbar-cont">
          <SideNavigationBar />
        </div>
        <div className="right-cont">
          <div className="right-header-cont">
            <div className="top-header-hed-cont">
              <div className="mb-nav-bar-cont">
                <Popup
                  modal
                  trigger={
                    <button type="button" className="mb-bars-btn">
                      <HiMiniBars4 />
                    </button>
                  }
                  position="left center"
                >
                  {(close) => {
                    const callToClose = () => {
                      close();
                    };
                    return <SideNavigationBar callToClose={callToClose} />;
                  }}
                </Popup>
              </div>
              <div>
                <h1 className="home-cont-main-hed">
                  Hello, <span className="user-name">Brooklyn Simmons</span> 👋
                </h1>
                <p className="wish-user">
                  Welcome to <span className="company-name">Spot Trading!</span>
                </p>
              </div>
            </div>
            <button className="home-main-btn" type="button">
              Start Trading
            </button>
          </div>
          <div className="analyses-cont">
            <div className="population-graph-cont">
              <div className="population-graph-hed">
                <h3>USA Population</h3>
                <ul className="Country-list">
                  <li className="active-country">USA</li>
                  <li className="country">India</li>
                  <li className="country">China</li>
                </ul>
              </div>
              <hr className="line" />
              <PopulationBarChart />
              <hr className="line" />
              <div className="get-more-data-btn">
                <h2>Get All country`s Population</h2>
                <button className="fetch-data-btn"> Get</button>
              </div>
            </div>
            <div className="pie-charts-cont">
              <h3>BitCoin Revenue</h3>
              <hr className="line" />
              <PieCharts />
              <hr className="line" />
              <div className="get-more-data-btn">
                <h2>Get More info</h2>
                <button className="fetch-data-btn"> Click here</button>
              </div>
            </div>
            <div className="recent-posts-cont">
              <h3 className="recent-post-cont-hed">In recent posts</h3>
              <hr className="line" />
              <div className="post-card">
                <img
                  src="https://media.licdn.com/dms/image/C4D0BAQGwNc23v7nwCw/company-logo_200_200/0/1674242049220/carboncell_logo?e=2147483647&v=beta&t=4KvdFwwikIB_6uMCPYAQxuYO8Q4K_cWhtsYj0BWPhZM"
                  alt="post"
                  className="post-logo"
                />
                <div className="post">
                  <div className="post-hed-cont">
                    <h4>Carbon Cell</h4>
                    <MdVerified />
                    <p className="mail-post">@carboncell . 2h</p>
                  </div>
                  <p className="post-pera">
                    Carbon Cell: Pioneering Finical Solutions for Greener
                    Future!
                  </p>
                  <p className="post-pera">
                    Read more:
                    <p className="url">
                      htps://carboncell.medium.com/introduing-carbon-cell-d8b9dc186c7...
                    </p>
                  </p>
                  <p className="post-pera">
                    In a world where decabrconization is paramount, Carbon Cell
                    is leading the charge to redefine{" "}
                    <span className="url">#CarbonMarkets.</span>
                    Follow this thread to learn how we`re making
                    sustainable...Show more
                  </p>
                  <div className="likes-cont">
                    <FaRegComment />
                    <p>19</p>
                    <HiArrowPathRoundedSquare />
                    <p>48</p>
                    <FaRegHeart />
                    <p>482</p>
                    <LuShare />
                    <p>36</p>
                  </div>
                </div>
              </div>
              <hr className="line" />
              <button className="fetch-data-btn">Follow us on x</button>
            </div>
          </div>
          <div className="assets-cont">
            <div className="assets-hed-cont">
              <h3>Assets</h3>
              <p>
                Today <IoIosArrowDown />
              </p>
            </div>
            <div className="coins-card-cont">
              <div className="coin-card">
                <div className="card-hed-cont">
                  <div className="profil-bg nbst">
                    <PiMountains />
                  </div>
                  <h3>NBST</h3>
                </div>
                <p>Nature Based Solution Token</p>
                <div className="prices-cont">
                  <h3 className="card-price">0.72 $</h3>
                  <p className="card-price-growth">
                    +11.01% <HiMiniArrowTrendingUp />
                  </p>
                </div>
                <div className="card-btn-cont">
                  <div className="nbts-icon">
                    <BsExclamationCircle />
                  </div>
                  <button type="button" className="coins-trade-btn nbst">
                    Trad
                  </button>
                </div>
              </div>
              <div className="coin-card">
                <div className="card-hed-cont">
                  <div className="profil-bg eft">
                    <IoBulbOutline />
                  </div>
                  <h3>EFT</h3>
                </div>
                <p>Energy Efficiency Token</p>
                <div className="prices-cont">
                  <h3 className="card-price">0.36 $</h3>
                  <p className="card-price-growth">
                    +9.15% <HiMiniArrowTrendingUp />
                  </p>
                </div>
                <div className="card-btn-cont">
                  <div className="eft-icon">
                    <BsExclamationCircle />
                  </div>
                  <button type="button" className="coins-trade-btn eft">
                    Trad
                  </button>
                </div>
              </div>
              <div className="coin-card">
                <div className="card-hed-cont">
                  <div className="profil-bg wpct">
                    <FaRecycle />
                  </div>
                  <h3>WPCT</h3>
                </div>
                <p>Wast management and Plastic Credits Token</p>
                <div className="prices-cont">
                  <h3 className="card-price">1.20$</h3>
                  <p className="card-price-growth">
                    +11.01% <HiMiniArrowTrendingUp />
                  </p>
                </div>
                <div className="card-btn-cont">
                  <div className="wpct-icon">
                    <BsExclamationCircle />
                  </div>
                  <button type="button" className="coins-trade-btn wpct">
                    Trad
                  </button>
                </div>
              </div>
              <div className="coin-card">
                <div className="card-hed-cont">
                  <div className="profil-bg ret">
                    <MdOutlineWbSunny />
                  </div>
                  <h3>RET</h3>
                </div>
                <p>Renewable Energy Token</p>
                <div className="prices-cont">
                  <h3 className="card-price">0.46$</h3>
                  <p className="card-price-growth">
                    -0.56% <HiMiniArrowTrendingDown />
                  </p>
                </div>
                <div className="card-btn-cont">
                  <div className="ret-icon">
                    <BsExclamationCircle />
                  </div>
                  <button type="button" className="coins-trade-btn ret">
                    Trad
                  </button>
                </div>
              </div>
              <div className="coin-card">
                <div className="card-hed-cont">
                  <div className="profil-bg wet">
                    <BsDroplet />
                  </div>
                  <h3>WET</h3>
                </div>
                <p>Water Token</p>
                <div className="prices-cont">
                  <h3 className="card-price">0.48$</h3>
                  <p className="card-price-growth">
                    -1.48% <HiMiniArrowTrendingDown />
                  </p>
                </div>
                <div className="card-btn-cont">
                  <div className="wet-icon">
                    <BsExclamationCircle />
                  </div>
                  <button type="button" className="coins-trade-btn wet">
                    Trad
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
