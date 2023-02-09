import React from 'react';
import styled, { css } from 'styled-components';

const StyledDivForm = styled.div`
  box-sizing: border-box;
  place-items: center;

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
    `;
  }}
`;

const DivForm = (props) => {
  return <StyledDivForm {...props}></StyledDivForm>;
};

export default DivForm;
