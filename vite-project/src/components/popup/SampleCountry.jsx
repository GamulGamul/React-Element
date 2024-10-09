import { useState } from "react";

const SampleCountry = (props) => {
  const [value, setValue] = useState("");

  const filterData = props.data.filter(
    (el) =>
      el.country.includes(value) ||
      el.countryEn.includes(value) ||
      el.unit.includes(value)
  );
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className="search-wrapper">
        <input
          type="text"
          value={value}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="country-wrapper">
        {value ? (
          ""
        ) : (
          <>
            <ul className="country-list">
              <li>
                <button type="button">
                  <strong className="img-wrap">
                    <span className="img" aria-label={`한국 국기`}></span>
                    <span className="name">국가명 (영문)</span>
                  </strong>
                  <span className="unit">통화</span>
                </button>
              </li>
            </ul>
            <h3>주요국가</h3>
            <ul className="country-list">
              {props.data
                .filter((el) => el.major)
                .map((el, i) => (
                  <li key={i}>
                    <button
                      type="button"
                      onClick={() => props.handler(el, props.onClose)}
                    >
                      <strong className="img-wrap">
                        <span
                          className="img"
                          aria-label={`${el.country}국기`}
                        ></span>
                        <span className="name">
                          {el.country} ({el.countryEn})
                        </span>
                      </strong>
                      <span className="unit">{el.unit}</span>
                    </button>
                  </li>
                ))}
            </ul>
            <h3>전체국가</h3>
          </>
        )}

        <ul className="country-list">
          {filterData.map((el, i) => (
            <li key={i}>
              <button
                type="button"
                onClick={() => props.handler(el, props.onClose)}
              >
                <strong className="img-wrap">
                  <span className="img" aria-label={`${el.country}국기`}></span>
                  <span className="name">
                    {el.country} ({el.countryEn})
                  </span>
                </strong>
                <span className="unit">{el.unit}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default SampleCountry;
