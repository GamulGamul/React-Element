import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Slide = ({ slideList }) => {
  const SwiperWrap = styled.div`
    .swiper-slide {
      a {
        display: block;
        height: 300px;
        img {
          width: 100%;
          height: 100%;
          object-fit: fill;
        }
      }
    }
  `;

  return (
    <SwiperWrap>
      <Swiper spaceBetween={50} slidesPerView={2}>
        <div>
          {slideList.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <Link to="/slide">
                <img src={slide.src} />
              </Link>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </SwiperWrap>
  );
};

export default Slide;
