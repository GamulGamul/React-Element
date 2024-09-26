import { useState } from "react";
import AccordionLots from "./AccordionLots";

const AccordionLotsData = () => {
  // const [accLots, setAccLots] = useState([
  //   {
  //     id: "acc-1",
  //     title: "Section 1",
  //     content: "Content for section 1",
  //   },
  //   { id: "acc-2", title: "Section 2", content: "Content for section 2" },
  //   { id: "acc-3", title: "Section 3", content: "Content for section 3" },
  // ]);

  const accList = [
    {
      id: "acc-1",
      title: "Section 1",
      content: [
        {
          text: "데이타들0",
        },
        {
          text: "데이타들1",
        },
        {
          text: "데이타들2",
        },
        {
          text: "데이타들3",
        },
        {
          text: "데이타들4",
        },
      ],
    },
    {
      id: "acc-2",
      title: "Section 2",
      content: [
        {
          text: "데이타들0",
        },
        {
          text: "데이타들1",
        },
        {
          text: "데이타들2",
        },
        {
          text: "데이타들3",
        },
        {
          text: "데이타들4",
        },
      ],
    },
  ];

  return (
    <div>
      {accList.map((list) => {
        return <AccordionLots key={list.id} list={list} />;
      })}
    </div>
  );
};

export default AccordionLotsData;
