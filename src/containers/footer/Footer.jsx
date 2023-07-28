import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading ">
        <h1 className="gradient__text">
          Do you want to step into the Future before Others
        </h1>
      </div>
      <div className="gpt3__footer-btn ">
        <p>Requestt Early Access</p>
      </div>

      <div className="gpt3__footer-links ">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>All rights Are reserved to the owner </p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>+94 (77) 499 2781</p>
          <p>Counters</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Get In Touch</h4>
          <p>Sansika Kodithuwakku</p>
          <p>+94 (77) 499 2781</p>
          <p href="Sansika.kodi@gmail.com"> Sansika.kodi@gmail.com</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
