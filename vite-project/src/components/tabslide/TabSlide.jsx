import React from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const tabContentData = [
  {
    title: "1첫번째",
    desc: "내용",
  },
  {
    title: "2첫번째",
    desc: "내용",
  },
  {
    title: "3첫번째",
    desc: "내용",
  },
  {
    title: "4첫번째",
    desc: "내용",
  },
  {
    title: "5첫번째",
    desc: "내용",
  },
];

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
        {tabContentData.map((el, i) => (
          <>
            <Element
              name={`section${i + 1}`}
              className="tab-section"
              style={{ height: "500px" }}
            >
              <h2>{el.title}</h2>
              <p>{el.desc}</p>
            </Element>
          </>
        ))}
      </div>
    </div>
  );
};

export default TabSlide;
