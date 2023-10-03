import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/AboutBizgurukul.css"

function AboutBizgurukul() {
  return (
    <section class="biz_review_section">
            <div class="container">
                <div class="row biz_review_main">
                    <div class="col-sm-4">
                        <div class="biz_review">
                            <img src="https://www.bizgurukul.com/Biz/img/bg1.png" class="biz_review_desk"/>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="biz_review biz_review_content">
                            <h2 class="index-title">What Others Have To Say About Bizgurukul</h2>
                            <p>Bizgurukul has been a life-changing platform for thousands of Indians. Browse what people have to say about us.</p>
                            <a href="Biz/Review.aspx">Browse Reviews</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default AboutBizgurukul