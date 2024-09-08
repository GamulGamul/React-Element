import { useState } from "react";
import classnames from "classnames";
import styled from "@emotion/styled";

const Accordion = ({ list }) => {
  const { title, content } = list;

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleAccordion}>{title}</button>
      {isOpen && <div>{content}</div>}
    </div>
  );
};

export default Accordion;
