import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import styled from 'styled-components';

const Testimoni = () => {
  const data = [
    {
      id: 1,
      image: 'orang1.jpg',
      name: 'Dwiki Setyawan',
      review:
        'Saya belum pernah mencicipi rasa rendang selezat ini. rendang Hj.Aniar selama ini yang terbaik.',
    },
    {
      id: 2,
      name: 'Tono',
      image: 'orang2.jpg',
      review:
        'Walaupun maha, tapi saya tidak rugi ketika mencicipi rendang Hj.Aniar. menakjubkan! sampe nagih pokoknya',
    },
    {
      id: 3,
      name: 'Dedi supardi',
      image: 'orang3.jpg',
      review:
        'Tidak peduli dengan harga yang mahal, saya rela mengeluarkan uang hanya untuk makan rendang buatan Hj.Aniar',
    },
    {
      id: 4,
      name: 'Jess No Sisca',
      image: 'orang4.jpg',
      review:
        'Rendang wagyu itu udah paling enak sih, belum pernah nyoba rendang seenak ini!!! bener-bener enak banget pokoknya',
    },
  ];

  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 4rem;
    aspect-ratio: 1/1;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto 1rem;
    border: 0.4rem solid black;
  `;

  const Container = styled.div`
    padding-top: 3rem;
    width: 40%;
    padding-bottom: 4rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5rem;
  `;

  const Image = styled.img`
    width: 100%;
  `;
  const Title = styled.h5``;
  const Small = styled.small`
    color: white;
    font-weight: 300;
    display: block;
    width: 80%;
    margin: 0.8rem auto 0;
    @media (max-width: 768px) {
      font-size: 0.7rem;
      text-align: center;
    }
  `;

  const SubTitle = styled.h5`
    text-align: center;
    justify-content: center;
    font-weight: 400;
    font-size: 3rem;
    font-family: 'Tiro Gurmukhi', serif;
    @media (max-width: 768px) {
      font-size: 2rem;
      text-align: center;
    }
  `;
  const Title1 = styled.h2`
    text-align: center;
    justify-content: center;
    font-size: 3rem;
    font-weight: 400;
    font-family: 'Tiro Gurmukhi', serif;
    @media (max-width: 768px) {
      font-size: 2rem;
      text-align: center;
    }
  `;

  return (
    <div id="testimoni" style={{ background: 'rgb(102, 206, 197)' }}>
      <Container>
        <SubTitle>Review Dari Pelanggan</SubTitle>
        <hr />
        <Title1>Testimoni</Title1>
        <Swiper
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 1,
            },
          }}
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
        >
          {data.map((elem) => (
            <SwiperSlide
              key={elem.id}
              style={{
                background: 'rgb(152, 237, 139)',
                textAlign: 'center',
                padding: '2rem',
                borderRadius: '2rem',
                userSelect: 'none',
              }}
            >
              <Wrapper>
                <Image src={elem.image} alt="avatar one" />
              </Wrapper>
              <Title>{elem.name}</Title>
              <Small>{elem.review}</Small>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Testimoni;
