import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { toast /*ToastContainer*/ } from 'react-toastify';

import Button from './Button';
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
    emailjs
      .sendForm('service_4fobios', 'contact_form', form.current, 'OSbft1z1M9_pHU-mC')
      .then();
    (res) => {
      console.log(res);
      toast.success('The mail has been sent!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    },
      (error) => {
        console.log('FAILED', error);
        toast.error('The mail has not been sent!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      },
      form.current.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Fieldset>
        <Legend textAl="center" fontSz="2rem">
          Contáctanos, te esperamos
        </Legend>
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
