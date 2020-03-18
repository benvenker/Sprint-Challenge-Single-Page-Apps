import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Character from "./components/Character.js";

export default function App() {
  return (
    <main data-testid="app">
      <Header />
      <Route exact path="/" render={props => <CharacterList {...props} />} />
      <Route path="/character/:id" render={props => <Character {...props} />} />
    </main>
  );
}
