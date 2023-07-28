import axios from "axios";

const URL = "https://pokeapi.co/api/v2/";

export const getPokemons = async () => {
  try {
    const response = await axios.get(`${URL}pokemon`, {
      params: {
        limit: 20,
      },
    });

    const results = response.data.results;
    console.log("Pokemons:", results);

    return results;
  } catch (error) {
    console.log("Error", error);
    return [];
  }
};
