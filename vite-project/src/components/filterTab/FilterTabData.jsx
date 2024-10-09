import { Fragment, useEffect, useState } from "react";

const tabData = [
  {
    id: "all",
    title: "전체",
  },
  {
    id: "depositWithDrawal",
    title: "입출금",
  },
  {
    id: "financialInformation",
    title: "금융정보",
  },
  {
    id: "coupon",
    title: "쿠폰",
  },
  {
    id: "event",
    title: "이벤트",
  },
  {
    id: "livingBenefits",
    title: "생활혜택",
  },
];

const contentData = [
  {
    identify: "deposit",
    label: "입금내역",
    income: 1000,
    balance: 9900,
    date: "08/09 17:25",
    text() {},
    // text() {
    //   return `(입금) ${this?.income}원 김전북 잔액:${this?.balance}원 ${this?.date} `;
    // },
  },
  {
    identify: "deposit",
    label: "입금내역",
    income: 1000,
    balance: 9900,
    date: "08/09 17:25",
    text() {
      return (
        this &&
        `(입금) ${this?.income}원 김전북 잔액:${this?.balance}원 ${this?.date} `
      );
    },
  },
];

const FilterTabData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(contentData);
  }, []);
  return (
    <>
      <div>
        {tabData.map(({ title, id }, index) => (
          <Fragment key={index}>
            <button type="button" key={id}>
              {title}
            </button>
          </Fragment>
        ))}
      </div>

      <div>
        {data.map(({ identify, label, text, nowDate }, index) => (
          <button type="button" key={index}>
            <span>{label}</span>
            <span>{text()}</span>
            <span>{nowDate}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default FilterTabData;
