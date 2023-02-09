import styled, { css } from 'styled-components';

const StyledInput = styled.input`
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
    `;
  }}
`;

const Input = (props) => {
  return <StyledInput {...props}></StyledInput>;
};

export default Input;
