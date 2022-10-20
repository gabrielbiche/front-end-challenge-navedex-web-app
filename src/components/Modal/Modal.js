import { createPortal } from 'react-dom';
import styled, { css } from 'styled-components';

import { Column } from 'components';

const Modal = ({ children, isOpen, ...props }) => {
  const portalRef = document.body;

  return createPortal(
    <ModalBackground isOpen={isOpen}>
      <Column
        width={592}
        height={160}
        left={0}
        right={0}
        top={0}
        bottom={0}
        m='auto'
        backgroundColor='white'
        position='absolute'
        {...props}
      >
        {children}
      </Column>
    </ModalBackground>,
    portalRef
  );
};

const ModalBackground = styled('div')(
  {
    zIndex: 2,
    position: 'fixed',
    width: '100%',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  ({ isOpen }) => css`
    visibility: ${isOpen ? 'visible' : 'hidden'};
    opacity: ${isOpen ? 1 : 0};
  `
);

export default Modal;
