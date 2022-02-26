import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    padding: 10px 10px;
    text-align: center;
    justify-content: left;  
    position: left;
    bottom: 4;
    width: 100%;
    @media (max-width: 1000px) {
        padding: 30px 30px;
    }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  max-width: 1000px;
  margin: 0 auto;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 50px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 10px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const Heading = styled.p`
  font-size: 18px;
  color: black;
  margin-bottom: 10px;
  font-weight: bold;
  text-align: left;
`;

export const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
        <Heading  > Centrip </Heading>
          <Column>
          </Column>
          
          <Column>
            <Heading>Mobile App</Heading>

          </Column>
          <Column>
            <Heading>Community</Heading>

          </Column>
          <Column>
            <Heading>Company</Heading>
            
          </Column>
          <Column>
          </Column>
          <Column>
            <Heading> Copyright</Heading>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};