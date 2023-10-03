import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/CoursesByLanguage.css"

function CourseByLanguage() {
  return (
    <div className='container'>
    <div className="row section-heading py-5 ">
      <h2>Courses by <span className='Language-text'>Language</span></h2>
      <div className="row mx-auto pt-2 mt-3 d-flex flex-wrap language-container">
        <div className="lan-card col-lg-2 col-md-4 col-sm-6 mx-auto" style={{ background: 'url("https://www.learnvern.com/images/new-home-assets/english_initial_color.jpg") center no-repeat' }}>
          <a href="https://www.learnvern.com/courses?language=english" style={{ height: '100%' }}>
            <div className="p-4 mt-3 text-center d-flex flex-column my-2">
              <label htmlFor="" className="lan-text pt-2">English</label>
              <span><span className="course-badge px-1">31 Courses</span></span>
              <span className="language-badge mt-auto pt-3">English</span>
            </div>
          </a>
        </div>
        <div className="lan-card col-lg-2 col-md-4 col-sm-6 mx-auto" style={{ background: 'url("https://www.learnvern.com/images/new-home-assets/hindi_initial_color.jpg") center no-repeat' }}>
          <a href="https://www.learnvern.com/courses?language=hindi" style={{ height: '100%' }}>
            <div className="p-4 mt-3 text-center d-flex flex-column my-2">
              <label htmlFor="" className="lan-text pt-2">हिन्दी</label>
              <span><span className="course-badge px-1">121 Courses</span></span>
              <span className="language-badge mt-auto pt-3">Hindi</span>
            </div>
          </a>
        </div>

        <div className="lan-card col-lg-2 col-md-4 col-sm-6 mx-auto" style={{ background: 'url("https://www.learnvern.com/images/new-home-assets/bangla_initial_color.jpg") center no-repeat' }}>
          <a href="https://www.learnvern.com/courses?language=bangla" style={{ height: '100%' }}>
            <div className="p-4 mt-3 text-center d-flex flex-column my-2">
              <label htmlFor="" className="lan-text pt-2">বাংলা</label>
              <span><span className="course-badge px-1">3 Courses</span></span>
              <span className="language-badge mt-auto pt-3">Bangla</span>
            </div>
          </a>
        </div>

        <div className="lan-card col-lg-2 col-md-4 col-sm-6 mx-auto" style={{ background: 'url("https://www.learnvern.com/images/new-home-assets/tamil_initial_color.jpg") center no-repeat' }}>
          <a href="https://www.learnvern.com/courses?language=tamil" style={{ height: '100%' }}>
            <div className="p-4 mt-3 text-center d-flex flex-column my-2">
              <label htmlFor="" className="lan-text pt-2">தமிழ்</label>
              <span><span className="course-badge px-1">14 Courses</span></span>
              <span className="language-badge mt-auto pt-3">Tamil</span>
            </div>
          </a>
        </div>

        <div className="lan-card col-lg-2 col-md-4 col-sm-6 mx-auto" style={{ background: 'url("https://www.learnvern.com/images/new-home-assets/telugu_initial_color.jpg") center no-repeat' }}>
          <a href="https://www.learnvern.com/courses?language=telugu" style={{ height: '100%' }}>
            <div className="p-4 mt-3 text-center d-flex flex-column my-2">
              <label htmlFor="" className="lan-text pt-2">తెలుగు</label>
              <span><span className="course-badge px-1">8 Courses</span></span>
              <span className="language-badge mt-auto pt-3">Telugu</span>
            </div>
          </a>
        </div>
      </div>
      </div>
    </div>
  );
}

export default CourseByLanguage;
