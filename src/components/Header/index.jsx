import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import { Container, Menu, Li } from './styles';

function Header() {
  const [changeBackground, setChangeBackground] = useState(false);
  const { pathname } = useLocation();

  window.onscroll = () => {
    if (window.pageYOffset > 150) {
      setChangeBackground(true);
    }
    if (window.pageYOffset <= 150) {
      setChangeBackground(false);
    }
  };

  return (
    <Container changeBackground={changeBackground}>
      <img src={Logo} alt="logo" />
      <Menu>
        <Li is-active={(pathname === '/').toString()}>
          <Link to="/">Home</Link>
        </Li>
        <Li is-active={(pathname === 'movies').toString()}>
          <Link to="/movies">Movies</Link>
        </Li>
        <Li is-active={(pathname === '/series').toString()}>
          <Link to="/series">Series</Link>
        </Li>
      </Menu>
    </Container>
  );
}

export default Header;
