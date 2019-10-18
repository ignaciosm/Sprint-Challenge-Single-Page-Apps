import React from "react";
import styled from 'styled-components'
// import { directive } from "@babel/types";

const Card = styled.div`
  width: 20%;
  height: 250px;
  background-color: palevioletred;
  margin: 2%;
  padding: 2%;
`;

const Image = styled.img`
  max-width: -webkit-fill-available;
`;



export default function CharacterCard(props) {
  return (
  // <span>todo: character</span>;
  <Card key={props.character.id} className='card'>
    <p>{props.character.name}</p>
    <Image src={props.character.image}/>
  </Card>

  )
}
