import React from "react";
import img from "../../Assets/Images/crown.f3383635.svg";
import logo from "../../Assets/Images/logo.svg";
import { footerLinkData, socialLinkData } from "./../../data/footerData";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer_section">
      <img src={img} alt="Icon" className="icon" />
      <div className="container">
        <div className="content_wrapper">
          <div>
            <img src={logo} alt="Icon" className="logo" />
          </div>
          <div className="footer_link">
            <div className=" f_link">
              {footerLinkData.map((data, index) => (
                <div key={index} className="">
                  <div>
                    {data.extranalLink ? (
                      <a
                        href={data.destination}
                        target={data.extranalLink && "_blank"}
                      >
                        {data.text}
                      </a>
                    ) : data.mail ? (
                      <a className="underline" href={data.destination}>
                        {data.text}
                      </a>
                    ) : (
                      <Link to={data.destination}>{data.text}</Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="social_link">
            {socialLinkData.map((data, index) => (
              <a key={index} href={data.destination} target="_blank">
                <img src={data.img} alt="Insagram" />
              </a>
            ))}
          </div>
          <p className="footer_text">©{new Date().getFullYear()} Meta-Legends. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
