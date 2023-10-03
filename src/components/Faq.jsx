import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Faq.css"

function Faq() {
  return (
    <section className="faq__section wow fadeInUp">
      <div className="container">
        <h2 className="faq__title index-title">
          <span>Fre</span>quently Asked Questions
        </h2>
        <div id="faq">
          <ul>
            <li>
              <input type="checkbox" defaultChecked={true} />
              <i></i>
              <h2>What is Bizgurukul?</h2>
              <p>
                <span>
                  Bizgurukul is an ed-tech platform where we provide various
                  e-learning courses related to career, soft skills, and business
                  development. What started as an intent to create employment in
                  the middle of the pandemic has become a revolution in the era of
                  the gig economy by bridging the gap between education and
                  entrepreneurship.
                </span>
              </p>
            </li>

            <li>
              <input type="checkbox" defaultChecked={true} />
              <i></i>
              <h2>What opportunity does Bizgurukul provide? </h2>
              <p>
                <span>
                  Bizgurukul offers an endless number of opportunities to its
                  learners, such as upskilling their extent of knowledge, and
                  guiding them in their career aspects. Moreover, it boosts your
                  social media, which helps monetize the respective platforms.
                </span>
              </p>
            </li>

            <li>
              <input type="checkbox" defaultChecked={true} />
              <i></i>
              <h2>What are education bundles? </h2>
              <p>
                <span>
                  Primarily there are three bundles, i.e., Branding Mastery
                  Courses, Traffic Mastery Courses, and Influence Mastery Courses.
                  <br />
                  We have recently added two more bundles to this- Finance Mastery
                  and Marketing Mastery.
                </span>
              </p>
            </li>

            <li>
              <input type="checkbox" defaultChecked={true} />
              <i></i>
              <h2>What kind of skill-based courses do you provide?</h2>
              <p>
                <span>
                  Bizgurukul offers a wide range of skill-based courses: Personality
                  Development, Instagram Mastermind, Digital Marketing, Affiliate
                  Marketing Mastermind, Facebook Ads Mastermind, Stock Market Mastery,
                  and many more others. Bizgurukul also delivers quality bombarded
                  training sessions through the segment “In-demand.”
                </span>
              </p>
            </li>

            <div className="moretext">
              <li>
                <input type="checkbox" defaultChecked={true} />
                <i></i>
                <h2>Is Bizgurukul Government verified? </h2>
                <p>
                  <span>
                    You can find Bizgurukul on the official website of the Ministry
                    of Corporate Affairs, and you can check the registration details
                    on the same.
                  </span>
                </p>
              </li>

              <li>
                <input type="checkbox" defaultChecked={true} />
                <i></i>
                <h2>Do I have to enroll/buy your course to sell the courses?</h2>
                <p>
                  <span>
                    Yes! The affiliate link is only generated once you buy/enroll in
                    our courses.
                  </span>
                </p>
              </li>

              <li>
                <input type="checkbox" defaultChecked={true} />
                <i></i>
                <h2>How can you earn money? </h2>
                <p>
                  <span>
                    Firstly, you can make money by enrolling in courses that allow
                    you to monetize your skills.
                    <br />
                    Bizgurukul courses boost your skills in a way that helps you in
                    career growth.
                    <br />
                    Another way is by enrolling yourself in our Affiliate Marketing
                    Program, wherein you can sell the courses and earn about 50-70%
                    commission from them.
                  </span>
                </p>
              </li>

              <li>
                <input type="checkbox" defaultChecked={true} />
                <i></i>
                <h2>What is the commission structure? </h2>
                <p>
                  <span>
                    Bizgurukul provides you the high-end commission, up to 50-70%,
                    depending on your hard work.
                  </span>
                </p>
              </li>

              <li>
                <input type="checkbox" defaultChecked={true} />
                <i></i>
                <h2>What is affiliate marketing, and how is it different from network marketing? </h2>
                <p>
                  <span>
                    Affiliate marketing is a program where a person makes a certain
                    amount of commission in return for selling a company’s products
                    or services to either generate more leads or convert these leads
                    into customers.
                    <br />
                    Unlike network marketing, the person who introduces leads to the
                    product in affiliate marketing gets the commission. Whereas, in
                    network marketing, every upline earns the commission in the chain.
                  </span>
                </p>
              </li>

              <li>
                <input type="checkbox" defaultChecked={true} />
                <i></i>
                <h2>What is the enrollment fee? </h2>
                <p>
                  <span>
                    There is no enrollment fee. You only have to pay for the course
                    bundles you buy.
                  </span>
                </p>
              </li>

              <li>
                <input type="checkbox" defaultChecked={true} />
                <i></i>
                <h2>Is it a one-time fee or a monthly fee? </h2>
                <p>
                  <span>
                    It is only a one-time fee you’ve to pay for every bundle you buy
                    and you get lifetime access to that course.
                  </span>
                </p>
              </li>
            </div>
            <div className="more_-faq">
              <a className="moreless-button" href="javascript:void(0)">
                ↓
              </a>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Faq;
