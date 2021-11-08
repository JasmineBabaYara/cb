import React, { Component } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import "swiper/components/pagination/pagination.scss";
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
            <CourseCard courseTitle="Java" />
          </SwiperSlide>
          <SwiperSlide>
            <CourseCard courseTitle="Flutter" />
          </SwiperSlide>
          <SwiperSlide>
            <CourseCard courseTitle="Python" />
          </SwiperSlide>
          <SwiperSlide>
            <CourseCard courseTitle="C++" />
          </SwiperSlide>
          <SwiperSlide>
            <CourseCard courseTitle="Kotlin" />
          </SwiperSlide>
          <SwiperSlide>
            <CourseCard courseTitle="GO" />
          </SwiperSlide>
          <SwiperSlide>
            <CourseCard courseTitle="Rust" />
          </SwiperSlide>
          <SwiperSlide>
            <CourseCard courseTitle="C" />
          </SwiperSlide>
          <SwiperSlide>
            <CourseCard courseTitle="Swift" />
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