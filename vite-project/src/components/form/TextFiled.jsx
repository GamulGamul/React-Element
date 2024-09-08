import { useState } from "react";
import classnames from "classnames";
import styled from "@emotion/styled";
import TextCaution from "./TextCoution";

const STextFiled = styled.div`
  .label {
    display: block;
  }

  .success {
    color: blue;
  }

  .error {
    color: red;
  }

  .focus {
    input {
      background-color: skyblue;
      border: 1px solid blue;
      outline: none;
    }
  }
`;

const TextFiled = ({
  label,
  type = "text",
  id,
  title,
  placeholder,
  readOnly,
  disabled,
  valueError = false,
  valueSuccess = false,
  errorMessege,
  successMessege,
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const onFocus = () => {
    setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  return (
    <STextFiled>
      <div
        className={classnames("input-text", {
          error: valueError,
          success: valueSuccess,
          disabled: disabled,
          focus: isFocus,
        })}
      >
        {label && (
          <strong className="label">
            <label htmlFor={id}>{label}</label>
          </strong>
        )}
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          title={title}
          disabled={disabled}
          readOnly={readOnly}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
      {errorMessege && (
        <TextCaution cautionType="error">{errorMessege}</TextCaution>
      )}
      {successMessege && (
        <TextCaution cautionType="success">{successMessege}</TextCaution>
      )}
    </STextFiled>
  );
};

export default TextFiled;
