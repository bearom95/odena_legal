import { useRef } from 'react';

/* import mailIcon from '../../public/mail-5-svgrepo-com.svg'; */
import Button from './Button';
/* import { Img } from './Img'; */
import { Modal } from './ModalTerms';
import { Div } from './StyledDiv';
import Fieldset from './StyledFieldset';
import DivForm from './StyledForm';
import Legend from './StyledLegend';
import P from './StyledP';
import Textarea from './StyledTextArea';
import Input from './StylesInput';

export const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    form.current.reset();
    console.log('enviando email');
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <Fieldset>
        <Legend textAl="center" fontSz="2rem">
          Contáctanos, te esperamos
        </Legend>
        {/* <DivForm display="flex" flexdir="row" gap="2rem" justify="center" align="center">
          <Img src={mailIcon} alt="mail icon" width="2.5rem" />
          <P>correo odenaLegal</P>
        </DivForm> */}
        <DivForm padding="1rem" display="flex" flexdir="column" justify="center">
          <Legend fontSz="1rem">Nombre</Legend>
          <Input
            type="text"
            name="user_name"
            textAl="center"
            borderRad="9px"
            fontSz="1rem"
            heigth="2rem"
            border="grey 2px solid"
            margin="0.3rem 0 1.2rem 0"
            required
          />
          <Legend>Email</Legend>
          <Input
            type="email"
            name="user_email"
            textAl="center"
            borderRad="9px"
            fontSz="1rem"
            heigth="2rem"
            border="grey 2px solid"
            margin="0.3rem 0 1.2rem 0"
            required
          />
          <Legend>Asunto</Legend>
          <Input
            type="text"
            name="tema"
            textAl="center"
            borderRad="9px"
            fontSz="1rem"
            heigth="2rem"
            border="grey 2px solid"
            margin="0.3rem 0 1.2rem 0"
            required
          />
          <Legend>Mensaje</Legend>
          <Textarea
            name="message"
            fontSz="1rem"
            borderRad="9px"
            textAl="center"
            margin="0.3rem 0 1.2rem 0"
            border="grey 2px solid"
            required
          />

          <Div display="flex" gap="0.5rem" margin="0 0 1rem 0">
            <Input
              type="checkbox"
              cursor="pointer"
              border="0"
              backgr="grey"
              required
              heigth="1rem"
              width="1rem"
            ></Input>
            <P>Acepto los </P>
            <Modal></Modal>
          </Div>

          <Button
            border="none"
            width="6rem"
            margin="0 auto"
            fontSz="1rem"
            padding="0.5rem"
            borderRad="9px"
            type="submit"
            backgr="#d4d8e7"
            cursor="pointer"
          >
            ENVIAR
          </Button>
        </DivForm>
      </Fieldset>
    </form>
  );
};
