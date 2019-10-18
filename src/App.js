import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" render={props => <WelcomePage {...props} />} />
      <Route exact path="/characters/" render={props => <CharacterList {...props} />} />
    </main>
  );
}
