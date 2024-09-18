import { useState } from "react";
import classnames from "classnames";
import styled from "@emotion/styled";

const STextFiled = styled.div`
  flex: 1;
  .label {
    display: block;
  }

  .success {
    input {
      border: 1px solid blue;
    }
  }

  .error {
    input {
      border: 1px solid red;
    }
  }

  .focus {
    input {
      background-color: skyblue;
      border: 1px solid blue;
      outline: none;
    }
  }

  .input-text {
    input[type="password"],
    input[type="text"] {
      width: 100%;
    }
  }
`;

const TextFiled = ({
  type = "text",
  id,
  title,
  placeholder,
  readOnly,
  disabled,
  valueError = false,
  valueSuccess = false,
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
    </STextFiled>
  );
};

export default TextFiled;
