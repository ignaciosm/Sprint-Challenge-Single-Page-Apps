import React from "react";
import styled from 'styled-components'

const Mainimg = styled.img`
padding: 4%;
background: aqua;
align-self: center
`;

const Header = styled.header`
// margin: 0 auto;
display: flex;
flex-direction: column;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Mainimg
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </Header>
    </section>
  );
}
