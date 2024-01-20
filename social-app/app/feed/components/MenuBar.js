import React from "react";
import "/Users/evanfung/Social-Connection/social-app/app/feed/components/style.css";

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <div className="overlap">
        <div className="logo">
          <div className="overlap-group">
            <div className="text-wrapper">logo</div>
          </div>
        </div>
        <div className="menu-options">
          <div className="div">today</div>
          <div className="div">feed</div>
          <div className="div">challenges</div>
          <div className="div">profile</div>
          <div className="div">friends</div>
          <div className="div">settings</div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
