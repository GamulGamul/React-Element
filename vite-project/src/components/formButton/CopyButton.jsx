import { useRef } from "react";

const CopyButton = ({ isOpen }) => {
  return (
    <button
      type="button"
      onClick={() => {
        isOpen && isOpen();
      }}
    >
      복사하기
    </button>
  );
};
export default CopyButton;
