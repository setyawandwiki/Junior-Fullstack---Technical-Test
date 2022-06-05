import React from 'react';
import styled from 'styled-components';
import { LocalDining } from '@mui/icons-material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Wrapper = styled.div`
  display: flex;
`;
const Image = styled.img`
  width: 40%;
  height: auto;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;
const Desc1 = styled.div`
  padding: 4rem;
`;
const Title2 = styled.h1`
  font-size: 50px;
  font-weight: 400;
  font-family: 'Tiro Gurmukhi', serif;
  color: black;
  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const CustomIconDining = styled(LocalDining)`
  font-size: 4rem !important;
  margin-top: 1rem;
  margin-right: 1rem;
`;

const CustomAchievement = styled(EmojiEventsIcon)`
  font-size: 4rem !important;
  margin-top: 1rem;
  margin-right: 1rem;
`;

const CustomTime = styled(AccessTimeIcon)`
  font-size: 4rem !important;
  margin-top: 1rem;
  margin-right: 1rem;
`;

const List = styled.ul``;
const KhasiatList = styled.li`
  display: flex;
  margin-top: 1rem;
`;

const Article = styled.p`
  border: 1px solid black;
  padding: 0.5rem 0.5rem;
  line-height: 1.6;
  width: 70%;
`;

const Detail = () => {
  return (
    <Wrapper id="about">
      <Image src="pngwing.com.png" alt="" />
      <Desc1>
        <Title2>Tentang Makanan Rendang</Title2>
        <List>
          <KhasiatList>
            <CustomIconDining />
            <Article>
              Dibandingkan dengan makanan yang lain, daging merah yang menjadi
              bahan utama rendang memiliki kandungan L-carnitine yang paling
              tinggi.
            </Article>
          </KhasiatList>
          <KhasiatList>
            <CustomAchievement />
            <Article>
              Sebanyak 50 jenis makanan dari berbagai negara, dua makanan asal
              Indonesia masuk urutan pertama dan kedua makanan terenak di dunia
              yaitu Rendang dan Nasi Goreng.
            </Article>
          </KhasiatList>
          <KhasiatList>
            <CustomTime />
            <Article>
              Dibandingkan dengan makanan yang lain, daging merah yang menjadi
              bahan utama rendang memiliki kandungan L-carnitine yang paling
              tinggi.
            </Article>
          </KhasiatList>
        </List>
      </Desc1>
    </Wrapper>
  );
};

export default Detail;
