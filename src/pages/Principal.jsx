import { NavLink } from 'react-router-dom';

import despacho from '../../public/despachoAbogados.jpg';
import { Img } from '../components/Img';
import { Div } from '../components/StyledDiv';

export const Principal = () => {
  return (
    <Div
      minH="calc(100vh - 3rem)"
      display="flex"
      justify="center"
      gap="5rem"
      flexwrap="wrap"
      align="center"
      flexdir="column"
      padding="2rem"
      paddingResponsive="5rem"
    >
      <h1 style={{ textAlign: 'center', fontStyle: 'italic', fontWeight: '600' }}>
        Huye de los abogados deshumanizados, nosotros te daremos una atención cercana,
        personalizada y sujeta a tus necesidades.
      </h1>
      <Div
        display="flex"
        margin="2rem 0"
        gap="2.5rem"
        flexwrap="wrap"
        flexdir="row"
        justify="center"
      >
        <Img
          src={despacho}
          alt="despacho"
          width="20rem"
          widthResponsive="30rem"
          widthResponsiveDesktop="45rem"
        />
        <Div widthResponsive="30rem">
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
        </Div>
      </Div>
    </Div>
  );
};
