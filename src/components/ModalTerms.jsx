import Popup from 'reactjs-popup';

import closeBtn from '../../public/close.png';
import Button from './Button';
import { Img } from './Img';
import { Div } from './StyledDiv';
import P from './StyledP';

export const Modal = () => {
  return (
    <Popup
      contentStyle={{
        width: '20rem',
        border: 'auto',
        borderRadius: '5px',
        padding: '1rem',
        background: 'grey',
      }}
      trigger={
        <P color="grey" borderBt="1px solid grey" cursor="pointer">
          Términos Legales
        </P>
      }
      modal
      nested
    >
      {(close) => (
        <Div display="flex" flexwrap="wrap" flexdir="column">
          <Div display="flex" justify="flex-end">
            <Button
              all="unset"
              onClick={() => {
                close();
              }}
            >
              <Img
                src={closeBtn}
                alt="cerrar"
                height="1rem"
                width="1rem"
                margin="0.5rem"
                cursor="pointer"
              />
            </Button>
          </Div>

          <P>Los terminos blabala</P>
        </Div>
      )}
    </Popup>
  );
};
