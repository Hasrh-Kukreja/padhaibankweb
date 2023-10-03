import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Support.css"

function Support() {
  return (
    <section class="customer-support-section">
    <div class="container">
        <div class="customer-support-heading">
            <h2 class="heading-black index-title">Bizgurukul Learner Support</h2>
        </div>
        <div class="customer-support-box">
            <img src="	https://www.bizgurukul.com/Biz/img/support_side_img.png"/>
            <div class="support_sub_box">
                <h5><i class="fa fa-phone" aria-hidden="true"></i>+91 8567856753</h5>
                <p>(We are available on Monday-Sunday from 9:30 AM to 6:00 PM)</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default Support