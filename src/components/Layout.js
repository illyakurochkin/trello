import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
  background-color: #61dafb;
  padding-top: calc((100vh - 600px) / 2 - 60px);
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  width: 900px;
  height: 600px;
  margin: auto;
  padding: 30px;
  background-color: white;
`;

export const Layout = ({children}) => (
  <Container>
    <Content>
      {children}
    </Content>
  </Container>
)
