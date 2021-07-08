import React from "react";
import styled from 'styled-components'
// import { directive } from "@babel/types";

const Card = styled.div`
  width: 20%;
  height: 270px;
  background-color: palevioletred;
  margin: 2%;
  padding: 1%;
`;

const Image = styled.img`
  max-width: -webkit-fill-available;
`;

const Title = styled.p`
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
`;


export default function CharacterCard(props) {
  return (
  // <span>todo: character</span>;
  <Card key={props.character.id} className='card'>
    <Title>{props.character.name}</Title>
    <Image src={props.character.image}/>
  </Card>

  )
}
