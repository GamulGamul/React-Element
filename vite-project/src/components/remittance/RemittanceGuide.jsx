//////////////////////////////////// 해외송금비교
/*
    //상태값 
    login: true, //로그인 한 회원
    default: true, //한국 고정값
    state: true, //초기값 or 송금 국가 및 통화를 선택했을때
    major: true, //주요 국가

    //공통
    icon: 국기 이미지
    country: 나라
    countryEn: 나라 영문명
    unit: 화폐 단위
    rate: 금액,
    company: 각 회사 별 송금 비교 리스트
  */

import { useEffect, useMemo, useState } from "react";
import Remittance from "./Remittance";
import RemittanceList from "./RemittanceList";

const RemittanceGuide = () => {
  const dummiyData = useMemo(
    () => [
      {
        default: true,
        state: false,
        icon: "KRW",
        country: "한국",
        countryEn: "korea",
        unit: "KRW",
        rate: 1000000,
      },
      {
        login: true,
        state: true,
        major: true,
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
    <>
      <Remittance
        data={data}
        nowData={nowData}
        foreign={foreign}
        handler={handleChangeForeign}
      />
      <RemittanceList nowData={nowData} foreign={foreign} />
    </>
  );
};
export default RemittanceGuide;
