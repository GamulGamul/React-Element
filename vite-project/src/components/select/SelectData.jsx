import Select from "./Select";

const selectList = [
  { id: 1, title: "첫번쨰" },
  { id: 2, title: "두번쨰" },
  { id: 3, title: "세번째" },
];

const selectList2 = [
  { id: 4, title: "첫번쨰" },
  { id: 5, title: "두번쨰" },
  { id: 6, title: "세번째" },
];

const SelectData = () => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Select selectList={selectList} />
      <Select selectList={selectList2} />
    </div>
  );
};

export default SelectData;
