import TabData from "./components/tab/TabData";
import SelectData from "./components/select/SelectData";
import ListData from "./components/list/ListData";
import styled from "@emotion/styled";
import LayerPopup from "./components/popup/LayerPopup";
import usePopup from "./components/customHook/usePopup"; //popup 커스텀 훅
const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = () => {
  const [popOpen, handlePopupOpen] = usePopup();
  const [popOpen2, handlePopupOpen2] = usePopup();

  return (
    <ContentWrap>
      <h2>Tab</h2>
      <TabData />
      <h2>Select</h2>
      <SelectData />
      <h2>Thumnail List</h2>
      <ListData />
      <h2>Popup</h2>
      <button
        type="button"
        onClick={handlePopupOpen}
        style={{ width: "200px", height: "50px" }}
      >
        레이어 팝업
      </button>
      <button
        type="button"
        onClick={handlePopupOpen2}
        style={{ width: "200px", height: "50px" }}
      >
        레이어 팝업2
      </button>
      <LayerPopup
        title="첫번째 팝업"
        open={popOpen}
        onClose={handlePopupOpen}
      />
      <LayerPopup open={popOpen2} onClose={handlePopupOpen2} />
    </ContentWrap>
  );
};
export default Content;
