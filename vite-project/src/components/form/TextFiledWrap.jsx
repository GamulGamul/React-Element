import styled from "@emotion/styled";
import TextCaution from "./TextCoution";
import React from "react";

const STextFiledWrap = styled.div`
  display: flex;
  gap: 10px;
`;

const TextFiledWrap = ({
  label,
  id,
  errorMessege,
  successMessege,
  children,
}) => {
  const ParentComponent = ({ children }) => {
    // children에게 customProp을 전달
    return React.Children.map(children, (child) => {
      // child가 유효한 React 요소인지 확인하고, 그렇다면 새로운 props를 전달
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { id: id });
      }
      return child;
    });
  };

  return (
    <>
      <div className="form-title">
        {label && (
          <strong className="label">
            <label htmlFor={id}>{label}</label>
          </strong>
        )}
      </div>
      <STextFiledWrap>
        <ParentComponent>{children}</ParentComponent>
      </STextFiledWrap>
      {errorMessege && (
        <TextCaution cautionType="error">{errorMessege}</TextCaution>
      )}
      {successMessege && (
        <TextCaution cautionType="success">{successMessege}</TextCaution>
      )}
    </>
  );
};
export default TextFiledWrap;
