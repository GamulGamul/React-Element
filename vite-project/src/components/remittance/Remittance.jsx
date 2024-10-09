import { Fragment, useEffect, useState } from "react";
import LayerPopup from "../popup/LayerPopup";
import usePopup from "../customHook/usePopup";
import SampleCountry from "../popup/SampleCountry";

const Remittance = (props) => {
  const [popOpenCountry, setPopOpenCountry] = usePopup();

  const foreign = props.foreign;

  const handleOpenCountry = (state, e) => {
    setPopOpenCountry(state, e);
  };

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
          <div className="left">
            <div
              className={`img ${foreign.icon}`}
              aria-label={foreign.country}
            ></div>
            <button
              type="button"
              className="name"
              onClick={(e) => handleOpenCountry(true, e)}
            >
              {foreign.unit}
            </button>
          </div>
          <div className="right">
            <p className="rate">{foreign.rate}</p>
          </div>
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

      <LayerPopup
        type="default"
        open={popOpenCountry}
        onClose={() => setPopOpenCountry(false)}
      >
        <SampleCountry
          onClose={() => setPopOpenCountry(false)}
          data={props.data}
          handler={props.handler}
        />
      </LayerPopup>
    </>
  );
};
export default Remittance;
