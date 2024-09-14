import usePopup from "../customHook/usePopup";
import LayerPopup from "./LayerPopup";

const SampleLayer = () => {
  const [popOpenAgain, handlepopOpenAgain] = usePopup();
  return (
    <>
      <button type="button" onClick={(e) => handlepopOpenAgain(true, e)}>
        팝업 열기
      </button>
      <LayerPopup open={popOpenAgain} onClose={() => handlepopOpenAgain(false)}>
        두번째 팝업
      </LayerPopup>
    </>
  );
};
export default SampleLayer;
