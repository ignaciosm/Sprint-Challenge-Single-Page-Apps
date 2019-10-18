import React from "react";

export default function SearchForm(props) {
  return (
    <section className="search-form">
           {/* <form action=""> */}
           <input
            type="text"
            placeholder="Search"
            onChange={props.searchCharacter}
          />
        {/* <button type='submit'>Search now</button> */}
      {/* </form> */}
    </section>
  );
}
