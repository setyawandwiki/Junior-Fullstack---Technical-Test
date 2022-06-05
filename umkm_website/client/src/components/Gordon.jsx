import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 41vh;
  display: flex;
  margin-top: 8rem;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Wrapper = styled.div`
  background: green;
  background: linear-gradient(45deg, transparent, green, transparent);
  border-radius: 2rem;
  margin-right: 4rem;
  height: 50vh;
  @media (max-width: 768px) {
    display: none;
  }
  flex: 1;
  @media (max-width: 900px) {
    display: none;
  }
`;
const GordonImage = styled.img`
  border-radius: 2rem;
  overflow: hidden;
  width: 100%;
  transform: rotate(10deg);
  transition: all 400ms ease;
  &:hover {
    transform: rotate(0deg);
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Desc = styled.div`
  margin: 0 2rem;
  flex: 1;
`;
const Description = styled.p`
  @media (max-width: 768px) {
    font-size: 0.8rem;
    text-align: center;
  }
`;
const Title = styled.h1`
  font-size: 50px;
  font-weight: 400;
  font-family: 'Tiro Gurmukhi', serif;
  line-height: 1.2;
  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const Gordon = () => {
  return (
    <Container>
      <Desc>
        <Title>Gordon Ramsay Memasak rendang resep Hj.Aniar</Title>
        <Description>
          Dalam program Gordon Ramsay: Uncharted Season 2 episode Sumatra's
          Stunning Highlands di Sumatera Barat, Ramsay ditantang William untuk
          memasak rendang versi Ramsay sendiri. Sementara Hj.Aniar memasak versi
          tradisional. Tak tanggung-tanggung, juri yang diajukan oleh William
          untuk menilai rendang mereka berdua adalah Gubernur Sumater Barat,
          Irwan Prayitno.
        </Description>
      </Desc>
      <Wrapper>
        <GordonImage src="./Gordon.jpg" />
      </Wrapper>
    </Container>
  );
};

export default Gordon;
