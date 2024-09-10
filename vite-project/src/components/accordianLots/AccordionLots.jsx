import { useState } from "react";
import classnames from "classnames";
import styled from "@emotion/styled";

const AccordionLots = ({ list }) => {
  const { title, content } = list;

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* 버튼내 내용이없다면 aria-label="내용" 추가 */}
      <button onClick={toggleAccordion} aria-expanded={isOpen}>
        {title}
      </button>
      {isOpen && <div>{content}</div>}
    </div>
  );
};

export default AccordionLots;
