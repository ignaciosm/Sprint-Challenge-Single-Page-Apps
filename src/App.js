import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";


export default function App() {
  return (
    <main>
      <Header />
      {/* <WelcomePage /> */}
      <Route exact path="/" render={props => <WelcomePage {...props} />} />
      {/* <CharacterList /> */}
      <Route exact path="/characters/" render={props => <CharacterList {...props} />} />
    </main>
  );
}
