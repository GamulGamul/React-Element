import { useState } from "react";
import Accordion from "./Accordion";

const accordionItems = [
  { title: "Section 1", content: "Content for section 1" },
  { title: "Section 2", content: "Content for section 2" },
  { title: "Section 3", content: "Content for section 3" },
];

const AccordionData = () => {
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const handleToggle = (index) => {
    setOpenAccordionId(openAccordionId !== index ? index : null);
  };
  console.log(openAccordionId);

  return (
    <div>
      {accordionItems.map((list, index) => (
        <Accordion
          key={list.id}
          list={list}
          isOpen={openAccordionId === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default AccordionData;
