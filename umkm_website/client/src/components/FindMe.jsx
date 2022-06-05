import React from 'react';
import styled from 'styled-components';

const FindMe = () => {
  const data = [
    {
      id: 1,
      image: 'rendang1.jpg',
      title: 'Rendang Reguler',
      tokopedia:
        'https://www.tokopedia.com/rekomendasi/2567635920?ref=googleshopping&c=16956930613&m=398740419&p=2567635920&gclid=EAIaIQobChMIhMa4lIeW-AIVYplmAh1UJAGKEAQYASABEgJh0PD_BwE&gclsrc=aw.ds',
    },
    {
      id: 2,
      image: 'rendang2.jpg',
      title: 'Rendang Urang Awak Asli',
      tokopedia:
        'https://www.tokopedia.com/keifashop/rendang-daging-sapi-padang-rendang-asli-padang-1kg-rendang-termurah?txsc=google&ref=googleshopping&c=16900546076&m=543562948&p=2781793659&gclid=EAIaIQobChMIhMa4lIeW-AIVYplmAh1UJAGKEAQYAiABEgKPGvD_BwE&gclsrc=aw.ds',
    },
    {
      id: 3,
      image: 'rendang3.jpg',
      title: 'Rendang Wagyu A5',
      tokopedia:
        'https://www.tokopedia.com/rekomendasi/1746884178?ref=googleshopping&c=16956930613&m=426481461&p=1746884178&gclid=EAIaIQobChMIhMa4lIeW-AIVYplmAh1UJAGKEAQYAyABEgJAJvD_BwE&gclsrc=aw.ds',
    },
    {
      id: 4,
      image: 'rendang4.jpg',
      title: 'Rendang super kenyang',
      tokopedia:
        'https://www.tokopedia.com/keifashop/rendang-daging-sapi-padang-rendang-asli-padang-1-4-rendang-termurah?txsc=google&ref=googleshopping&c=16900546076&m=543562948&p=2781837998&gclid=EAIaIQobChMIhMa4lIeW-AIVYplmAh1UJAGKEAQYBCABEgJ20PD_BwE&gclsrc=aw.ds',
    },
  ];

  const Container = styled.section``;
  const Title = styled.h5`
    display: flex;
    justify-content: center;
    font-weight: 400;
    font-family: 'Tiro Gurmukhi', serif;
    font-size: 3rem;
    margin-top: 10rem;
    @media (max-width: 768px) {
      font-size: 1.8rem;
      text-align: center;
    }
  `;
  const Title2 = styled.h2`
    display: flex;
    justify-content: center;
    font-weight: 400;
    font-family: 'Tiro Gurmukhi', serif;
    font-size: 3rem;
    @media (max-width: 768px) {
      font-size: 2rem;
      text-align: center;
    }
  `;
  const WrapperArticle = styled.article`
    padding: 1.3rem;
    background: rgba(212, 169, 157, 0.2);
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: 1px solid transparent;
    transition: all 1000ms ease;
    margin: 1rem 2rem;
  `;
  const WrapperImg = styled.div`
    overflow: hidden;
  `;
  const WrapperPortofolio = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  `;
  const Image = styled.img`
    width: auto;
    height: 30vh;
    border-radius: 20px;
  `;
  const LinkBelanja = styled.a`
    width: max-content;
    display: inline-block;
    color: black;
    padding: 0.75rem 1.2rem;
    border-radius: 0.4rem;
    cursor: pointer;
    border: 1px solid white;
    text-decoration: none;
    transition: all 1000ms ease;
    &:hover {
      background: green;
      color: white;
    }
  `;
  const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
    @media (max-width: 900px) {
      grid-template-columns: repeat(1, 1fr);
    }
  `;

  return (
    <Container id="barang">
      <Title>Rendang Kami Tersedia</Title>
      <Title2>Silahkan Cek Jualan Online Kami</Title2>

      <Wrapper>
        {data.map((elem) => (
          <WrapperArticle>
            <WrapperImg>
              <Image src={elem.image} alt="foto makanan" />
            </WrapperImg>
            <h1>{elem.title}</h1>
            <WrapperPortofolio>
              <LinkBelanja>Tokopedia</LinkBelanja>
            </WrapperPortofolio>
          </WrapperArticle>
        ))}
      </Wrapper>
    </Container>
  );
};

export default FindMe;
