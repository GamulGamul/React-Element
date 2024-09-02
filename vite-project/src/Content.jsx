import TabData from "./components/tab/TabData";
import SelectData from "./components/select/SelectData";
import ListData from "./components/list/ListData";
import styled from "@emotion/styled";
const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = () => {
  return (
    <ContentWrap>
      <h2>Tab</h2>
      <TabData />
      <h2>Select</h2>
      <SelectData />
      <h2>Thumnail List</h2>
      <ListData />
    </ContentWrap>
  );
};
export default Content;
