import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // 해당 모듈의 CSS 가져오기
import "swiper/css/pagination";
import styled from "styled-components";
import { Fragment, useRef, useState } from "react";

const SSwiperTab = styled.div`
  .custom-wrap.swiper-use-false {
    .swiper-wrapper {
      flex-wrap: wrap;
      transform: translate3d(0, 0, 0) !important;
      .swiper-slide {
        margin-bottom: 30px;
      }
    }
  }
  .swiper-slide {
    width: auto;
    .active {
      background-color: red;
    }
  }
  a {
    display: block;
    border: 1px solid gray;
    width: 150px;
    height: 100px;
  }
`;

const SwiperTab = (props) => {
  const swiperRef = useRef(null);
  const [isSwiperEnabled, setIsSwiperEnabled] = useState(true); // swiper 활성 비활성
  const [tabIndex, setTabIndex] = useState(); // tabIndex

  const handleToggleSwiper = () => {
    if (swiperRef.current) {
      const newState = !isSwiperEnabled;
      swiperRef.current.enabled = newState; // Swiper 활성화/비활성화
      setIsSwiperEnabled(newState); // Swiper 활성화 상태 업데이트
    }
  };

  const handleButtonClick = (index, e) => {
    e.preventDefault();
    setTabIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index - 1); // 클릭한 인덱스의 슬라이드로 이동
    }
  };

  const swiperParams = {
    slidesPerView: "auto",
    spaceBetween: 30,
  };
  return (
    <SSwiperTab>
      <button type="button" className="btn-swiper" onClick={handleToggleSwiper}>
        {isSwiperEnabled ? "Disable Swiper" : "Enable Swiper"}
      </button>
      <Swiper
        {...swiperParams}
        className={`custom-wrap ${isSwiperEnabled ? "" : "swiper-use-false"}`}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {props.data.map((el, i) => (
          <SwiperSlide key={el.title}>
            <a
              href="#"
              className={i === tabIndex ? "active" : ""}
              onClick={(e) => handleButtonClick(i, e)}
            >
              {el.title}
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="container">{props.data[tabIndex]?.content}</div>
    </SSwiperTab>
  );
};
export default SwiperTab;
