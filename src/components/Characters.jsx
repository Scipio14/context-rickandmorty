//Deps
import { useContext } from "react";
//Context
import { CharactersContext } from "../context/charactersContext";
import { Pagination } from "./Pagination";

export const Characters = () => {
  const { characters } = useContext(CharactersContext);
  // console.log(characters);
  return (
    <div className="row">
      <Pagination />
      {characters.map((character, index) => {
        return (
          <div className="col-3 mt-3" key={character.name + index}>
            <div className="card">
              <img
                src={character.image}
                className="card-img-top"
                alt={character.name}
              />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">
                  <b>Status: {character.status}</b>
                  <br />
                  <b>Species: {character.species}</b>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
