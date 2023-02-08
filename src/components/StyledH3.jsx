import React from 'react';
import styled, { css } from 'styled-components';

const StyledH3 = styled.h3`
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

const H3 = (props) => {
  return <StyledH3 {...props}></StyledH3>;
};

export default H3;
