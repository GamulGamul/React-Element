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
      background-color: gray;
      border: 1px solid green;
      outline: none;
    }
  }

  .input-text {
    height: 100%;
    input[type="password"],
    input[type="text"] {
      width: 100%;
      height: 100%;
      vertical-align: top;
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
  errorValue = false,
  successValue = false,
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
          error: errorValue,
          success: successValue,
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
