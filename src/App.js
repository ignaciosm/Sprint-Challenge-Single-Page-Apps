import React from "react";
import { Route, NavLink } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";

import styled from 'styled-components'

const NavWrapper = styled.nav`
display: flex;
flex-wrap: wrap;
justify-content: center;
width: 100%;
margin: 0 auto;
background: aqua;
`;

const Ignacio = styled.div`
width: 20%;
margin: 2%;
color: blue;
text-align: center;
font-size: 2rem;
`;

export default function App() {
  return (
    <main>
      <Header />
      <NavWrapper>
        <Ignacio><NavLink to="/">Home</NavLink></Ignacio>
        <Ignacio><NavLink to="/characters">Characters</NavLink></Ignacio>
      </NavWrapper>
      <Route exact path="/" render={props => <WelcomePage {...props} />} />
      <Route exact path="/characters/" render={props => <CharacterList {...props} />} />
    </main>
  );
}
