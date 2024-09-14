import TabData from "./components/tab/TabData";
import SelectData from "./components/select/SelectData";
import ListData from "./components/list/ListData";
import styled from "@emotion/styled";
import LayerPopup from "./components/popup/LayerPopup";
import usePopup from "./components/customHook/usePopup"; //popup 커스텀 훅
import SlideData from "./components/slide/SlideData";
import FormData from "./components/form/FormData";
import AccordionData from "./components/accordian/AccordionData";
import AccordionLotsData from "./components/accordianLots/AccordionLotsData";
import RadioData from "./components/radio/RadioData";
import CheckboxData from "./components/checkbox/CheckboxData";
import SampleAlert from "./components/popup/SampleAlert";
import SampleLayer from "./components/popup/SampleLayer";
import { useEffect, useState } from "react";

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = () => {
  const [popOpen, handlePopupOpen] = usePopup();
  const [popOpen2, handlePopupOpen2] = usePopup();
  const [popOpenDidMount, handlePopOpenDidMount] = usePopup(); //윈도우 온로드 팝업

  useEffect(() => {
    handlePopOpenDidMount(true);
  }, [handlePopOpenDidMount]);

  // const [effect, setEffect] = useState(false);

  // const handleClick = () => {
  //   setTimeout(() => {
  //     setEffect(true);
  //   }, 1000); // 1초 후에 스타일 변경
  // };

  return (
    <ContentWrap>
      <h2 id="heading">CheckboxData</h2>
      <CheckboxData />
      <h2>RadioData</h2>
      <RadioData />
      <h2>AccordionLots</h2>
      <AccordionLotsData />
      <h2>Accordion</h2>
      <AccordionData />
      <h2>Form</h2>
      <FormData />
      <h2>swiper slide</h2>
      <SlideData />
      <h2>Tab</h2>
      <TabData />
      <h2>Select</h2>
      <SelectData />
      <h2>Thumnail List</h2>
      <ListData />
      <h2>Popup</h2>
      <button
        type="button"
        onClick={(e) => handlePopupOpen(true, e)}
        style={{ width: "200px", height: "50px" }}
      >
        레이어 팝업
      </button>

      <button
        type="button"
        onClick={(e) => handlePopupOpen2(true, e)}
        style={{ width: "200px", height: "50px" }}
      >
        레이어 팝업2
      </button>

      <LayerPopup
        title="첫번째 팝업"
        // effect={effect}
        type="alert"
        open={popOpen}
        onClose={() => handlePopupOpen(false)}
      >
        셈플알럿트
        <SampleAlert />
      </LayerPopup>
      <LayerPopup
        type="default"
        open={popOpen2}
        onClose={() => handlePopupOpen2(false)}
      >
        둘셋넷다섯
        <SampleLayer />
      </LayerPopup>

      <LayerPopup
        title="그냥 팝업"
        type="alert"
        open={popOpenDidMount}
        onClose={() => handlePopOpenDidMount(false)}
      >
        셈플알럿트
        <SampleAlert />
      </LayerPopup>
    </ContentWrap>
  );
};
export default Content;
