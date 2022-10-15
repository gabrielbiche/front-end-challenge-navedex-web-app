import { useMutation, useQuery, useQueryClient } from 'react-query';

import { Column, NavBar, Row, Text, Button, Link, Image, Icon, Rocket } from 'components';
import { getNavers, getNaver, removeNaver } from 'services';

const NaversList = () => {
  const queryClient = useQueryClient();
  const { data: navers, isFetching } = useQuery('navers', getNavers);
  const { mutate: naver } = useMutation('naver', getNaver, {
    onSuccess: data => console.log(data)
  });
  const { mutate: remove, isLoading } = useMutation(removeNaver, {
    onSuccess: () => queryClient.invalidateQueries('navers')
  });

  return (
    <Column>
      <NavBar />
      <Column maxWidth={1280} mx='auto' mt={125} mb={139} left={0} right={0} position='absolute'>
        <Row alignItems='center' mx={32} justifyContent='space-between'>
          <Text fontSize={40} fontWeight={600}>Navers</Text>
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
                    <Image src={url} />
                  </Row>
                </Link>
                <Text mt={16} fontWeight={600}>{name}</Text>
                <Text mt={4}> {job_role} </Text>
                <Row mt={13}>
                  <Link onClick={() => remove(id)}>
                    <Icon name='trash' />
                  </Link>
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
