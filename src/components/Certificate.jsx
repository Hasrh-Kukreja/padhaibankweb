import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Certificate.css"

function Certificate() {
  return (
    <section class="nhp-desktop-s12">
    <div class="container">
        <div class="row ">
            <div class="col-6 text-center">
                                    <img src="https://www.learnvern.com/images/Certificate.jpg" className="img-fluid Certificate-background" alt="SampleCertificateImage" width="100%" loading="lazy"/>
                            </div>
            <div class="col-6 nsdc ps-4 py-3">
                <p class="mb-0">Get proof for your newly learnt skills</p>
                <h2>Get Job ready with <br/>
                    NSDC Skill India Certificate</h2>
                <img src="https://www.learnvern.com/images/new-home-assets/skill-nsdc-logo2.png" alt="Certificate Partner Logo" class="mt-4" loading="lazy"/>
                <div class="mx-auto flex-fill my-4">
                                            <a href="https://www.learnvern.com/auth/register" class="btn trainer-btn px-5 py-2 m-auto" onclick="getNSDCSection({'type': '0'})">Join For Free <i class="fas fa-arrow-right"></i></a>
                                    </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Certificate



