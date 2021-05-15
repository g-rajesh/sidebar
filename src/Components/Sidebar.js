import { useState } from "react";

import {
  FaTimes,
  FaHome,
  FaComments,
  FaUsers,
  FaGamepad,
  FaChevronDown,
} from "react-icons/fa";
import Backdrop from "./Backdrop";

import { useGlobalContext } from "./Context";

const Sidebar = () => {
  const {
    showsidebar,
    setshowsidebar,
    showlinks1,
    showlinks2,
    setShowLinks1,
    setShowLinks2,
  } = useGlobalContext();
  return (
    <div className="Sidebar">
      {showsidebar && <Backdrop setshow={setshowsidebar} />}
      <div className={showsidebar ? "sidebar show-sidebar" : "sidebar"}>
        <header>
          <div className="logobox">
            <h2 className="logo">Stily</h2>
            <span>Dashboard</span>
          </div>
          <button className="bars-close">
            <FaTimes
              className="times-icon"
              onClick={() => setshowsidebar(false)}
            />
          </button>
        </header>
        <ul>
          <li>
            <div className="list">
              <div className="list-item">
                <div className="item">
                  <FaHome className="list-icon" />
                  <a href="#">Home</a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="list">
              <div className="list-item">
                <div className="item">
                  <FaComments className="list-icon" />
                  <a href="#">Chat</a>
                </div>
                <FaChevronDown
                  onClick={() => {
                    setShowLinks1(!showlinks1);
                  }}
                  className={
                    showlinks1 ? "arrow-down show-links" : "arrow-down"
                  }
                />
              </div>

              <ul
                className={showlinks1 ? "sub-list show-sub-list" : "sub-list"}
              >
                <li>Friends</li>
                <li>Family</li>
                <li>Business</li>
              </ul>
            </div>
          </li>
          <li>
            <div className="list">
              <div className="list-item">
                <div className="item">
                  <FaUsers className="list-icon" />
                  <a href="#">Teams</a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="list">
              <div className="list-item">
                <div className="item">
                  <FaGamepad className="list-icon" />
                  <a href="#">Games</a>
                </div>
                <FaChevronDown
                  onClick={() => {
                    setShowLinks2(!showlinks2);
                  }}
                  className={
                    showlinks2 ? "arrow-down show-links" : "arrow-down"
                  }
                />
              </div>

              <ul
                className={showlinks2 ? "sub-list show-sub-list" : "sub-list"}
              >
                <li>Solo</li>
                <li>Duo</li>
                <li>Squad</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
