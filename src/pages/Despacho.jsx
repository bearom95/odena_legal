import despacho from '../../public/despachoAbogados.jpg';
import { Img } from '../components/Img';
import { StyledDiv } from '../components/StyledDiv';

export const Despacho = () => {
  return (
    <StyledDiv display="flex" flexdir="column" justify="center" padding="2rem 5rem">
      <StyledDiv display="flex" margin="1rem 0" gap="1rem" flexdir="column">
        <Img src={despacho} alt="despacho" width="50%" />
        <StyledDiv>
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
        </StyledDiv>
        <StyledDiv display="flex" margin="1rem 0" gap="1rem">
          <p>Valores</p>
          <Img src={despacho} alt="despacho" width="30rem" />
        </StyledDiv>
      </StyledDiv>
    </StyledDiv>
  );
};
