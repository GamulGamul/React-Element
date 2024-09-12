import ReactDOM from "react-dom";
import styled from "@emotion/styled";

const Dimmed = ({ onClose }) => {
  const Dimmed = styled.div`
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: ${({ bgTransparent }) =>
      bgTransparent ? "rgba(0, 0, 0, 0.0)" : "rgba(0, 0, 0, 0.5)"};
  `;
  return <Dimmed onClick={onClose} />;
};

const Modal = ({
  title,
  open,
  onClose,
  showCloseBtn = true,
  effect,
  children,
}) => {
  const LayerPopupWrap = styled.div`
    opacity: 0;
    ${({ effect }) => effect && `opacity: 1;`}
    transition: all 0.5s;
    display: ${({ open }) => (open ? "block" : "none")};
    position: fixed;
    z-index: 1000;
    inset: 0px;
  `;

  const LayerPopup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 20px;
    .layer-wrap {
      position: relative;
      z-index: 3000;
      max-width: 100%;
      width: 80%;
      height: 600px;
      background-color: #fff;

      .btn-close {
        position: absolute;
        top: 0;
        right: 0;
        width: 50px;
        height: 50px;
      }
    }
  `;

  return (
    <>
      <LayerPopupWrap open={open} effect={effect}>
        <Dimmed onClose={onClose} />
        <LayerPopup>
          <div className="layer-wrap">
            {title && <h4>{title}</h4>}
            <div className="layer-container">{children}</div>
            {showCloseBtn && (
              <button
                type="button"
                onClick={onClose}
                className="btn-close"
                aria-label="닫기"
              >
                X
              </button>
            )}
          </div>
        </LayerPopup>
      </LayerPopupWrap>
    </>
  );
};

export const LayerPopup = (props) => {
  return ReactDOM.createPortal(
    <Modal {...props} />,
    document.getElementById("layer-root")
  );
};
export default LayerPopup;
