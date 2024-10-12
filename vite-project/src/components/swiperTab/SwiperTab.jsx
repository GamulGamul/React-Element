import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // 해당 모듈의 CSS 가져오기
import "swiper/css/pagination";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

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
    width: 100px;
    height: 100px;
  }
`;

const SwiperTab = (props) => {
  const swiperRef = useRef(null);
  const [isSwiperState, setIsSwiperState] = useState(props.swiperState || true); // swiper 활성 비활성

  const handleToggleSwiper = () => {
    if (swiperRef.current) {
      const newState = !isSwiperState;
      console.log(newState);
      swiperRef.current.enabled = newState; // Swiper 활성화/비활성화
      setIsSwiperState(newState); // Swiper 활성화 상태 업데이트
    }
  };

  useEffect(() => {
    if (isSwiperState && swiperRef.current) {
      // console.log("Swiper 활성화 상태가 되었음");
      swiperRef.current.slideTo(props.tabIndex);
      // 여기에 Swiper가 활성화되었을 때의 추가 작업을 작성하세요
      // 예: 초기 슬라이드로 이동하거나 특정 상태를 리셋하는 등
    }
  }, [isSwiperState, props.tabIndex]);

  const handleButtonClick = (index, e) => {
    e.preventDefault();
    props.handleSetTabIndex && props.handleSetTabIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index); // 클릭한 인덱스의 슬라이드로 이동
    }
  };

  const handleSetTranslate = (swiper, translate) => {
    // swiper 좌우 스와이프 안되게
    const maxTranslateValue = swiper.maxTranslate(); // Swiper의 최대 이동 값
    if (translate > 0)
      swiper.setTranslate(0); // x축이 0 이상으로 이동하지 않도록 강제 설정
    else if (translate < maxTranslateValue)
      swiper.setTranslate(maxTranslateValue); // 최대 이동 값을 넘지 않도록 설정
  };

  const swiperParams = {
    slidesPerView: "auto",
    spaceBetween: 30,
    onSetTranslate: handleSetTranslate,
    // centeredSlides: true, // 중앙에 슬라이드가 오도록 설정
  };
  return (
    <SSwiperTab>
      <button type="button" className="btn-swiper" onClick={handleToggleSwiper}>
        {isSwiperState ? "Disable Swiper" : "Enable Swiper"}
      </button>
      <Swiper
        {...swiperParams}
        className={`custom-wrap ${isSwiperState ? "" : "swiper-use-false"}`}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {props.data.map((el, i) => (
          <SwiperSlide key={el.title}>
            <a
              href="#"
              className={i === props.tabIndex ? "active" : ""}
              onClick={(e) => handleButtonClick(i, e)}
            >
              {el.title}
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      {console.log(props.data[props.tabIndex]?.content)}
      <div className="container">{props.data[props.tabIndex]?.content}</div>
    </SSwiperTab>
  );
};
export default SwiperTab;
