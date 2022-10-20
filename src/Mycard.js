import React from "react";

import "./mycard.css";
import github from "./image/github_i_b.png"
import insta from "./image/insta_i_b.png"
import twitt from "./image/twiter_i_b.png"
import fackbook from "./image/faceboook_i_b (1).png"
import cardpic from "./image/profile.jpg";
import emailpic from "./image/Email_icon.png";
import linkedinpic from "./image/LinkedIn_icon.png";
export default function Mycard() {
  return (
    <div className="mycards-main-div">
      <div className="mycard-2nd-div">
        <div className="mycard-3nd-div">
          <img className="cardimg" src={cardpic} alt="" />
          <h2>Kavya M</h2>
          <h5>Frontend Developer</h5>
          <div className="mycard-email-linkedln-div">
          
            <a href="https://www.linkedin.com/in/kavya-m-220276184/" ><div className="linkedln-div">
              <img className="linkedinicon" src={linkedinpic} alt="" />
              <em>LinkedIn</em>
            </div></a>
          </div>
          <div className="about-div">
            <h3>I am </h3>
            <p>
              A graduate from IHRD CAS vazhakkad and like to code and involve in
              sports in my spare times
            </p>
          </div>
          <div className="hobbies-div">
            <h3>Hobbies</h3>
            <p>Coding , Sports , Reading/Writing</p>
          </div >
          <footer className="mycard-footer">
           <a href="https://twitter.com/Kavya71162087">

          
            <div className='twt-div'>
                <img className="twiteric" src={twitt} alt="" />
            </div>
            </a>
            <a href="https://www.instagram.com/kavya_mavila/">

            
            <div className='inst-div'>
                <img className="instaic" src={insta} alt="" />
            </div>
            </a>
            </footer>
        </div>
        
      </div>
      
    </div>
  );
}
