import React from 'react';
import styled, { css } from 'styled-components';

const StyledSection = styled.section`
  box-sizing: border-box;
  @media only screen and (max-width: 1554px) {
    width: 15rem;
  }
  ${(props) => {
    const {
      backgr,
      fontcolor,
      fontsize,
      display,
      flexwrap,
      flexdir,
      objectfit,
      width,
      height,
      justify,
      border,
      borderradius,
      padding,
      margin,
      marginTop,
      align,
      borderbottom,
      gap,
      minH,
      maxW,
      minW,
    } = props;
    return css`
      background-color: ${backgr};
      color: ${fontcolor};
      font-size: ${fontsize};
      display: ${display};
      flex-wrap: ${flexwrap};
      flex-direction: ${flexdir};
      object-fit: ${objectfit};
      width: ${width};
      max-width: ${maxW};
      min-width: ${minW};
      height: ${height};
      justify-content: ${justify};
      border-radius: ${borderradius};
      border: ${border};
      padding: ${padding};
      margin: ${margin};
      margin-top: ${marginTop};
      align-items: ${align};
      border-bottom: ${borderbottom};
      gap: ${gap};
      min-height: ${minH};
    `;
  }}
`;

const Section = (props) => {
  return <StyledSection {...props}></StyledSection>;
};

export default Section;
