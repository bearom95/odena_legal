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
      widthResponsive,
      widthResponsiveDesktop,
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
      @media only screen and (min-width: 624px) {
        width: ${widthResponsive};
      }
      @media only screen and (min-width: 1150px) {
        width: ${widthResponsiveDesktop};
      }
    `;
  }}
`;

export const Img = (props) => {
  return <StyledImg {...props}></StyledImg>;
};
