import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import { Column, NavBar, Row, Text, Button, Link, Image, Icon, Rocket, Modal } from 'components';
import { getNavers, getNaver, removeNaver } from 'services';
import { useModal } from 'context/modalContext';

const NaversList = () => {
  const queryClient = useQueryClient();
  const [naverModal, setNaverModal] = useState(null);
  const { handleOpenModal, handleCloseModal } = useModal();

  const { data: navers, isFetching } = useQuery('navers', getNavers);
  const { mutate: naver } = useMutation('naver', getNaver, {
    onSuccess: naver => setNaverModal(naver)
  });
  const { mutate: remove, isLoading } = useMutation(removeNaver, {
    onSuccess: () => {
      handleOpenModal({
        type: 'success',
        title: 'Naver excluído',
        content: 'Naver excluído com sucesso!'
      });
      queryClient.invalidateQueries('navers');
    }
  });

  const handleRemoveNaver = id => {
    naverModal && setNaverModal(null);
    handleOpenModal({
      type: 'confirmation',
      title: 'Excluir Naver',
      content: 'Tem certeza que deseja excluir este Naver?',
      onConfirm: () => {
        remove(id);
        handleCloseModal();
      }
    });
  };

  const handleNaverModal = ({ id, name, url, job_role, admission_date, birthdate, project }) => {
    const companyTime = admission_date;
    const age = birthdate;
    return (
      <Modal isOpen={!!naverModal} width={1006} height={503} flexWrap='wrap'>
        <Row width={503} height={503}>
          <Image src={url} alt='Naver' width='100%' />
        </Row>
        <Column width={503} height={503} pl={32}>
          <Text variant='big' fontWeight={600} mt={32}> {name} </Text>
          <Text variant='regular' mt={10}> {job_role} </Text>
          <Text variant='regular' fontWeight={600} mt={24}> Idade </Text>
          <Text variant='regular' mt={10}> {age} </Text>
          <Text variant='regular' fontWeight={600} mt={24}> Tempo de empresa </Text>
          <Text variant='regular' mt={10}> {companyTime} </Text>
          <Text variant='regular' fontWeight={600} mt={24}> Projetos que participou </Text>
          <Text variant='regular' mt={10}> {project} </Text>
          <Row mt={110}>
            <Icon name='trash' onClick={() => handleRemoveNaver(id)} />
            <Link to={`/navers/${id}`} ml={16}>
              <Icon name='pen' />
            </Link>
          </Row>
        </Column>
        <Row position='absolute' mt={21} mr={21} right={0}>
          <Icon name='close' onClick={() => setNaverModal(null)} />
        </Row>
      </Modal>
    );
  };

  return (
    <Column>
      <NavBar />
      {naverModal && handleNaverModal(naverModal)}
      <Column maxWidth={1280} mx='auto' mt={125} mb={139} left={0} right={0} position='absolute'>
        <Row alignItems='center' mx={32} justifyContent='space-between'>
          <Text fontSize={40} lineHeight='48px' fontWeight={600}> Navers </Text>
          <Link to='/navers/create'>
            <Button> Adicionar Naver </Button>
          </Link>
        </Row>
        <Row mx={32} overflow='auto' flexWrap='wrap' gridColumnGap={32} justifyContent='center'>
          {isFetching || isLoading ? (
            <Rocket />
          ) : (
            navers?.map(({ id, name, job_role, url }) => (
              <Column key={id} width={280} height={420} mt={20}>
                <Link onClick={() => naver(id)}>
                  <Row width={280} height={280} mt={12} px='auto'>
                    <Image src={url} alt='Naver' width='100%' />
                  </Row>
                </Link>
                <Text mt={16} fontWeight={600}> {name} </Text>
                <Text mt={4}> {job_role} </Text>
                <Row mt={13}>
                  <Icon name='trash' onClick={() => handleRemoveNaver(id)} />
                  <Link to={`/navers/${id}`} ml={16}>
                    <Icon name='pen' />
                  </Link>
                </Row>
              </Column>
            ))
          )}
        </Row>
      </Column>
    </Column>
  );
};

export default NaversList;
