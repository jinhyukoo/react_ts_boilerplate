import defaultApi from './utils';

export const pokemonApi = defaultApi.injectEndpoints({
  endpoints: (build) => ({
    getPokemonByName: build.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;
