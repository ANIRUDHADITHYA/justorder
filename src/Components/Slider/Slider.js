
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "./Slider.css";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import PopularCard from '../Cards/PopularCard';
import { useEffect, useState } from 'react';


const Slider = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1400) {
        setSlidesPerView(4);
      } else if (window.innerWidth >= 1050) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 700) {
        setSlidesPerView(2);
      }else {
        setSlidesPerView(1);
      }
    };

    // Initial setup
    handleResize();

    // Attach the event listener
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={slidesPerView}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <PopularCard></PopularCard>
      </SwiperSlide>
      <SwiperSlide>
        <PopularCard></PopularCard>
      </SwiperSlide>
      <SwiperSlide>
        <PopularCard></PopularCard>
      </SwiperSlide>
      <SwiperSlide>
        <PopularCard></PopularCard>
      </SwiperSlide>
      <SwiperSlide>
        <PopularCard></PopularCard>
      </SwiperSlide>
      <SwiperSlide>
        <PopularCard></PopularCard>
      </SwiperSlide>
      <SwiperSlide>
        <PopularCard></PopularCard>
      </SwiperSlide>
    </Swiper>
  );
}
export default Slider;
