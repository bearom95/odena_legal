import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #d4d8e7;
  position: fixed;
  top: 3rem;
  right: ${(props) => (props.open ? '0' : '-100%')};
  width: 100%;
  transition: right 0.3s linear;

  @media only screen and (min-width: 624px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: center;
  }

  a {
    padding: 0.5rem 0.8rem;
    color: black;
    text-decoration: none;
  }
`;
