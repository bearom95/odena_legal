import { Div } from './StyledDiv';
import mapa from '../../public/mapaEjemplo.png';
import { Img } from './Img';
import location from '../../public/location-filled-svgrepo-com.svg';
import P from './StyledP';
import phone from '../../public/phone-free-material-svgrepo-com.svg';
import mail from '../../public/mail-5-svgrepo-com.svg';
import { ContactImg } from './StyledImgContact';

const ContactInfo = () => {
  return (
    <Div display="flex" flexdir="column" gap="2rem" justify="center">
      <Div display="flex" flexdir="row" align="center" gap="1rem">
        <Img src={phone} alt="icono de teléfono" width="2.5rem" />
        <P>919 999 999</P>
      </Div>
      <Div display="flex" flexdir="row" align="center" gap="1rem">
        <Img src={mail} alt="icono de gmail" width="2.5rem" />
        <P>Email de OdenaLegal</P>
      </Div>
      <Div display="flex" flexdir="row" align="center" gap="1rem">
        <Img src={location} alt="icono de localización" width="2.5rem" />
        <P>Direccion de OdenaLegal</P>
      </Div>
      <ContactImg src={mapa} alt="imagen de la localización" width="22rem" />
    </Div>
  );
};

export default ContactInfo;