import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/MediaPrsence.css"

function MediaPresence() {
  return (
<section class="media-section wow fadeInUp" id="media-sec">
    <section className="our_media_presence">
      <div className="container-80">
        <div className="media-heading">
          <h2 className="heading-black index-title">Our Media Presence</h2>
        </div>
        <div className="our_media_slider">
          <div
            id="our_media_carousel"
            className="owl-carousel owl-theme owl-loaded owl-drag"
          >
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: 'translate3d(-3935px, 0px, 0px)',
                  transition: 'all 1s ease 0s',
                  width: '6964px',
                }}
              >
                <div className="owl-item cloned" style={{ width: '267.75px', margin: '0px 35px' }}>
                  <div className="item">
                    <a href="https://theprint.in/theprint-valuead-initiative/entrepreneurship-a-marathon-not-a-sprint-says-bizgurukul-founder-ritwiz-tiwari/" target="aa">
                      <div className="media_pre_box">
                        <h6>Bizgurukul vision- Create a platform where people can learn new things and get authentic relatable education.</h6>
                        <img src="Biz/img/the-print.png" alt=""/>
                      </div>
                    </a>
                  </div>
                </div>
                {/* Add more carousel items as needed */}
              </div>
            </div>
            <div className="owl-nav disabled">
              <div className="owl-prev">
                <i className="fa fa-angle-left" aria-hidden="true"></i>
              </div>
              <div className="owl-next">
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </div>
            </div>
            <div className="owl-dots disabled"></div>
          </div>
        </div>
      </div>
    </section>
    </section>
  );
}

export default MediaPresence;
