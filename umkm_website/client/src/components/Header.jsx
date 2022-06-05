import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const [activeNav, setActiveNav] = useState('#');
  const changeHanlder = (value) => {
    setActiveNav(value);
  };
  return (
    <Container>
      <a href="">
        <img
          style={{ width: '40%', height: 'auto' }}
          src="logoUMKM.png"
          alt=""
        />
      </a>

      <RightMenu>
        <Link
          onClick={() => changeHanlder('#')}
          className={activeNav === '#about' ? 'active' : ''}
          href="#about"
        >
          About
        </Link>
        <Link
          onClick={() => changeHanlder('#history')}
          className={activeNav === '#' ? 'active' : ''}
          href="#history"
        >
          History
        </Link>
        <Link
          onClick={() => changeHanlder('#barang')}
          className={activeNav === '#' ? 'active' : ''}
          href="#barang"
        >
          Barang Kami
        </Link>
        <Link
          onClick={() => changeHanlder('#testimoni')}
          className={activeNav === '#' ? 'active' : ''}
          href="#testimoni"
        >
          Testimoni
        </Link>
        <Link
          onClick={() => changeHanlder('#hubungi')}
          className={activeNav === '#' ? 'active' : ''}
          href="#hubungi"
        >
          Hubungi Kami
        </Link>
      </RightMenu>
      <CustomMenu className="icon" onClick={(e) => setBurgerStatus(true)} />
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={(e) => setBurgerStatus(false)}></CustomClose>
        </CloseWrapper>
        <li>
          <a
            onClick={() => changeHanlder('#about')}
            className={activeNav === '#' ? 'active' : ''}
            href="#about"
          >
            About
          </a>
        </li>
        <li>
          <a
            onClick={() => changeHanlder('#history')}
            className={activeNav === '#' ? 'active' : ''}
            href="#history"
          >
            History
          </a>
        </li>
        <li>
          <a
            onClick={() => changeHanlder('#barang')}
            className={activeNav === '#' ? 'active' : ''}
            href="#barang"
          >
            Barang Kami
          </a>
        </li>
        <li>
          <a
            onClick={() => changeHanlder('#testimoni')}
            className={activeNav === '#' ? 'active' : ''}
            href="#testimoni"
          >
            Testimoni
          </a>
        </li>
        <li>
          <a
            onClick={() => changeHanlder('#hubungi')}
            className={activeNav === '#' ? 'active' : ''}
            href="#hubungi"
          >
            Hubungi Kami
          </a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  z-index: 1;
  background: white;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Link = styled.a`
  @media (min-width: 500px) {
    display: none;
  }
  @media (min-width: 846px) {
    font-size: 0.9rem;
    display: block;
  }
`;

const RightMenu = styled.div`
  display: flex;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 20px;
  }
  @media (max-width: 500px) {
    display: none;
  }
  flex: 1;
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  opacity: 0;
  @media (max-width: 900px) {
    opacity: 1;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? `translateX(0)` : `translateX(100%)`)};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
