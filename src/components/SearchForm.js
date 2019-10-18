import React from "react";
import styled from 'styled-components'

const Search = styled.input`
padding: 0.5rem;
margin: 0.5rem auto;
color: ${props => props.inputColor || "palevioletred"};
background: papayawhip;
border: none;
border-radius: 3px;
align-self: center;
font-size: 1.2rem;
width: 50%;
`;

const SearchContainer = styled.section`
display: flex;
`;

export default function SearchForm(props) {
  return (
    <SearchContainer className="search-form">
           {/* <form action=""> */}
           <Search
            type="text"
            placeholder="Find your favorite character"
            onChange={props.searchCharacter}
          />
        {/* <button type='submit'>Search now</button> */}
      {/* </form> */}
    </SearchContainer>
  );
}
