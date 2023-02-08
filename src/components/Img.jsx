import React from 'react';
import styled, { css } from 'styled-components';

const StyledImg = styled.img`
  box-sizing: border-box;
  ${(props) => {
    const {
      width,
      maxW,
      height,
      border,
      borderRadius,
      padding,
      objectfit,
      margin,
      boxShd,
    } = props;
    return css`
      width: ${width};
      max-width: ${maxW};
      height: ${height};
      border: ${border};
      border-radius: ${borderRadius};
      padding: ${padding};
      object-fit: ${objectfit};
      margin: ${margin};
      box-shadow: ${boxShd};
    `;
  }}
`;

export const Img = (props) => {
  return <StyledImg {...props}></StyledImg>;
};
