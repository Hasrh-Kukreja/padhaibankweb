import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/LearnAnytime.css"

function LearnAnytime() {
  return (
    <div class="nhp-desktop-s13 digital_bundle ">
    <div class="container">
        <div class="row">
            <div class="col-7 wrw-left px-3">
                <h6 class="mb-0">WHO ARE WE</h6>
                <h2 class="m-0 ">Learn Anytime, Anywhere in Any Language for Free</h2>
                <p class="my-3 pe-3">Our name LearnVern is coined from the word Learn in Vernacular Languages - LearnVern teaches students in the user's native language.
                    Years of research have indicated that students learn the most difficult concepts easily when explained in a language they most understand and with images,
                    examples and practical insights. Each of the subjects we teach at LearnVern is offered in vernacular languages, have perfect examples and lots of practical
                    insights and are taught by experts in their fields.</p>
                <div class="d-flex">
                    <a href="https://www.youtube.com/watch?v=867ovN4MXFw" class="btn-link-lv watch-video popup-video "></a>
                    <a class="popup-video ms-5 watch-text" href="https://www.youtube.com/watch?v=867ovN4MXFw">
                        <span className=" videotext px-4 ms-4 ">Watch video About Us</span>
                    </a>
                </div>
            </div>
            <div class="col-5 text-center m-auto">
                <img src="https://www.learnvern.com/images/new-home-assets/about-mock-desktop.png" alt="Office Image" width="70%" class="m-4 abt-video" loading="lazy"/>
            </div>
        </div>
    </div>
</div>
  )
}

export default LearnAnytime