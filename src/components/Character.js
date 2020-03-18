import React, { useState, useEffect } from "react";
import "./CharacterCard.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CharacterCard(props) {
  const cardMatch = props.match;
  const [character, setCharacter] = useState({});
  console.log("match", cardMatch);

  useEffect(() => {
    const id = cardMatch.params.id;
    console.log("id: ", id);
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/${id}`
      )
      .then(response => {
        setCharacter(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // const { name, id } = props;
  console.log("CharacterCard props: ", character);
  return <div className="character-card">{<h3>{character.name}</h3>}</div>;
}
