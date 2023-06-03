import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import logo from '../assets/images/logo.png';

export default function Footer() {
  return (
    <footer>
      <img src={logo} alt="logo_footer" className="logo_footer" />

      <div className="information_footer">
        <div className="instagram_container">
        <span>Nos siga no Instagram!</span>
        <a
          href="https://instagram.com/jmestacionamentos?igshid=NTc4MTIwNjQ2YQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
        </a>
        </div>

        <div className="email_container">
          <div className="icon_and_info">
        <svg version="1.0" id="Layer_1" className="email_icon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="30px" height="30px" margin-bottom="10px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve" fill="#ffffff" strokeWidth="#ffffff">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <path fill="white" d="M60,8H4c-2.211,0-4,1.789-4,4v40c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4V12C64,9.789,62.211,8,60,8z M4,10h56c1.104,0,2,0.896,2,2v2.469L32,36.754L2,14.469V12C2,10.896,2.896,10,4,10z M60,54H4c-1.104,0-2-0.896-2-2v-2.808 l18.584-13.381c0.448-0.322,0.55-0.947,0.228-1.396c-0.322-0.447-0.946-0.549-1.396-0.228L2,46.729V16.961l29.403,21.842 C31.581,38.935,31.79,39,32,39s0.419-0.065,0.597-0.197L62,16.961v29.768l-17.416-12.54c-0.448-0.322-1.074-0.221-1.396,0.228 c-0.322,0.448-0.221,1.073,0.228,1.396L62,49.192V52C62,53.104,61.104,54,60,54z"/> </g>

         </svg>
        <span >Email para contato </span>
        </div>
         <span>contato@jmestacionamentos.com.br</span>
        
        </div>

        <div className="contact_container">
          <div className="icon_and_info">
          <svg fill="white" width="30px" height="30px" className="phone_icon" viewBox="0 0 16 16" id="telephone-16px" xmlns="http://www.w3.org/2000/svg">
            <path id="Path_27" data-name="Path 27" d="M35.5,16A15.517,15.517,0,0,1,20,.5a.5.5,0,0,1,.5-.5h2.845a1.849,1.849,0,0,1,1.317.546l1.962,1.961a1.5,1.5,0,0,1,0,2.122L25.2,6.048A11.907,11.907,0,0,0,29.952,10.8l1.419-1.42a1.5,1.5,0,0,1,2.121,0l1.962,1.962A1.852,1.852,0,0,1,36,12.656V15.5A.5.5,0,0,1,35.5,16ZM21.009,1A14.52,14.52,0,0,0,35,14.992V12.656a.859.859,0,0,0-.253-.611l-1.962-1.962a.5.5,0,0,0-.707,0L30.4,11.763a.5.5,0,0,1-.578.093A12.893,12.893,0,0,1,24.145,6.18a.5.5,0,0,1,.092-.579l1.68-1.679a.5.5,0,0,0,0-.708L23.955,1.253A.858.858,0,0,0,23.345,1Z" transform="translate(-20)"/>
          </svg>
        <span >SAC</span>
        </div>
         <span>contato@jmestacionamentos.com.br</span>
        
        </div>
        
      </div>
    </footer>
  );
}
