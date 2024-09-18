import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { keyframes } from "@emotion/react";

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
const fadeIn = keyframes`
  to {
    opacity: 1;
  }
`;

const Modal = ({
  title,
  open,
  onClose,
  showCloseBtn = true,
  type = "default",
  children,
}) => {
  const LayerPopupWrap = styled.div`
    display: ${({ open }) => (open ? "block" : "none")};
    opacity: 0;
    position: fixed;
    z-index: 1000;
    inset: 0px;
    animation: ${fadeIn} 0.2s ease forwards;
    transition: opacity 1s ease, visibility 1s ease;
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

  //모달 tab이동
  const modalRef = useRef(null);

  const handleTabMove = (open) => {
    if (!open) return;

    const modalComponent = modalRef.current;
    const focusableElements = modalRef.current.querySelectorAll(
      'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleFocus = (e) => {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            modalComponent.focus();
          } else if (document.activeElement === modalComponent) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            modalComponent.focus();
          }
        }
      }
    };

    modalComponent.focus();
    modalComponent.addEventListener("keydown", handleFocus);

    return () => {
      modalComponent.removeEventListener("keydown", handleFocus);
    };
  };

  useEffect(() => {
    handleTabMove(open);
  }, [open]);

  return (
    <>
      <LayerPopupWrap open={open} role="dialog">
        <Dimmed onClose={onClose} />
        <LayerPopup>
          <div
            className={`layer-wrap ${type}`}
            ref={modalRef}
            tabIndex="0"
            aria-modal={open}
          >
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
