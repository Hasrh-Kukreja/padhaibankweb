import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Footer.css"

function Footer() {
  return (
    <footer className="mobile_app_hide">
      <div className="top-footer">
        <div className="container-90">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="footer_left">
                <div className="footer-logo">
                  <a href="/Default">
                    <img src="/Biz/img/company-logo-white-black.png?v=1.1" alt="Company Logo" />
                  </a>
                </div>

                <div className="footer__about">
                  <p>
                    Bizgurukul is bringing the learner community of all age groups under one roof to learn, implement, and grow with the dynamic skills of the future to help you stand out of the crowd.
                  </p>
                </div>
              </div>
              <div className="footer-social">
                <ul>
                  <li><a className="footer__insta" href="https://www.instagram.com/bizgurukul/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                  <li><a className="footer__facebook" href="https://www.facebook.com/Bizgurukul-100750271589910" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                  <li><a className="footer__twitter" href="https://twitter.com/Bizgurukul_IND" target="_blank"><img src="/Biz/img/twitter_new_icon.png" alt="Twitter Logo" className="twitter_new_logo" /></a></li>
                  <li><a className="footer__youtube" href="https://www.youtube.com/c/Bizgurukul" target="_blank"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                  <li><a className="footer__linkedin" href="https://www.linkedin.com/company/officialbizgurukul" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6">
              <div className="footer-aboutus">
                <h4>Support</h4>
                <ul>
                  <li><a href="/Biz/contactus">Contact Us</a></li>
                  <li><a href="/Default#media-sec">Press</a></li>
                  <li><a href="/Biz/disclaimer">Disclaimer</a></li>
                  <li><a href="/Biz/Privacy">Privacy Policy</a></li>
                  <li><a href="/Biz/terms">Terms and Conditions</a></li>
                  <li><a href="/Biz/RefundPolicy">Refund Policy</a></li>
                  <li><a href="/Biz/EndUserLicense">End User License Agreement</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6">
              <div className="footer-aboutus">
                <h4>Useful Links</h4>
                <ul>
                  <li><a href="/Biz/aboutus">About Us</a></li>
                  <li><a href="/Biz/career">Career</a></li>
                  <li><a href="/Biz/BecomeAnInst">Become An Instructor</a></li>
                  <li><a href="/Biz/BecomeAnAffiliate">Become An Affiliate</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 footer_last_child">
              <div className="mobile_footer">
                <img src="/Biz/img/app_view3.png" alt="App View" className="view_app" />
                <h6>Download the Bizgurukul App</h6>
                <div className="app_footer">
                  <a href="https://apps.apple.com/in/app/bizgurukul/id6448565147" target="_blank"><img src="/Biz/img/appstore.png" alt="App Store" /></a>
                  <a href="https://play.google.com/store/search?q=Bizgurukul&amp;c=apps&amp;hl=en-IN" target="_blank"><img src="/Biz/img/googleplay.png" alt="Google Play" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="container">
          <div className="footer-text">
            <div className="copyright">
              <p>All Rights Reserved © 2022 | BIZGURUKUL PRIVATE LIMITED</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
