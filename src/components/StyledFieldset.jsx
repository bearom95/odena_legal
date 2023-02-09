import styled, { css } from 'styled-components';

const StyledFieldset = styled.fieldset`
  border: 1px solid #d4d8e7;
  border-radius: 9px;
  padding: 2rem;
  width: 30rem;

  ${(props) => {
    const { color, backgr } = props;
    return css`
      color: ${color};
      background: ${backgr};
    `;
  }}
`;

const Fieldset = (props) => {
  return <StyledFieldset {...props}></StyledFieldset>;
};

export default Fieldset;
