import { useState } from "react";
import { SiPokemon } from "react-icons/si";
import { CgPokemon } from "react-icons/cg";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { RiHeartLine } from "react-icons/ri";
import PokeList from "./components/PokeList";
import PokeItem from "./components/PokeItem";
import Loader from "./components/Loader";

function App() {
  const [pokeData, setPokeData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPokeData = async () => {
    setIsLoading(true);
    await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=898")
      .then((res) => res.json())
      .then((data) => {
        setPokeData(data.results);
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      });
  };

  return (
    <div className="h-screen">
      <header className="flex justify-center h-48">
        <SiPokemon className="w-64 h-64 text-rose-500" />
      </header>
      <div className="flex justify-center">
        <button
          className="text-center text-slate-50 text-xl bg-rose-600 w-96 m-4 px-4 py-2 rounded-full transition ease-in-out hover:-translate-y-0.5 hover:bg-rose-700"
          onClick={getPokeData}
        >
          See Pokemon <CgPokemon className="inline-flex" />
        </button>
      </div>
      {isLoading ? (
        <div className="flex justify-center">
          <Loader />
        </div>
      ) : (
        <PokeList>
          {pokeData.map((pokemon, i) => (
            <PokeItem url={pokemon.url} key={i} />
          ))}
        </PokeList>
      )}
      <footer className="flex justify-center mt-4">
        <div className=" grid grid-rows-3 justify-items-center w-10/12 border-t-2">
          <p className="py-2">
            Hecho por <span className="font-semibold">Isai Buzany.</span>{" "}
            <i>isaibuzany117@gmail.com</i>
          </p>
          <div className="flex">
            <a href="https://github.com/IsaiBuzany117">
              <BsGithub className="w-14 h-14 mx-3 transition hover:scale-105" />
            </a>
            <a href="https://www.instagram.com/isai_buzany117/">
              <BsInstagram className="w-14 h-14 mx-3 transition hover:scale-105" />
            </a>
          </div>
          <p className="py-4 font-light text-slate-900/30">
            No es mucho pero es trabajo honesto{" "}
            <RiHeartLine className="inline-flex" />
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
