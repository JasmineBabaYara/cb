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
            <CourseCard img={java} courseTitle="Java" />
          </SwiperSlide>
          <SwiperSlide>
            <CourseCard img={python} courseTitle="Python" />
          </SwiperSlide>
          <SwiperSlide>
            <CourseCard img={flutter} courseTitle="Flutter" />
          </SwiperSlide>
          <SwiperSlide>
            <CourseCard img={javascript} courseTitle="Javascript" />
          </SwiperSlide>
          <SwiperSlide>
            <CourseCard img={ruby} courseTitle="Ruby" />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}


function CourseCard(props) {
  return (
    <div className="course-card">
      <img src={props.img} alt={props.courseTitle} /><p className="swiper-slide-text">{props.courseTitle}</p>
    </div>
    // <div className="course-slide">
    //   <div className="cube"></div>
    //   <div className="cube"></div>
    //   <div className="cube"></div>
    //   <div className="cube"></div>
    //   <div className="cube"></div>
    //   {/* <h1 className="course-title">{props.courseTitle}</h1> */}
    // </div>
  )
};


export default Courses;