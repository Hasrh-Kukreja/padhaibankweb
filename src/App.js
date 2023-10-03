import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import BannerSecond from './components/BannerSecond'
import CourseByLanguage from './components/CourseByLanguage'
import CoursesForCarrer from './components/CoursesForCarrer'
import EnrollCourse from './components/EnrollCourse'
import DigitalBundel from './components/DigitalBundel'
import BizGurukulWorks from './components/BizGurukulWorks'
import LearnAnytime from './components/LearnAnytime'
import Certificate from './components/Certificate'
import AboutBizgurukul from './components/AboutBizgurukul'
import CreativeElement from './components/CreativeElement'
import SchlolarsWork from './components/SchlolarsWork'
import Faq from './components/Faq'
import Support from './components/Support'
import Footer from './components/Footer'


function App() {
  return (
    <div><Header/>
    <Banner/>
    <DigitalBundel/>
    <BannerSecond/>
    <CourseByLanguage/>
    <CoursesForCarrer/>
    <EnrollCourse/>
    <BizGurukulWorks/>
    <LearnAnytime/>
    <Certificate/>
     <AboutBizgurukul/>
     <CreativeElement/>
     <SchlolarsWork/>
     <Faq/>
     <Support/>
     <Footer/>
    </div>
  )
}

export default App