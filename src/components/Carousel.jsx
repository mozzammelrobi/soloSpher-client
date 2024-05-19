import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Sllide';

import img1 from '../assets/images/carousel1.jpg'
import img2 from '../assets/images/carousel2.jpg'
import img3 from '../assets/images/carousel3.jpg'


const Carousel = () => {
  return (
    <div className='container pb-10 px-6 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Slide image={img1} text='Get Your web development Project done in one minute' /> </SwiperSlide>
        <SwiperSlide><Slide image={img2}  text='Get Your web development Project done in one minute' /> </SwiperSlide>
        <SwiperSlide><Slide image={img3}  text='Get Your web development Project done in one minute' /> </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Carousel;