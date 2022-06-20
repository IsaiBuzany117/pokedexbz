import React from 'react'

const TypesTags = ({types}) => {

  const typesClasses = {
    normal: "bg-slate-500 text-slate-800",
    fighting: "bg-orange-500 text-orange-800",
    flying: "bg-cyan-500 text-cyan-800",
    poison: "bg-fuchsia-500 text-fuchsia-800",
    ground: "bg-amber-500 text-amber-800",
    rock: "bg-stone-500 text-stone-800",
    bug: "bg-emerald-500 text-emerald-800",
    ghost: "bg-violet-500 text-violet-800",
    steel: "bg-zinc-500 text-zinc-800",
    fire: "bg-red-500 text-red-800",
    water: "bg-sky-500 text-sky-800",
    grass: "bg-lime-500 text-lime-800",
    electric: "bg-yellow-500 text-yellow-800",
    psychic: "bg-pink-500 text-pink-800",
    ice: "bg-blue-500 text-blue-800",
    dragon: "bg-dragon-600 text-dragon-0",
    dark: "bg-dark-0 text-dark-800",
    fairy: "bg-fairy-400 text-fairy-0",
  };
  return (
    <div className='flex justify-center'>
      {types.map((item) => (
        <span
          key={item.type.name}
          className={`${
            typesClasses[item.type.name]
          } text-sm font-semibold m-1.5 px-2.5 py-0.5 rounded-full`}
        >
          {item.type.name}
        </span>
      ))}
    </div>
  );
}

export default TypesTags;