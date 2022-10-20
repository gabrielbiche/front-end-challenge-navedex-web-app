import React, { useCallback, useMemo, useState } from 'react';

import { Modal, Row, Text, Icon, Button, Column } from 'components';

const CONFIRMATION_TYPE = 'confirmation';

const ModalContext = React.createContext();

const useModal = () => {
  const context = React.useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

const ModalProvider = ({ children }) => {
  const [modalData, setModalData] = useState(null);

  const handleOpenModal = newModalData => setModalData(newModalData);

  const handleCloseModal = () => {
    if (modalData?.onClose) {
      modalData.onClose();
    }
    setModalData(null);
  };

  const handleConfirm = useCallback(() => {
    modalData?.onConfirm();
  }, [modalData]);

  const isConfirmationType = useMemo(() => modalData?.type === CONFIRMATION_TYPE, [modalData]);

  const modalContent = useMemo(
    () => ({
      title: modalData?.title,
      content: modalData?.content
    }),
    [modalData]
  );

  return (
    <ModalContext.Provider value={{ handleOpenModal, handleCloseModal }}>
      {children}
      <Modal isOpen={!!modalData} height={isConfirmationType ? 233 : 160}>
        <Column ml={32}>
          <Row>
            <Text variant='big' fontWeight={600} mt={32}> {modalContent.title} </Text>
          </Row>
          <Row>
            <Text fontSize={16} lineHeight='36px' mt={24}> {modalContent.content} </Text>
          </Row>
          {isConfirmationType ? (
            <Row position='absolute' mr={32} mb={32} bottom={0} right={0}>
              <Button variant='primary' onClick={() => handleCloseModal()}> Cancelar </Button>
              <Button ml={24} onClick={handleConfirm}> Excluir </Button>
            </Row>
          ) : (
            <Row position='absolute' mt={29} mr={29} right={0}>
              <Icon name='close' onClick={() => handleCloseModal()} />
            </Row>
          )}
        </Column>
      </Modal>
    </ModalContext.Provider>
  );
};

export { ModalProvider, useModal };
