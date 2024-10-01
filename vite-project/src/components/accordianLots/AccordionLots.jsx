import { useEffect, useRef, useState } from "react";
import classnames from "classnames";
import styled from "@emotion/styled";

const MoreButton = styled.button`
  background-color: gray;
  height: 40px;
  width: 100%;
`;

const AccContent = styled.div`
  overflow: hidden;
  transition: max-height 1s ease;
  .acc-list {
    padding: 10px 0;
    border-top: 1px solid black;
    &:last-child {
      border-bottom: 1px solid block;
    }
  }
  max-height: ${(props) => props["data-height"] && props["data-height"]}px;

  &.open {
    transition: max-height 1s ease;
  }
`;

const AccordionLots = ({ list }) => {
  const { title, content } = list;

  //리밋
  const LIMIT = 2;
  // 더보기 btn
  const MORE = 2;

  const contentRef = useRef();
  const listRef = useRef();
  const btnRef = useRef();

  const conHeight = contentRef?.current?.clientHeight;
  const listHeight = listRef?.current?.clientHeight;
  const btnHeight = btnRef?.current?.clientHeight;

  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(conHeight);
  const [current, setCurrent] = useState(1);
  const [filterCon, setFilterCon] = useState(LIMIT);

  // useEffect(() => {

  // }, [])

  useEffect(() => {
    setHeight(0);
  }, []);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    setHeight(conHeight);
    // if (isOpen) {
    //   setHeight(conHeight);
    //   // setFilterCon(LIMIT);
    // } else {
    //   setHeight(0);
    //   setCurrent(1);
    //   // setFilterCon(LIMIT);
    // }
  };

  let addHeight = listHeight * (MORE * current + LIMIT) + btnHeight;
  console.log(`height : ` + height);

  const handleBtnMore = () => {
    setHeight(addHeight);
    setFilterCon((prev) => prev + MORE);
    setCurrent((prev) => prev + MORE);
  };

  const filterContent = content.filter((_, index) => index < filterCon);

  return (
    <div>
      {/* 버튼내 내용이없다면 aria-label="내용" 추가 */}
      <button onClick={toggleAccordion} aria-expanded={isOpen}>
        {title}
      </button>
      {
        <AccContent
          ref={contentRef}
          data-height={height}
          className={isOpen ? "open" : ""}
        >
          {filterContent.map((item, index) => (
            <>
              <div
                ref={listRef}
                className="acc-list"
                key={`${item.text} + ${index}`}
              >
                {item.text}
              </div>
            </>
          ))}
          <MoreButton ref={btnRef} type="button" onClick={handleBtnMore}>
            더보기
          </MoreButton>
        </AccContent>
      }
    </div>
  );
};

export default AccordionLots;
