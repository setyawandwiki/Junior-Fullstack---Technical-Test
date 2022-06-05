import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';
import styled from 'styled-components';

const Container = styled.footer`
  background: lightblue;
  padding: 3rem 0;
  text-align: center;
  font-size: 0.9rem;
`;
const Logo = styled.a`
  font-size: 2rem;
  font-weight: 500;
  display: inline-block;
  list-style-type: none;
`;
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const ListFooter = styled.li`
  list-style-type: none;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
const WrapperCopy = styled.div`
  color: var(--color-bg);
  &:hover {
    background: transparent;
    color: limegreen;
    border-color: black;
  }
`;

const Social = styled.a`
  background: var(--color-bg);
  color: var(--color-white);
  padding: 0.8rem;
  border-radius: 0.7rem;
  display: flex;
  border: 1px solid transparent;
`;
function Footer() {
  return (
    <Container>
      <Logo>Rendang Hj.Aniar</Logo>
      <List>
        <ListFooter>
          <a>Home</a>
        </ListFooter>
        <ListFooter>
          <a>About</a>
        </ListFooter>
        <ListFooter>
          <a>Experience</a>
        </ListFooter>
        <ListFooter>
          <a>Services</a>
        </ListFooter>
        <ListFooter>
          <a>Portoflio</a>
        </ListFooter>
        <ListFooter>
          <a>testimonials</a>
        </ListFooter>
        <ListFooter>
          <a>contact</a>
        </ListFooter>
      </List>

      <Wrapper>
        <Social href="https://facebook.com">
          <FaFacebookF fontSize="large" />
        </Social>
        <Social href="https://instagram.com">
          <FiInstagram fontSize="large" />
        </Social>
        <Social href="https://twitter.com">
          <IoLogoTwitter fontSize="large" />
        </Social>
      </Wrapper>
      <WrapperCopy>
        <small>&copy; Copright All Reserved</small>
      </WrapperCopy>
    </Container>
  );
}

export default Footer;
