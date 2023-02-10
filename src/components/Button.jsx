import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  ${(props) => {
    const {
      width,
      heigth,
      color,
      fontSz,
      textAl,
      backgr,
      border,
      borderRad,
      margin,
      padding,
      cursor,
      all,
    } = props;
    return css`
      width: ${width};
      height: ${heigth};
      color: ${color};
      font-size: ${fontSz};
      text-align: ${textAl};
      background: ${backgr};
      border: ${border};
      border-radius: ${borderRad};
      margin: ${margin};
      padding: ${padding};
      cursor: ${cursor};
      all: ${all};
    `;
  }}
`;

const Button = (props) => {
  return <StyledButton {...props}></StyledButton>;
};

export default Button;
