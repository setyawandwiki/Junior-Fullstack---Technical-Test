import React from 'react';
import styled from 'styled-components';
import About from '../components/About';
import Contact from '../components/Contact';
import Detail from '../components/Detail';
import FindMe from '../components/FindMe';
import Footer from '../components/Footer';
import Gordon from '../components/Gordon';
import Testimoni from '../components/Testimoni';
import Fade from 'react-reveal/Fade';
import '../index.css';

const Container = styled.div`
  display: flex;
  padding-left: 1rem;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  color: white;
  height: 100vh; /* if you don't want it to take up the full screen, reduce this number */
  overflow: hidden;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover !important;
  background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.1) 100%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url('https://img.freepik.com/free-photo/top-view-circular-food-frame_23-2148723455.jpg?t=st=1654402834~exp=1654403434~hmac=49b7187550828ad5e39c7014f77b00bc342e43fdf6a59f686d4294eb183ce892&w=1060')
      no-repeat center center scroll;
`;

const Title = styled.h1`
  font-size: 5rem;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-family: 'Tiro Gurmukhi', serif;
  color: white;
  @media (max-width: 768px) {
    font-size: 2rem;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  @media (max-width: 900px) {
    font-size: 1.8rem;
  }
`;

const Desc = styled.p`
  width: 50vw;
  line-height: 1.6;
  @media (max-width: 768px) {
    font-size: 0.8rem;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  @media (max-width: 900px) {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  border-radius: 20px;
  background: rgb(209, 214, 141);
  color: white;
  padding: 15px;
  width: 20vw;
  border-style: none;
  cursor: pointer;
  &:hover {
    background: rgba(83, 84, 72);
  }
  @media (max-width: 768px) {
    font-size: 2rem;
    width: 50vw;
    font-size: 1rem;
    margin-left: 100px;
    margin-top: 2rem;
  }
  @media (max-width: 900px) {
    width: 50vw;
  }
`;

const Home = () => {
  return (
    <>
      <Container>
        <Fade Bottom>
          <Title>RENDANG Hj.Aniar</Title>
          <Desc>
            Ternyata kelezatan rendang nggak hanya terkenal di Indonesia saja.
            Menurut survei dari CNN Internasional pada 2011, rendang menduduki
            peringkat pertama dalam World’s 50 Delicious Food
          </Desc>
          <Button>About Us</Button>
        </Fade>
      </Container>
      <Fade Bottom>
        <Detail />
      </Fade>
      <Fade Bottom>
        <Gordon />
      </Fade>
      <Fade Bottom>
        <About />
      </Fade>
      <Fade Bottom>
        <FindMe />
      </Fade>
      <Fade Bottom>
        <Testimoni />
      </Fade>
      <Fade Bottom>
        <Contact />
      </Fade>
      <Fade Bottom>
        <Footer />
      </Fade>
    </>
  );
};

export default Home;
