import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Slide = ({ slideList }) => {
  const SwiperWrap = styled.div`
    .swiper-slide {
      height: 100px;
      background-color: red;
    }
  `;

  return (
    <SwiperWrap>
      <div>1111</div>
      <Swiper spaceBetween={50} slidesPerView={2}>
        <div>
          {slideList.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <Link to="/slide">
                <div>{index}</div>
              </Link>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </SwiperWrap>
  );
};

export default Slide;
