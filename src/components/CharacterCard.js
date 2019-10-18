import React from "react";
// import { directive } from "@babel/types";

export default function CharacterCard(props) {
  return (
  // <span>todo: character</span>;
  <div className='card'>
    <p>{props.character.name}</p>
  </div>

  )
}
