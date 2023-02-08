import { NavLink } from 'react-router-dom';

import despacho from '../../public/despachoAbogados.jpg';
import { Img } from '../components/Img';
import { StyledDiv } from '../components/StyledDiv';

export const Principal = () => {
  return (
    <StyledDiv display="flex" flexdir="column" justify="center" padding="2rem 5%">
      <h1
        style={{ 'text-align': 'center', 'font-style': 'italic', 'font-weight': '600' }}
      >
        Huye de los abogados deshumanizados, nosotros te daremos una atención cercana,
        personalizada y sujeta a tus necesidades.
      </h1>
      <StyledDiv display="flex" margin="2rem 0" gap="1rem">
        <Img src={despacho} alt="despacho" width="30rem" height="20rem" />
        <StyledDiv>
          <p>
            Ódena es un despacho de abogados situado en Madrid y Toledo, donde podremos
            ayudarte con aquellas cuestiones jurídicas o procedimientos a los que te
            enfrentes en materia civil, penal, laboral y administrativa.
            <br />
            <br /> Trataremos de que tus problemas se conviertan en una carga más ligera.
            <br />
            <br /> Te comprendemos y apoyamos tu situación.
          </p>
          <h3>PRIMERA CONSULTA TELEMÁTICA GRATUITA</h3>
          <h3>
            Para más información, pincha en{' '}
            <NavLink to="contacto" className="navlink">
              CONTACTO
            </NavLink>
          </h3>
        </StyledDiv>
      </StyledDiv>
    </StyledDiv>
  );
};
