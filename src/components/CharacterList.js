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
  const [filterTerm, setFilterTerm] = useState("");

  const searchCharacter = event => {
    event.preventDefault();
    setSearch(event.target.value);
    console.log('search', search)
  }

  const searchURL = `https://rickandmortyapi.com/api/character/?name=${search}`
  console.log('searchURL',searchURL)
  
  const filterCharacter = event => {
    event.preventDefault();
    setFilterTerm(event.target.value);
  }
  const filteredArray =  characters.filter(character => {
    return character.name === filterTerm;
  });

console.log('filteredArray', filteredArray)

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

  if (filteredArray.length === 0) {
    return (
      <>
      <SearchForm characters={characters} searchCharacter={searchCharacter} filterCharacter={filterCharacter}/>
  
  
      <CardWrapper className="character-list">
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </CardWrapper>
      </>
      )
  }

  if (filteredArray) {
    return (
      <>
      <SearchForm characters={characters} searchCharacter={searchCharacter} filterCharacter={filterCharacter}/>

      <CardWrapper className="character-list">
        {filteredArray.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </CardWrapper>
      </>
    );
  }
}
