import React from 'react';
import { useGetPokemonByNameQuery } from '@/services/pokemon';

const PokemonInfo = ({ name }: { name: string }) => {
  const { data, error, isLoading } = useGetPokemonByNameQuery(name);

  return (
    <div>
      {error || isLoading ? (
        'something wrong'
      ) : (
        <>
          <div>{data ? data.species.name : 'hi'}</div>
          <img
            src={data ? data.sprites.front_shiny : ''}
            alt={data ? data.species.name : 'hi'}
          />
        </>
      )}
    </div>
  );
};

export default PokemonInfo;
