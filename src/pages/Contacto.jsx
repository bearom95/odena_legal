import { ContactForm } from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import { Div } from '../components/StyledDiv';

export const Contacto = () => {
  return (
    <Div
      minH="calc(100vh - 3rem)"
      display="flex"
      justify="space-around"
      padding="2rem"
      gap="5rem"
      flexwrap="wrap"
      align="center"
    >
      <ContactInfo />
      <ContactForm />
    </Div>
  );
};
