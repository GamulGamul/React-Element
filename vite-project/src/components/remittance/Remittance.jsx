import { Fragment, useEffect, useState } from "react";

const Remittance = (props) => {
  return (
    <>
      <div>
        <div className="box korea">
          {props.data
            .filter((el) => el.default)
            .map((el, i) => (
              <Fragment key={i}>
                <div className="left">
                  <div
                    className={`img ${el.icon}`}
                    aria-label={el.country}
                  ></div>
                  <p className="name">{el.unit}</p>
                </div>
                <div className="right">
                  <p className="rate">{el.rate}</p>
                </div>
              </Fragment>
            ))}
        </div>
        <div className="box foreign">
          {props.foreign.map((el, i) => (
            <Fragment key={i}>
              <div className="left">
                <div className={`img ${el.icon}`} aria-label={el.country}></div>
                <p className="name">{el.unit}</p>
              </div>
              <div className="right">
                <p className="rate">{el.rate}</p>
              </div>
            </Fragment>
          ))}
        </div>
        <div className="box bottom">
          <div className="left">현재고시 환율</div>
          <div className="right">
            <p>
              {props.nowData.krw} KRW = {props.nowData.usd} USD
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Remittance;
