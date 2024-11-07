import { useRef, useEffect } from "react";
import styled from "@emotion/styled";

const SAccordion = styled.div`
  .content-wrap {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }
`;

const Accordion = ({ list, isOpen, onToggle }) => {
  const { title, content } = list;
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [isOpen]);

  return (
    <SAccordion>
      <button onClick={onToggle} aria-expanded={isOpen}>
        {title}
      </button>
      <div className="content-wrap" ref={contentRef}>
        {content}
      </div>
    </SAccordion>
  );
};

export default Accordion;
