import React from "react";
import "./Footer.css";
import footerLogo from '../../image/logo.png'
import google from '../../image/google.png'
import apple from '../../image/apple.png'
const Footer = () => {
  return (
    <div className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12 col-lg-3 " >
            <img src={footerLogo} className='footer-logo mb-2' alt="" />
            <p>
              We denounce with righteous indi gnation and dislike men who are so
              beguiled and demoralized by the charms of pleasure of your moment,
              so blinded by desire those who fail weakness.
            </p>
          </div>
          <div className="col-md-6 col-12 col-lg-3">
            <h2>Address</h2>
            <p><i className="fas fa-location-arrow foot"></i> 374 William S Canning Blvd, River MA 2721, USA</p>
            <p><i className="fas fa-phone-alt foot"></i> (+880)123-456789</p>
            <p><i className="fas fa-envelope foot"></i> support@wellco.com</p>
          </div>
          <div className="col-md-6 col-12 col-lg-3">
            <h2>Platform</h2>
            <p>Browse Library</p>
            <p>Library </p>
            <p>Partners</p>
            <p>News and Blogs</p>
            <p>FAQs</p>
            <p>Tutorials</p>
          </div>
          <div className="col-md-6 col-12 col-lg-3">
            <h2>Apps Download</h2>
            <p>Download Our Apps To Connect With Us</p>
            <div>
              <img src={google} className='footer-logo me-3' alt="" />
              <img src={apple} className='footer-logo' alt="" />
            </div>
          </div>
        </div>
        <hr />
        <p className='mb-0 text-center py-3'>© 2020 All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
