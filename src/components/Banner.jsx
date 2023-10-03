import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Banner.css"

function Banner() {
  return (
    <>
      <div className="row" style={{ backgroundColor: "rgba(249,253,255,255)" }}>
        <div className="col-lg-6 my-auto">
          <h1
            className="fw-bold"
            style={{
              fontSize: "3.2rem",
              color: "#012478",
              marginLeft: "120px",
            }}
          >
            Learn Any Course for{" "}
            <span
              style={{
                color: "#FD5464",
                borderBottom: "12px solid yellow",
                marginRight: "10px",
              }}
            >
              Free
            </span>
            in your own Language
          </h1>
          <button
            type="button"
            className="text-white rounded"
            style={{
              border: "2px solid #3785d7",
              background: "#3785d7",
              width: "220px",
              height: "50px",
              marginLeft: "120px",
              marginTop: "20px",
            }}
          >
            Join For Free
          </button>
        </div>
        <div className="col-lg-6 my-auto">
          <img
            style={{ marginLeft: "7rem", width: "80%" }}
            src="https://www.learnvern.com/images/new-home-assets/home-desktop-banner.png"
            className="s1-right-img"
            alt="banner-img"
          />
        </div>
      </div>
      <div
        class="bg-color border"
        style={{ backgroundColor: "rgb(8,36,124)", color: "white" }}
      >
        <div class="row s1-countdown container mx-auto  px-5">
          <div class="col-3 d-flex my-4 px-2">
            <img
              src=" https://www.learnvern.com/images/new-home-assets/people-circle.svg"
              alt="People Icon"
              class="counter-img my-auto"
            />
            <label class="mx-4 my-auto">
              <span class="counter-value" data-count="19">
                19
              </span>{" "}
              <span class="count-text"> Lac +</span> Members
            </label>
          </div>
          <div class="col-3 d-flex my-4 px-2">
            <img
              src=" https://www.learnvern.com/images/new-home-assets/video-circle.svg"
              alt="Video Icon"
              class="counter-img my-auto"
            />
            <label class="mx-4 my-auto">
              <span class="counter-value" data-count="150">
                150
              </span>{" "}
              <span class="count-text"> + Courses</span>
            </label>
          </div>
          <div class="col-3 d-flex my-4 px-2">
            <img
              src=" https://www.learnvern.com/images/new-home-assets/star-circle.svg"
              alt="Star Icon"
              class="counter-img my-auto"
            />
            <label class="mx-4 my-auto">
              {" "}
              <span class="counter-value" data-count="4.7">
                4.7
              </span>{" "}
              Google Rating
            </label>
          </div>
          <div class="col-3 d-flex my-4 px-2">
            <img
              src=" https://www.learnvern.com/images/new-home-assets/mobile-circle.svg"
              alt="Mobile Icon"
              class="counter-img my-auto"
            />
            <label class="mx-4 my-auto">
              <span class="counter-value" data-count="6">
                6
              </span>{" "}
              <span class="count-text"> Lac + App Installs</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
