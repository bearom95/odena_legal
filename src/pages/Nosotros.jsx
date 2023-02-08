import diamond from '../../public/diamond-svgrepo-com.svg';
import { Img } from '../components/Img';
import { Div } from '../components/StyledDiv';
import H3 from '../components/StyledH3';
import P from '../components/StyledP';
import Section from '../components/StyledSection';

export const Nosotros = () => {
  return (
    <Div
      display="flex"
      flexwrap="wrap"
      justify="center"
      gap="1.5rem"
      align="center"
      height="calc(100vh - 3rem)"
    >
      <Section display="flex" flexdir="column" align="center" width="20rem">
        <Img src={diamond} alt="Imagen X" width="10rem" />
        <H3>Pepito Pérez García</H3>
        <P>
          Departamento de Derecho Penal. Abogado penalista especializado en delitos contra
          la Hacienda Pública, licenciado en la UCM y ejerciente desde 1989. Experiencia
          citas o mierders varias.
        </P>
      </Section>
      <Section display="flex" flexdir="column" align="center" width="20rem">
        <Img src={diamond} alt="Imagen X" width="10rem" />
        <H3>Pepito Pérez García</H3>
        <P>
          Departamento de Derecho Penal. Abogado penalista especializado en delitos contra
          la Hacienda Pública, licenciado en la UCM y ejerciente desde 1989. Experiencia
          citas o mierders varias.
        </P>
      </Section>
      <Section display="flex" flexdir="column" align="center" width="20rem">
        <Img src={diamond} alt="Imagen X" width="10rem" />
        <H3>Pepito Pérez García</H3>
        <P>
          Departamento de Derecho Penal. Abogado penalista especializado en delitos contra
          la Hacienda Pública, licenciado en la UCM y ejerciente desde 1989. Experiencia
          citas o mierders varias.
        </P>
      </Section>
      <Section display="flex" flexdir="column" align="center" width="20rem">
        <Img src={diamond} alt="Imagen X" width="10rem" />
        <H3>Pepito Pérez García</H3>
        <P>
          Departamento de Derecho Penal. Abogado penalista especializado en delitos contra
          la Hacienda Pública, licenciado en la UCM y ejerciente desde 1989. Experiencia
          citas o mierders varias.
        </P>
      </Section>
    </Div>
  );
};
