import { useRef } from 'react';

import mailIcon from '../../public/mail-5-svgrepo-com.svg';
import { Img } from './Img';
import Fieldset from './StyledFieldset';
import DivForm from './StyledForm';
import Legend from './StyledLegend';
import P from './StyledP';
import Textarea from './StyledTextArea';
import Input from './StylesInput';

export const ContactForm = () => {
  const form = useRef();
  const sendEmail = () => {};
  return (
    <form ref={form} onSubmit={sendEmail}>
      <Fieldset>
        <Legend>Contáctanos</Legend>
        <DivForm display="flex" flexdir="row" gap="2rem" justify="center" align="center">
          <Img src={mailIcon} alt="mail icon" width="2.5rem" />
          <P>correo odenaLegal</P>
        </DivForm>
        <DivForm
          padding="2rem"
          display="flex"
          flexdir="column"
          gap="1rem"
          justify="center"
        >
          <Input
            type="text"
            name="user_name"
            placeholder="Name"
            textAl="center"
            borderRad="9px"
            fontSz="1rem"
            heigth="2rem"
            required
          />
          <Input
            type="email"
            name="user_email"
            placeholder="Email"
            textAl="center"
            borderRad="9px"
            fontSz="1rem"
            heigth="2rem"
            required
          />
          <Textarea
            name="message"
            placeholder="Message"
            fontSz="1rem"
            borderRad="9px"
            textAl="center"
            required
          />
          <Input
            width="6rem"
            margin="0 auto"
            fontSz="1rem"
            padding="0.5rem"
            borderRad="9px"
            type="submit"
            value="SEND"
          />
        </DivForm>
      </Fieldset>
    </form>
  );
};
