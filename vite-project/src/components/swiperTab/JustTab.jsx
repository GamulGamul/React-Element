import { Fragment, useState } from "react";
import styled from "styled-components";
import usePopup from "../customHook/usePopup";
import LayerPopup from "../popup/LayerPopup";
import PopPage from "./PopPage";

const SJustTab = styled.div`
  display: flex;
  gap: 10px;
  button {
    width: 100px;
    height: 100px;
    &.active {
      background-color: blue;
    }
  }
`;

const JustTab = (props) => {
  const [popOpen3, handlePopupOpen3] = usePopup();

  const tabData = [
    {
      title: "텝1",
      content: "11",
    },
    {
      title: "텝2",
      content: "22",
    },
    {
      title: "텝3",
      content: "33",
    },
    {
      title: "텝4",
      content: "44",
    },
    {
      title: "텝5",
      content: "55",
    },
    {
      title: "텝6",
      content: "66",
    },
    {
      title: "텝7",
      content: "77",
    },
    {
      title: "텝8",
      content: "88",
    },
  ];

  const [tabIndex, setTabIndex] = useState(); // tabIndex

  const [swiperState, setSwiperState] = useState(false); // 팝업 내부 버튼 초기화 접힘

  //   const handlePopupOpenCallBack = (e) => {
  //     console.log(`e : ` + e.target.textContent);
  //     console.log(333);
  //   };

  const handleTabClick = (index, state, e) => {
    setTabIndex(index);
    handlePopupOpen3(state, e);
    setSwiperState(true);
  };

  return (
    <>
      <SJustTab>
        <button type="button">전체</button>
        {tabData.map((el, index) => (
          <Fragment key={el + index}>
            <button
              type="button"
              className={tabIndex === index ? "active" : ""}
              onClick={(e) => handleTabClick(index, true, e)}
            >
              {el.title}
            </button>
          </Fragment>
        ))}
      </SJustTab>

      <LayerPopup
        type="default"
        open={popOpen3}
        onClose={() => handlePopupOpen3(false)}
      >
        <PopPage
          data={tabData}
          tabIndex={tabIndex}
          setTabIndex={setTabIndex}
          swiperState={swiperState}
        />
      </LayerPopup>
    </>
  );
};
export default JustTab;
