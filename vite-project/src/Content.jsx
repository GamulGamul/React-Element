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
import FilterTabData from "./components/filterTab/FilterTabData";

import { useEffect, useMemo, useState } from "react";
import ToggleButtonGuide from "./components/formButton/ToggleButtonGuide";
import ToastPopup from "./components/toast/toastPopup";
// import TabAccordion from "./components/tabaccordion/TabAccordion";
import ContextGuide from "./components/contextTest/ContextGuide";
import ToastPopupInput from "./components/toast/ToastPopupInput";
import ToastPopupCopy from "./components/toast/ToastPopupCopy";
import Remittance from "./components/remittance/Remittance";
import RemittanceList from "./components/remittance/RemittanceList";
import RemittanceGuide from "./components/remittance/RemittanceGuide";
import SwiperTabGuide from "./components/swiperTab/SwiperTabGuide";
import SwiperTab from "./components/swiperTab/SwiperTab";
import InputToLocaleString from "./components/inputtolocalestring/InputToLocaleString";

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

  const handlePopupOpenCallBack = (e) => {
    console.log(`e : ` + e.target.textContent);
    console.log(333);
  };

  const handlePopupOpenCallBack22 = (e) => {
    console.log(`e : ` + e.target.textContent);
    console.log(333);
  };

  const [radioChange, setRadioChange] = useState(false);

  const handleRadioChange = (state) => {
    setRadioChange(state);
  };

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
  const [tabIndex, setTabIndex] = useState(null);

  const handleSetTabIndex = (index) => {
    setTabIndex(index);
  };

  return (
    <ContentWrap>
      <InputToLocaleString />
      <h2>swiperTabPopup</h2>
      <SwiperTabGuide />
      <h2>swiperTab</h2>
      <SwiperTab
        data={tabData}
        tabIndex={tabIndex}
        handleSetTabIndex={handleSetTabIndex}
      />
      <h2>worked</h2>
      <RemittanceGuide />
      <h2>toast copy</h2>
      <ToastPopupCopy
        id="toast-1"
        label="계좌 설정"
        onText="주계좌로 설정되었습니다."
        offText="주계좌설정이 해지되었습니다."
        offTimer={1000}
      />
      <h2>input type</h2>
      <ToastPopupInput
        id="toast-1"
        label="계좌 설정"
        onText="주계좌로 설정되었습니다."
        offText="주계좌설정이 해지되었습니다."
        offTimer={1000}
      />
      <h2>Context</h2>
      <ContextGuide />
      <h2>toggleButton</h2>
      <ToggleButtonGuide />
      <h2>toastPopup</h2>
      <ToastPopup
        id="toast-1"
        label="계좌 설정"
        onText="주계좌로 설정되었습니다."
        offText="주계좌설정이 해지되었습니다."
        offTimer={5000}
      />
      <ToastPopup
        id="toast-2"
        label="계좌 설정"
        onText="2222주계좌로 설정되었습니다."
        offText="222주계좌설정이 해지되었습니다."
        offTimer={2000}
      />
      <h2>filterSelectData</h2>
      <FilterTabData />
      <h2>CheckboxData</h2>
      <CheckboxData />
      <h2>RadioData</h2>
      <RadioData />
      {/* <h2>accordionTab</h2>
      <TabAccordion /> */}
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
        onClick={(e) => handlePopupOpen(true, e, handlePopupOpenCallBack)}
        style={{ width: "200px", height: "50px" }}
      >
        레이어 팝업
      </button>

      <button
        type="button"
        onClick={(e) => handlePopupOpen2(true, e, handlePopupOpenCallBack22)}
        style={{ width: "200px", height: "50px" }}
      >
        레이어 팝업2
      </button>

      <LayerPopup
        title="첫번째 팝업"
        type="default"
        open={popOpen}
        onClose={() => handlePopupOpen(false)}
      >
        <SampleAlert />
      </LayerPopup>

      <LayerPopup
        type="default"
        open={popOpen2}
        onClose={() => handlePopupOpen2(false)}
      >
        <SampleLayer handleRadioChange={handleRadioChange} />
      </LayerPopup>

      {/* didMount팝업 */}
      {/* <LayerPopup
        title="그냥 팝업"
        type="alert"
        open={popOpenDidMount}
        onClose={() => handlePopOpenDidMount(false)}
      >
        셈플알럿트
        <SampleAlert />
      </LayerPopup> */}
    </ContentWrap>
  );
};
export default Content;
