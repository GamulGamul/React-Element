import Accordion from "./Accordion";

const accordionItems = [
  { id: "acc-1", title: "Section 1", content: "Content for section 1" },
  { id: "acc-2", title: "Section 2", content: "Content for section 2" },
  { id: "acc-3", title: "Section 3", content: "Content for section 3" },
];

const AccordionData = () => {
  return (
    <div>
      {accordionItems.map((list) => {
        return <Accordion key={list.id} list={list} />;
      })}
    </div>
  );
};

export default AccordionData;
