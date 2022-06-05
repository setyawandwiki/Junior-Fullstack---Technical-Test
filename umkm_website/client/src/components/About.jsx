import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background: #eff3f7;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;
const Image = styled.img`
  width: 40%;
  height: auto;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 400;
  font-family: 'Tiro Gurmukhi', serif;
  line-height: 1.2;
`;

const Desc = styled.p`
  text-align: center;
  margin: 0 6rem;
  padding: 2rem 0;
`;

const About = () => {
  return (
    <Container id="history">
      <Image src="rendang.png" />
      <Title>Rendang Hj Aniar</Title>
      <Desc>
        Rendang Hj Aniar sudah berdiri sejak 1945. rendang tersebut sangat
        terkenal di kota padang, sumatera barat. varian yang diberikan dari
        rendang Hj.Aniar ini sangat banyak, diantaranya ada rendang dengan wahyu
        A5 sampai rendang yang reguler. harga yang diberikan oleh Hj.Aniar dalam
        penjualannya terbilang affordable (mencukupi) karena rendang ini ada
        yang terbialng murah, bahkan yang mahal sekali dikarenakan jenis daging
        dan cara pengolahannya. Dan yang pasti bumub yang digunakan menggunakan
        produk lokal, tapi dengan rasa yang PAS dengan cita rasa global. Prinsip
        dalam penjualan rendang tersebut, Hj.Aniar memiliki prinsip sebagai
        usaha rumah.
      </Desc>
    </Container>
  );
};

export default About;
