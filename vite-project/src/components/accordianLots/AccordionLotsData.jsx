import { useState } from "react";
import AccordionLots from "./AccordionLots";

const AccordionLotsData = () => {
  const [accLots, setAccLots] = useState([
    {
      id: "acc-1",
      title: "Section 1",
      content(btn) {
        return <div>{btn()}</div>;
      },
    },
    { id: "acc-2", title: "Section 2", content: "Content for section 2" },
    { id: "acc-3", title: "Section 3", content: "Content for section 3" },
  ]);

  return (
    <div>
      {accLots.map((list) => {
        return <AccordionLots key={list.id} list={list} />;
      })}
    </div>
  );
};

export default AccordionLotsData;
