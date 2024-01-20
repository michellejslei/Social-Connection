import React from "react";
import "./style.css";
import Link from 'next/link'

export default function Home() {
  return (
    <div className="log-in-page">
      <div className="div">
        <div className="text-wrapper">Log In</div>
        <div className="email-box">
          <div className="overlap-group">
            <div className="text-wrapper-2">email</div>
          </div>
        </div>
        <div className="pw-box">
          <div className="overlap-group">
            <div className="text-wrapper-2">password</div>
          </div>
        </div>
        <div className="text-wrapper-3"><Link href = "./feed"><p>Go to Feed</p></Link></div>
        <div className="log-in-button">
          <div className="overlap">
            <div className="text-wrapper-4">log in</div>
          </div>
        </div>
        <button className="sign-up-button">
          <div className="div-wrapper">
            <div className="text-wrapper-5">sign up</div>
          </div>
        </button>
      </div>
    </div>
  )
}

