import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import SearchForm from './SearchForm'
import styled from 'styled-components'

const CardWrapper = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

export default function CharacterList() {

  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  const searchCharacter = event => {
    event.preventDefault();
    setSearch(event.target.value);
    console.log('search', search)
  }

  const searchURL = `https://rickandmortyapi.com/api/character/?name=${search}`
  console.log('searchURL',searchURL)
  

  useEffect(() => {
    axios
      .get(searchURL)
      // .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.error('Server Error', error);
      });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [searchURL]);

  return (
    <>
    <SearchForm characters={characters} searchCharacter={searchCharacter} />

    <CardWrapper className="character-list">
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </CardWrapper>
    </>
  );
}
