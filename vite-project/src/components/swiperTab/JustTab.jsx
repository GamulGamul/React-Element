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
  const [popOpen, handlePopupOpen] = usePopup();

  const [swiperState, setSwiperState] = useState(false); // 팝업 내부 버튼 초기화 접힘

  const handleTabClick = (index, state, e) => {
    props.handleSetTabIndex(index);
    handlePopupOpen(state, e);
    setSwiperState(true);
  };

  const handleAllClick = () => {
    props.handleReset();
  };

  return (
    <>
      <SJustTab>
        <button type="button" onClick={handleAllClick}>
          전체
        </button>
        {props.data.map((el, index) => (
          <Fragment key={el + index}>
            <button
              type="button"
              className={props.tabIndex === index ? "active" : ""}
              onClick={(e) => handleTabClick(index, true, e)}
            >
              {el.title}
              <em className="data-count"></em>
            </button>
          </Fragment>
        ))}
      </SJustTab>

      <LayerPopup
        type="default"
        open={popOpen}
        onClose={() => handlePopupOpen(false)}
      >
        <PopPage {...props} swiperState={swiperState} />
      </LayerPopup>
    </>
  );
};
export default JustTab;
