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
  valueError,
  valueSuccess,
}) => {
  return (
    <>
      <div className="form-title">
        {label && (
          <strong className="label">
            <label htmlFor={id}>{label}</label>
          </strong>
        )}
      </div>
      <STextFiledWrap>{children}</STextFiledWrap>
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
