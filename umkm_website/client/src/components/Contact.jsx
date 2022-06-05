import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: rgb(102, 206, 197);
  text-align: center;
  padding: 2rem 0;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  font-family: 'Tiro Gurmukhi', serif;
  @media (max-width: 768px) {
    font-size: 1.8rem;
    text-align: center;
  }
`;
const Wrapper = styled.div`
  display: flex;
`;
const WrapperImage = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;
const ContactWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
`;

const List = styled.ul`
  text-align: start;
  width: 70%;
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid black;
  @media (max-width: 768px) {
    padding: 1rem;
    margin-left: 2rem;
  }
`;
const ListContact = styled.li`
  margin-top: 1rem;
  @media (max-width: 768px) {
    font-size: 0.7rem;
    text-align: start;
    padding: 0;
    margin: 0;
  }
`;

const Contact = () => {
  return (
    <Container id="hubungi">
      <Title>Hubungi Kami!</Title>
      <Wrapper>
        <WrapperImage>
          <Image src="granny.png" />
        </WrapperImage>
        <ContactWrapper>
          <Title>Rendang Hj.Aniar</Title>
          <List>
            <ListContact> Jl Saptopati No.77 Rt.004 Rw.002 </ListContact>
            <ListContact>
              Kel Bojong, Kota Bekasi, Jawa Barat 12313{' '}
            </ListContact>
            <ListContact> P : +62 12 3456 677</ListContact>
            <ListContact> F : ++62 12 3456 677 </ListContact>
            <ListContact> HP : +62 813 </ListContact>
            <ListContact> 8028 7009 Email : example@gmail.com </ListContact>
          </List>
        </ContactWrapper>
      </Wrapper>
    </Container>
  );
};

export default Contact;
