import styled from "@emotion/styled/macro";

import _mx from "./Style";
import _svg from "./SvgList";

/* sorting button */
export const Sorting = styled.button`
  min-height: 28px;
  padding: 0 36px 0 0;
  background: ${_mx.svg(_svg.sort())} right center no-repeat;
  text-align: left;
  font-size: 15px;
  font-weight: 500;
  color: #555f6d;
  &:hover {
    background: ${_mx.svg(_svg.sort("0.16"))} right center no-repeat;
  }
  &.down {
    background: ${_mx.svg(_svg.sortDown)} right center no-repeat;
    &:hover {
      background: ${_mx.svg(_svg.sortDown("0.16"))} right center no-repeat;
    }
  }
  &.up {
    background: ${_mx.svg(_svg.sortUp)} right center no-repeat;
    &:hover {
      background: ${_mx.svg(_svg.sortUp("0.16"))} right center no-repeat;
    }
  }
`;
