import styled from 'styled-components';

import { Row, Image, Link } from 'components';
import logo from 'assets/logo/logo.svg';
import { useUser } from 'context/userContext';

const NavBarComponent = () => {
  const { logout } = useUser();

  return (
    <Row top={0}>
      <NavBar>
        <Link to='/navers'>
          <Image src={logo} atl='logo' width={145.12} height={37} ml={32} />
        </Link>
        <Link 
          to={'/login'} onClick={logout} label='Sair' fontSize={14} fontWeight={600} mr={32} />
      </NavBar>
    </Row>
  );
};

const NavBar = styled.div`
  max-width: 1280px;
  height: 85px;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  z-index: 1;
  position: absolute;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
`;

export default NavBarComponent;
