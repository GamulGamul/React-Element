import React, { useState } from "react";

function InputToLocaleString() {
  const [value, setValue] = useState("");

  // 숫자만 허용하는 함수
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/[^0-9]/g, ""); // 숫자 외의 문자는 제거
    setValue(numericValue);
  };

  // 숫자 포맷을 해제하는 함수 (포커스 시)
  const handleFocus = () => {
    setValue((prevValue) => prevValue.replace(/,/g, "")); // ','를 제거하여 숫자만 유지
  };

  // 숫자 포맷을 추가하는 함수 (포커스 해제 시)
  const handleBlur = () => {
    if (value) {
      setValue((prevValue) => parseInt(prevValue, 10).toLocaleString()); // 숫자를 로케일 포맷으로 변환
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleInputChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder="Enter number"
    />
  );
}

export default InputToLocaleString;
