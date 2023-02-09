import React from 'react';
import styled, { css } from 'styled-components';

const StyledLegend = styled.legend`
  text-align: center;
  font-size: 2rem;
  ${(props) => {
    const { color } = props;
    return css`
      color: ${color};
    `;
  }}
`;

const Legend = (props) => {
  return <StyledLegend {...props}></StyledLegend>;
};

export default Legend;
