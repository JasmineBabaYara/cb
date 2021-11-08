import React, { Component } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import "swiper/components/pagination/pagination.scss";

// imgage imports 
import java from "../../styles/img/java.png";
import python from "../../styles/img/python.png";
import flutter from "../../styles/img/Flutter-logo.png";
import javascript from "../../styles/img/javascript.png";
import c from "../../styles/img/c.png";
import ruby from "../../styles/img/ruby.png";

// Import Custom css
import "../../styles/homePage/courses.css"
// Import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);


class Courses extends Component {
  render() {
    return (
      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={false}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={java} alt="java" /><p className="swiper-slide-text">Java</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={python} alt="python" /><p className="swiper-slide-text">Python</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={flutter} alt="Flutter" /><p className="swiper-slide-text">Flutter</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={javascript} alt="Javascript" /><p className="swiper-slide-text">javascript</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={c} alt="C" /><p className="swiper-slide-text">C language</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={ruby} alt="Ruby" /><p className="swiper-slide-text">Ruby</p>
          </SwiperSlide>
          
        </Swiper>
      </div>
    );
  }
}


function CourseCard(props) {
  return (
    <div className="course-slide">
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <h1 className="course-title">{props.courseTitle}</h1>
    </div>
  )
};


export default Courses;