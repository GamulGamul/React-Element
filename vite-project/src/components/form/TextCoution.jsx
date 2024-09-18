import classnames from "classnames";
import styled from "@emotion/styled";

const TextCaution = ({ cautionType, children }) => {
  const STextCaution = styled.p`
    &.error {
      color: red;
    }
    &.success {
      color: blue;
    }
  `;

  return (
    <STextCaution
      className={classnames("txt-caution", {
        error: cautionType === "error",
        success: cautionType === "success",
      })}
    >
      {children}
    </STextCaution>
  );
};

export default TextCaution;
