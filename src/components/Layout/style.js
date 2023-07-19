import { styled } from "styled-components";

import { setVariables } from "../../styles/variables";

export const LayoutWrapper = styled.div`
display: flex;`;

export const ChildWrapper = styled.div`
padding: calc(${setVariables.smSpacing} * 2);

h1 {
    font-size: 14px;
}`;
