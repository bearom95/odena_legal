import React from 'react';
import styled, { css } from 'styled-components';

const StyledP = styled.p`
  ${(props) => {
    const {
      color,
      fontSz,
      textAl,
      borderBt,
      width,
      maxW,
      pad,
      cursor,
      widthResponsive,
      paddingResponsive,
    } = props;
    return css`
      color: ${color};
      font-size: ${fontSz};
      text-align: ${textAl};
      border-bottom: ${borderBt};
      width: ${width};
      max-width: ${maxW};
      padding: ${pad};
      cursor: ${cursor};
      @media only screen and (min-width: 624px) {
        width: ${widthResponsive};
        padding: ${paddingResponsive};
      }
    `;
  }}
`;

const P = (props) => {
  return <StyledP {...props}></StyledP>;
};

export default P;
