import { Fragment } from "react";
import styled from "styled-components";
import usePopup from "../customHook/usePopup";
import LayerPopup from "../popup/LayerPopup";
import SampleLayer from "../popup/SampleLayer";

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

  //   const handlePopupOpenCallBack = (e) => {
  //     console.log(`e : ` + e.target.textContent);
  //     console.log(333);
  //   };

  const handleTabClick = (state, e) => {
    // props.setTabIndex(index);
    handlePopupOpen3(state, e);
  };

  return (
    <>
      <SJustTab>
        {props.data.map((el, index) => (
          <Fragment key={el + index}>
            <button
              type="button"
              className={props.tabIndex === index ? "active" : ""}
              onClick={(e) => handleTabClick(true, e)}
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
        <SampleLayer />
      </LayerPopup>
    </>
  );
};
export default JustTab;
