/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Container, InContainer } from './styles';

const ContentText: React.FC = () => (
  <Container>
    <h2>
      Crie este site <span>responsivo</span> com <span>REACT</span> utilizando
      <span> styled-components</span>
    </h2>
    <InContainer>
      <p>A fonte utilizada é a Open Sans de 300 a 800.</p>
      <p>exemplo: "Open Sans", Helvetica, sans-serif, arial;</p>
      <p>Já as cores são: </p>
      <span className="color green" />
      <span>#007f56, </span>
      <span className="color grey" />
      <span>#868686, </span>
      <span className="color coral" />
      <span>#FE9481, </span>
      <span className="color yellow" />
      <span>#FCDA92 e </span>
      <span className="color lilac" />
      <span>#9C8CB9</span>
    </InContainer>
  </Container>
);

export default ContentText;
