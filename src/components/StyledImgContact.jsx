import React from 'react';
import styled, { css } from 'styled-components';

const StyledImg = styled.img`
  box-sizing: border-box;
  @media only screen and (min-width: 624px) {
    width: 25rem;
  }
  @media only screen and (min-width: 1150px) {
    width: 32rem;
  }
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

export const ContactImg = (props) => {
  return <StyledImg {...props}></StyledImg>;
};
