import React from "react";
import "./style.css";
import Link from 'next/link'
import MenuBar from "/Users/evanfung/Social-Connection/social-app/app/feed/components/MenuBar.js"

export default function Home() {
  return (
    <div className="feed-page">
      <div className="div-2">
        <div className="frame">
          <div className="me">
            <div className="text-wrapper-2">me</div>
            <div className="frame-2">
              <div className="rectangle" />
              <div className="rectangle" />
              <div className="rectangle" />
              <div className="rectangle" />
              <div className="rectangle" />
            </div>
          </div>
          <div className="overlap-group-2">
            <div className="div-3">
              <div className="text-wrapper-3">zainab</div>
              <div className="frame-3">
                <div className="rectangle" />
                <div className="rectangle" />
                <div className="rectangle" />
                <div className="rectangle" />
                <div className="rectangle" />
              </div>
              <div className="ellipse" />
            </div>
            <div className="div-3">
              <div className="text-wrapper-3">zainab</div>
              <div className="frame-3">
                <div className="rectangle" />
                <div className="rectangle" />
                <div className="rectangle" />
                <div className="rectangle" />
                <div className="rectangle" />
              </div>
              <div className="ellipse" />
            </div>
          </div>
          <div className="overlap-2">
            <div className="div-3">
              <div className="text-wrapper-4">evan</div>
              <div className="frame-3">
                <div className="rectangle" />
                <div className="rectangle" />
                <div className="rectangle" />
                <div className="rectangle" />
                <div className="rectangle" />
              </div>
              <div className="ellipse" />
            </div>
            <div className="div-3">
              <div className="text-wrapper-4">evan</div>
              <div className="frame-3">
                <div className="rectangle" />
                <div className="rectangle" />
                <div className="rectangle" />
                <div className="rectangle" />
                <div className="rectangle" />
              </div>
              <div className="ellipse" />
            </div>
          </div>
          <div className="waris">
            <div className="frame-3">
              <div className="rectangle" />
              <div className="rectangle" />
              <div className="rectangle" />
              <div className="rectangle" />
              <div className="rectangle" />
            </div>
            <div className="ellipse" />
            <div className="text-wrapper-5">waris</div>
          </div>
        </div>
        <MenuBar className="menu-bar-instance" />
      </div>
    </div>
  )
}

