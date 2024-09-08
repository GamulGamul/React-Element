import styled from "@emotion/styled";

const STextFiledSplit = styled.div`
  display: flex;
  gap: 10px;
`;

const TextFiledSplit = ({ children }) => {
  return <STextFiledSplit>{children}</STextFiledSplit>;
};
export default TextFiledSplit;
