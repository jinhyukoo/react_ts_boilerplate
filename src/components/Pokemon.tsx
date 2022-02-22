import React, { useState, useRef } from 'react';
import PokemonInfo from './PokemonInfo';

const Pokemon = () => {
  const inputEl = useRef(null);
  const [pokemonName, setPokemonName] = useState('pikachu');
  const onButtonClick = () => {
    setPokemonName(inputEl.current.value);
  };

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button type="button" onClick={onButtonClick}>
        get
      </button>
      <PokemonInfo name={pokemonName} />
    </div>
  );
};

export default Pokemon;
