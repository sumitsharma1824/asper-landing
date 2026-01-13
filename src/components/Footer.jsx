import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer_logo">
          <img src="../public/logo.png" alt="" />
        </div>

        <div className="footerBody">
          <div class="footer_copyright">
            <p>© 2026 ASPER Club — All Rights Reserved</p>
            <p>Designed & Developed by ASPER Technical Team</p>
          </div>

          <div className="contact">
            <h3>Contact Info</h3>

            <div class="contact-row">
              <label>Name</label>
              <input type="text" placeholder="Enter name" />
            </div>

            <div class="contact-row">
              <label>College</label>
              <input type="text" placeholder="Enter college" />
            </div>

            <div class="contact-row">
              <label>Email</label>
              <input type="email" placeholder="Enter email" />
            </div>

            <button class="contact-btn">Send</button>
          </div>
        </div>
        <div className="media_links">
          <div className="inst circle">
            <a href="https://www.instagram.com/asper.uitrgpv?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div className="lin circle">
            <a href="https://l.instagram.com/?u=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Ftheasperteam%2F%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnWE2oCImvDYkGpybT_4Rx7HwxTe_ZRhRLGnCSvFY05dwiQtSrC-rcf6yEAoQ_aem_DpcD8I-gy95192cr_4TWRg&e=AT10xa2LOLB9mo1VCA__7FzQp2nNjk9Z_G4kdWl4c_pfrmBIlfcLGgnlmYfDpVpuD1IiIlQb5gL3uRe07cxjaebhovhm3RY4zRatGpT7x88oLcGn9umxuso2BQ">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <div className="github circle">
          <a href="#">
            <FontAwesomeIcon icon={faGithub} />
          </a>

          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
