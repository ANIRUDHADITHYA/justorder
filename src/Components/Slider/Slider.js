
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "./Slider.css";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import PopularCard from '../Cards/PopularCard';


const Slider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={4}
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
