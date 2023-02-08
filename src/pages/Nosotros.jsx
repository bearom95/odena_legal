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
      minH="calc(100vh - 3rem)"
      padding="2rem"
    >
      <Section display="flex" flexdir="column" align="center" width="22rem" gap="1rem">
        <Img src={diamond} alt="Imagen X" width="100%" />
        <H3>Pepito Pérez García</H3>
        <P textAl="center">
          Departamento de Derecho Penal. Abogado penalista especializado en delitos contra
          la Hacienda Pública, licenciado en la UCM y ejerciente desde 1989. Experiencia
          citas o mierders varias.
        </P>
      </Section>
      <Section display="flex" flexdir="column" align="center" width="22rem" gap="1rem">
        <Img src={diamond} alt="Imagen X" width="100%" />
        <H3>Pepito Pérez García</H3>
        <P textAl="center">
          Departamento de Derecho Penal. Abogado penalista especializado en delitos contra
          la Hacienda Pública, licenciado en la UCM y ejerciente desde 1989. Experiencia
          citas o mierders varias.
        </P>
      </Section>
      <Section display="flex" flexdir="column" align="center" width="22rem" gap="1rem">
        <Img src={diamond} alt="Imagen X" width="100%" />
        <H3>Pepito Pérez García</H3>
        <P textAl="center">
          Departamento de Derecho Penal. Abogado penalista especializado en delitos contra
          la Hacienda Pública, licenciado en la UCM y ejerciente desde 1989. Experiencia
          citas o mierders varias.
        </P>
      </Section>
      <Section display="flex" flexdir="column" align="center" width="22rem" gap="1rem">
        <Img src={diamond} alt="Imagen X" width="100%" />
        <H3>Pepito Pérez García</H3>
        <P textAl="center">
          Departamento de Derecho Penal. Abogado penalista especializado en delitos contra
          la Hacienda Pública, licenciado en la UCM y ejerciente desde 1989. Experiencia
          citas o mierders varias.
        </P>
      </Section>
    </Div>
  );
};
