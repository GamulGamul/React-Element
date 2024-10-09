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

  //////////////////////////////////// 해외송금비교

  const dummiyData = useMemo(
    () => [
      {
        default: true, // 한국 고정값
        state: false,
        icon: "KRW",
        country: "한국",
        countryEn: "korea",
        unit: "KRW",
        rate: 1000000,
      },
      {
        state: true, // state: true는 초기값 or 송금 국가 및 통화를 선택했을때
        major: true, // 주요국가
        icon: "USE",
        country: "미국",
        countryEn: "United States",
        unit: "USD",
        rate: 367734,
        company: [
          {
            name: "hanpass",
            rate: 74195,
            charge: 1000,
            href: "/",
          },
          {
            name: "gentbe",
            rate: 7085,
            charge: 2000,
            href: "/",
          },
          {
            name: "western union",
            rate: 7085,
            charge: 1000,
            href: "/",
          },
        ],
      },
      {
        state: false,
        major: true, // 주요국가
        icon: "Dong",
        country: "베트남",
        countryEn: "Vietnam",
        unit: "Dong",
        rate: 267734,
        company: [
          {
            name: "Vietnam hanpass",
            rate: 274195,
            charge: 5000,
            href: "/",
          },
          {
            name: "Vietnam gentbe",
            rate: 27085,
            charge: 6000,
            href: "/",
          },
          {
            name: "Vietnam western union",
            rate: 27085,
            charge: 7000,
            href: "/",
          },
        ],
      },
      {
        state: false,
        icon: "HKD",
        country: "홍콩",
        countryEn: "Hong Kong",
        unit: "HKD",
        rate: 167734,
        company: [
          {
            name: "Hong Kong hanpass",
            rate: 174195,
            charge: 2000,
            href: "/",
          },
          {
            name: "Hong Kong gentbe",
            rate: 17085,
            charge: 4000,
            href: "/",
          },
          {
            name: "Hong Kong western union",
            rate: 17085,
            charge: 8000,
            href: "/",
          },
        ],
      },
    ],
    []
  );

  const nowDataData = useMemo(
    () => ({
      krw: 1345,
      usd: 1,
    }),
    []
  );

  const [data, setData] = useState([]);
  const [nowData, setNowData] = useState({});

  useEffect(() => {
    setData(dummiyData);
  }, [dummiyData]);

  useEffect(() => {
    setNowData(nowDataData);
  }, [nowDataData]);

  const [foreign, setForeign] = useState({});

  useEffect(() => {
    const foreignDefaultNSelect = data.filter((el) => el.state);
    setForeign((prev) => ({
      ...prev,
      ...foreignDefaultNSelect[0],
    }));
  }, [data]);

  const handleChangeForeign = (obj, onClose) => {
    setForeign((prev) => ({
      ...prev,
      ...obj,
    }));
    onClose && onClose();
  };

  return (
    <ContentWrap>
      <h2>worked</h2>
      <Remittance
        data={data}
        nowData={nowData}
        foreign={foreign}
        handler={handleChangeForeign}
      />
      <RemittanceList nowData={nowData} foreign={foreign} />
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
        // effect={effect}
        type="alert"
        open={popOpen}
        onClose={() => handlePopupOpen(false)}
      >
        셈플알럿트
        <SampleAlert handleRadioChange={handleRadioChange} />
      </LayerPopup>
      <LayerPopup
        type="default"
        open={popOpen2}
        onClose={() => handlePopupOpen2(false)}
      >
        둘셋넷다섯
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
