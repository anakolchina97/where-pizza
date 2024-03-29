import React from "react";
import styled from "styled-components";
import { rem } from "polished";

const H3 = ({ children, mb = 0, mbSm = 0 }) => {
  return (
    <H3Box mb={mb} mbSm={mbSm}>
      {children}
    </H3Box>
  );
};

const H3Box = styled.h3`
  font-weight: 600;
  font-size: ${rem(32)};
  line-height: 125%;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: ${(props) => rem(props.mb)};
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${rem(18)};
    line-height: 122%;
    margin-bottom: ${(props) => rem(props.mbSm)};
  }
`;

export default H3;
