import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import "./CharacterList.css";
import { BrowserRouter as Route } from "react-router-dom";
import { Link } from "react-router-dom";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([]);

  const urls2 = [];
  const generateUrls = () => {
    for (let i = 2; i <= 3; i++) {
      urls2.push(
        `https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?page=${i}`
      );
    }
  };
  generateUrls();

  useEffect(() => {
    // Practice getting all the data...
    Promise.all(urls2.map(url => fetch(url)))
      .then(responses => Promise.all(responses.map(res => res.json())))
      .then(data =>
        data.map(d => setCharacters(characters => [...characters, d.results]))
      );
  }, []);

  console.log("Character new array", characters);

  return (
    <section className="character-list">
      <h2>Character List</h2>
      <div className="characters">
        {characters.map(characterArr =>
          characterArr.map(character => {
            // console.log("charactercard char", character);
            return <div>{character.name}</div>;
          })
        )}
      </div>
    </section>
  );
}
