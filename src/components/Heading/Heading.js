import React from "react";
import styled from "styled-components";
import { setVariables } from "../../styles/variables";

const HeaderWrapper = styled.div`
  width: 80%;
  margin: ${setVariables.lgSpacing} auto;
  font-size: ${setVariables.xlSpacing};
`;

export const Heading = ({ title }) => {
  return <HeaderWrapper>{title}</HeaderWrapper>;
};
