import SelectData from "./components/select/SelectData";
import TabData from "./components/tab/TabData";
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
    </ContentWrap>
  );
};
export default Content;
