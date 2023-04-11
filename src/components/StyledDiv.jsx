import styled, { css } from 'styled-components';

const StyledDiv = styled.div`
  box-sizing: border-box;

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
      maxW,
      minH,
      height,
      justify,
      border,
      borderradius,
      padding,
      margin,
      align,
      borderbottom,
      gap,
      widthResponsive,
      paddingResponsive,
      widthResponsiveMax,
      paddingResponsiveMax,
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
      min-height: ${minH};
      height: ${height};
      justify-content: ${justify};
      border-radius: ${borderradius};
      border: ${border};
      padding: ${padding};
      margin: ${margin};
      align-items: ${align};
      border-bottom: ${borderbottom};
      gap: ${gap};
      @media only screen and (min-width: 624px) {
        width: ${widthResponsive};
        padding: ${paddingResponsive};
      }
      @media only screen and (min-width: 1375px) {
        width: ${widthResponsiveMax};
        padding: ${paddingResponsiveMax};
      }
    `;
  }}
`;
export const Div = (props) => {
  return <StyledDiv {...props}></StyledDiv>;
};
