import usePopup from "../customHook/usePopup";
import LayerPopup from "./LayerPopup";
import SampleAlert from "./SampleAlert";

const SampleLayer = () => {
  const [popOpenAgain, handlepopOpenAgain] = usePopup();
  return (
    <>
      <div>
        <button type="button" onClick={(e) => handlepopOpenAgain(true, e)}>
          팝업 열기
        </button>

        <LayerPopup
          type="default"
          open={popOpenAgain}
          onClose={() => handlepopOpenAgain(false)}
        >
          <SampleAlert />
        </LayerPopup>
      </div>
    </>
  );
};
export default SampleLayer;
