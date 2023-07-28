import "./Home.css";
import { getPokemons } from "../../Common/Services/apiCalls";
import { useEffect, useState } from "react";
import { Carta } from "../../Common/componentes/Carta/Carta";

interface PokemonData {
  name: string;
  id: string;
}

const Home = () => {
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);

  useEffect(() => {
    const traerPokemons = async () => {
      try {
        const data = await getPokemons();
        setPokemons(data);
        console.log("pokemoness:", data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    traerPokemons();
  }, []);

  return (
    <div className="card-section">
      {pokemons.map((pokemon: PokemonData) => (
        <Carta key={pokemon.id} name={pokemon.name} />
      ))}
    </div>
  );
};

export default Home;
