import styled from 'styled-components';

import { Row, Image, Link } from 'components';
import logo from 'assets/logo/logo.svg';

const NavBarComponent = () => {
  return (
    <Row top={0}>
      <NavBar>
        <Link to='/home'>
          <Image src={logo} atl='logo' width={145.12} height={37} ml={32} />
        </Link>
        <Link to={'/logout'} label='Sair' fontSize={14} fontWeight={600} mr={32} />
      </NavBar>
    </Row>
  );
};

const NavBar = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  position: absolute;
  align-items: center;
  z-index: 1;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
`;

export default NavBarComponent;
