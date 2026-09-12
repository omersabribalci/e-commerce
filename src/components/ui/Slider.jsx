import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import heroImage1 from "../../assets/hero/hero-slider-1.webp";
import heroImage2 from "../../assets/hero/hero-slider-2.webp";
import heroImage3 from "../../assets/hero/hero-slider-3.webp";
import ButtonMd from "./ButtonMd";

const SlideContent = ({ eyebrow, title, description, buttonText }) => {
  return (
    <div className="absolute top-1/2 left-12 z-10 w-[70%] translate-y-[-43%] text-text-light sm:left-[14.5%] sm:w-[42%]">
      <p className="mb-6 font-body text-small font-bold sm:mb-8">{eyebrow}</p>
      <h2 className="font-display text-h3 font-bold tracking-wide sm:text-h2 sm:whitespace-nowrap xl:text-h1">
        {title}
      </h2>
      <p className="mt-5 max-w-80 font-body text-paragraph font-medium sm:mt-7 sm:text-h5">
        {description}
      </p>
      <ButtonMd className="mt-6" variant="solid" color="info">
        {buttonText}
      </ButtonMd>
    </div>
  );
};

const Slider = () => {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        }}
      >
        <SwiperSlide>
          <div className="relative h-115 w-full overflow-hidden sm:aspect-1439/716 sm:h-auto">
            <img
              className="absolute inset-0 h-full w-full object-cover object-[72%_center] md:object-center"
              src={heroImage1}
              alt="New collection"
            />
            <SlideContent
              eyebrow="SUMMER 2026"
              title="NEW COLLECTION"
              description="We know how large objects will act, but things on a small scale."
              buttonText="SHOP NOW"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-115 w-full overflow-hidden sm:aspect-1439/716 sm:h-auto">
            <img
              className="absolute inset-0 h-full w-full object-cover object-center"
              src={heroImage2}
              alt="Colorful weekend style"
            />
            <SlideContent
              eyebrow="WEEKEND STYLE"
              title="COLOR YOUR DAY"
              description="Fresh colors and comfortable layers made for every moment."
              buttonText="DISCOVER NOW"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-115 w-full overflow-hidden sm:aspect-1439/716 sm:h-auto">
            <img
              className="absolute inset-0 h-full w-full object-cover object-center"
              src={heroImage3}
              alt="Denim collection"
            />
            <SlideContent
              eyebrow="THE DENIM EDIT"
              title="NATURALLY BOLD"
              description="Everyday denim, reimagined with effortless details."
              buttonText="SHOP DENIM"
            />
          </div>
        </SwiperSlide>
        <div className="swiper-button-prev text-white!"></div>
        <div className="swiper-button-next text-white!"></div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default Slider;
