import mail from '../../public/mail-5-svgrepo-com.svg';
import phone from '../../public/phone-free-material-svgrepo-com.svg';
import { Img } from './Img';
import { Div } from './StyledDiv';
import P from './StyledP';

const ContactInfo = () => {
  return (
    <Div display="flex" flexdir="column" gap="2rem" justify="center">
      <Div maxW="33rem">
        <P pad="0.3rem">Escríbenos explicando tu problema o consulta.</P>
        <P pad="0.3rem">
          Una vez recibida la consulta, te contestaremos en el menor tiempo posible.
        </P>
        <P pad="0.3rem">
          También puedes solicitar directamente una cita. Podemos atenderte
          telemáticamente si lo prefieres.
        </P>
      </Div>
      <Div display="flex" align="center" justify="space-around">
        <Div display="flex" flexdir="row" align="center" gap="1rem">
          <Img src={phone} alt="icono de teléfono" width="2.5rem" />
          <P>919 999 999</P>
        </Div>
        <Div display="flex" flexdir="row" align="center" gap="1rem">
          <Img src={mail} alt="icono de gmail" width="2.5rem" />
          <P>Email de OdenaLegal</P>
        </Div>
      </Div>
      <Div maxW="33rem">
        <P fontSz="0.8rem">
          Todos tus datos quedarán protegidos y jamás te enviaremos ningún email sin tu
          permiso.
        </P>
      </Div>
    </Div>
  );
};

export default ContactInfo;
