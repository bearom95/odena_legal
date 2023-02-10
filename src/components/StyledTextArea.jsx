import styled, { css } from 'styled-components';

const StyledTextarea = styled.textarea`
  height: 8rem;
  padding: 1rem;
  width: 85%;
  ${(props) => {
    const { color, fontSz, textAl, backgr, border, borderRad, margin } = props;
    return css`
      color: ${color};
      font-size: ${fontSz};
      text-align: ${textAl};
      background: ${backgr};
      border: ${border};
      border-radius: ${borderRad};
      margin: ${margin};
    `;
  }}
`;

const Textarea = (props) => {
  return <StyledTextarea {...props}></StyledTextarea>;
};

export default Textarea;
