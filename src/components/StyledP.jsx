import React from 'react';
import styled, { css } from 'styled-components';

const StyledP = styled.p`
  ${(props) => {
    const { color, fontSz, textAl, borderBt, width } = props;
    return css`
      color: ${color};
      font-size: ${fontSz};
      text-align: ${textAl};
      border-bottom: ${borderBt};
      width: ${width};
    `;
  }}
`;

const P = (props) => {
  return <StyledP {...props}></StyledP>;
};

export default P;
