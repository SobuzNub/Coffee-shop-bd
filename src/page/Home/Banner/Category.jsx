import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import image1 from '../../../category/americano.jpg'
import image2 from '../../../category/capuccino.jpg'
import image3 from '../../../category/espresso.jpg'
import image4 from '../../../category/lattee.jpg'
import SectionTitle from '../../../components/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading={"From 11.00 am to 10.00 pm"}
                heading={"Order Online"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={image1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='md:w-[361px] md:h-[241px]' src={image2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='md:w-[361px] md:h-[241px]' src={image3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='md:w-[361px] md:h-[241px]' src={image4} alt="" />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;