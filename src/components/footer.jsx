import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import logo from '../../public/assets/images/logo.png';

export default function Footer() {
  return (
    <footer>
      <img src={logo} alt="logo_footer" className="logo_footer" />
      
      <div className="information_footer">
        <div className="instagram_container">
        <a
          href="https://instagram.com/jmestacionamentos?igshid=NTc4MTIwNjQ2YQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          <FontAwesomeIcon icon={faInstagram} className="instagram-icon"  />
        </a>
        <span>jmestacionamentos</span>
        </div>

        <div className="email_container">
          <div className="icon_and_info">
        <svg version="1.0" id="Layer_1" className="email_icon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="30px" height="30px" margin-bottom="10px" margin-left="20px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve" fill="#ffffff" strokeWidth="#ffffff">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <path fill="white" d="M60,8H4c-2.211,0-4,1.789-4,4v40c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4V12C64,9.789,62.211,8,60,8z M4,10h56c1.104,0,2,0.896,2,2v2.469L32,36.754L2,14.469V12C2,10.896,2.896,10,4,10z M60,54H4c-1.104,0-2-0.896-2-2v-2.808 l18.584-13.381c0.448-0.322,0.55-0.947,0.228-1.396c-0.322-0.447-0.946-0.549-1.396-0.228L2,46.729V16.961l29.403,21.842 C31.581,38.935,31.79,39,32,39s0.419-0.065,0.597-0.197L62,16.961v29.768l-17.416-12.54c-0.448-0.322-1.074-0.221-1.396,0.228 c-0.322,0.448-0.221,1.073,0.228,1.396L62,49.192V52C62,53.104,61.104,54,60,54z"/> </g>

         </svg>
        <span >SAC</span>
        </div>
         <span>contato@jmestacionamentos.com.br</span>
        <div className="loc_container">
         <svg fill="white" width="40px" height="40px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path> </g></svg>
         <div className="text_location">
         <span>Rua Maranhão,904 - Centro</span><br></br>
         <span className="locality_and_cep">Cascavel - PR - CEP 85801-050</span>
         </div>
         </div>
        </div>

        <div className="contact_container">
          <div className="icon_and_info">
          <svg fill="white" width="25px" height="30px" className="phone_icon" viewBox="0 0 16 16" id="telephone-16px" xmlns="http://www.w3.org/2000/svg">
            <path id="Path_27" data-name="Path 27" d="M35.5,16A15.517,15.517,0,0,1,20,.5a.5.5,0,0,1,.5-.5h2.845a1.849,1.849,0,0,1,1.317.546l1.962,1.961a1.5,1.5,0,0,1,0,2.122L25.2,6.048A11.907,11.907,0,0,0,29.952,10.8l1.419-1.42a1.5,1.5,0,0,1,2.121,0l1.962,1.962A1.852,1.852,0,0,1,36,12.656V15.5A.5.5,0,0,1,35.5,16ZM21.009,1A14.52,14.52,0,0,0,35,14.992V12.656a.859.859,0,0,0-.253-.611l-1.962-1.962a.5.5,0,0,0-.707,0L30.4,11.763a.5.5,0,0,1-.578.093A12.893,12.893,0,0,1,24.145,6.18a.5.5,0,0,1,.092-.579l1.68-1.679a.5.5,0,0,0,0-.708L23.955,1.253A.858.858,0,0,0,23.345,1Z" transform="translate(-20)"/>
          </svg>
        <h3 className="name_footer">Everaldo José</h3>
        
        </div>
        <div className="sector_and_cellphone">
        <span >Comercial</span><br></br>
         <span>(45) 99943-3993</span>
         </div>
        </div>
        
        
        <div className="contact_container_final">
          <div className="icon_and_info">
          <svg fill="white" width="25px" height="30px" className="phone_icon" viewBox="0 0 16 16" id="telephone-16px" xmlns="http://www.w3.org/2000/svg">
            <path id="Path_27" data-name="Path 27" d="M35.5,16A15.517,15.517,0,0,1,20,.5a.5.5,0,0,1,.5-.5h2.845a1.849,1.849,0,0,1,1.317.546l1.962,1.961a1.5,1.5,0,0,1,0,2.122L25.2,6.048A11.907,11.907,0,0,0,29.952,10.8l1.419-1.42a1.5,1.5,0,0,1,2.121,0l1.962,1.962A1.852,1.852,0,0,1,36,12.656V15.5A.5.5,0,0,1,35.5,16ZM21.009,1A14.52,14.52,0,0,0,35,14.992V12.656a.859.859,0,0,0-.253-.611l-1.962-1.962a.5.5,0,0,0-.707,0L30.4,11.763a.5.5,0,0,1-.578.093A12.893,12.893,0,0,1,24.145,6.18a.5.5,0,0,1,.092-.579l1.68-1.679a.5.5,0,0,0,0-.708L23.955,1.253A.858.858,0,0,0,23.345,1Z" transform="translate(-20)"/>
          </svg>
        <h3 className="name_footer">Patrícia Farias</h3>
        
        </div>
        <div className="sector_and_cellphone">
        <span >Administração</span><br></br>
         <span>(45) 999829-4907</span>
         </div>
        </div>
      </div>
    </footer>
  );
}
