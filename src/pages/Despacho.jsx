import despacho from '../../public/despachoAbogados.jpg';
import { Img } from '../components/Img';
import { Div } from '../components/StyledDiv';

export const Despacho = () => {
  return (
    <Div
      minH="calc(100vh - 3rem)"
      display="flex"
      justify="center"
      gap="3rem"
      flexwrap="wrap"
      align="center"
      flexdir="column"
      padding="2rem"
      paddingResponsive="5rem"
    >
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
        <Div widthResponsive="30rem" display="flex" align="center">
          <p>
            En Ódena podremos darte la ayuda personalizada en distintos ámbitos del
            derecho, con el fin de darte el mejor resultado.
            <br />
            <br /> Contamos con experiencia en el área de derecho penal, civil, familiar,
            laboral y administrativo, por lo que podremos asistirte de la mejor forma
            posible en todas las fases del procedimiento.
            <br />
            <br /> También te asesoraremos sobre cualquier tema que te genere dudas o
            desconocimiento.
          </p>
        </Div>
      </Div>
      <Div display="flex" gap="1rem" flexwrap="wrap">
        <Div>
          <h2>Nuestros Valores</h2>
          <p></p>
        </Div>

        <Img
          src={despacho}
          alt="despacho"
          width="20rem"
          widthResponsive="35rem"
          widthResponsiveDesktop="45rem"
        />
      </Div>
    </Div>
  );
};
