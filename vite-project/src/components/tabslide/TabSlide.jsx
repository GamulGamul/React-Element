import React from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const TabSlide = () => {
  return (
    <div>
      {/* 탭 메뉴 */}
      <div className="tab-menu">
        <Link to="section1" smooth={true} duration={500}>
          첫번째
        </Link>
        <Link to="section2" smooth={true} duration={500}>
          두번째
        </Link>
        <Link to="section3" smooth={true} duration={500}>
          세번째
        </Link>
        <Link to="section4" smooth={true} duration={500}>
          네번째
        </Link>
        <Link to="section5" smooth={true} duration={500}>
          다섯번째
        </Link>
      </div>

      {/* 탭 섹션 */}
      <div className="tab-content">
        <Element
          name="section1"
          className="tab-section"
          style={{ height: "500px" }}
        >
          <h2>첫번째 섹션</h2>
          <p>여기에 첫번째 섹션 내용이 들어갑니다.</p>
        </Element>

        <Element
          name="section2"
          className="tab-section"
          style={{ height: "500px" }}
        >
          <h2>두번째 섹션</h2>
          <p>여기에 두번째 섹션 내용이 들어갑니다.</p>
        </Element>

        <Element
          name="section3"
          className="tab-section"
          style={{ height: "500px" }}
        >
          <h2>세번째 섹션</h2>
          <p>여기에 세번째 섹션 내용이 들어갑니다.</p>
        </Element>

        <Element
          name="section4"
          className="tab-section"
          style={{ height: "500px" }}
        >
          <h2>네번째 섹션</h2>
          <p>여기에 네번째 섹션 내용이 들어갑니다.</p>
        </Element>

        <Element
          name="section5"
          className="tab-section"
          style={{ height: "500px" }}
        >
          <h2>다섯번째 섹션</h2>
          <p>여기에 다섯번째 섹션 내용이 들어갑니다.</p>
        </Element>
      </div>
    </div>
  );
};

export default TabSlide;
