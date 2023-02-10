import React from 'react';
import styled, { css } from 'styled-components';

const StyledLegend = styled.legend`
  ${(props) => {
    const { color, textAl, fontSz } = props;
    return css`
      color: ${color};
      text-align: ${textAl};
      font-size: ${fontSz};
    `;
  }}
`;

const Legend = (props) => {
  return <StyledLegend {...props}></StyledLegend>;
};

export default Legend;
