import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import Typetags from './TypesTags'

const PokeItem = ({ url }) => {
  const [info, setInfo] = useState({});
  const [sprites, setSprites] = useState({});
  const [stats, setStats] = useState([]);
  const [types, setTypes] = useState([])
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(!open);
  };

  const getPokemonInfo = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
        setSprites(data.sprites);
        setStats(data.stats);
        setTypes(data.types)
      });
  };

  useEffect(() => {
    getPokemonInfo();
  }, []);

  return (
    <>
      <li
        className="flex flex-col justify-center w-48 sm:col-span-6 md:col-span-3 lg:col-span-1 bg-slate-200 shadow shadow-slate-500/50 rounded-3xl transition ease-out hover:animate-pulse hover:scale-95 cursor-pointer"
        onClick={openModal}
      >
        <div className="flex justify-center">
          <img
            src={sprites.front_default}
            alt={info.name}
            width={156}
            height={156}
          />
        </div>
        <h2 className="text-center text-2xl py-1 -translate-y-2">
          {info.name}
        </h2>
      </li>

      <Transition show={open} appear as={Fragment}>
        <Dialog
          as="div"
          open={open}
          onClose={openModal}
          className="relative z-50"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center ">
            <Dialog.Panel className="w-80 max-w-sm rounded-lg bg-white p-6">
              <div className="grid justify-items-end">
                <button onClick={openModal}>
                  <AiOutlineClose className="w-4 h-6 transition hover:scale-125 hover:text-rose-500" />
                </button>
              </div>
              <Dialog.Title as="h1" className="text-2xl text-center">
                {info.name} N.º{info.id}
              </Dialog.Title>
              <div className="flex justify-center">
                <img
                  src={sprites.front_default}
                  alt="sprite"
                  width={212}
                  height={212}
                />
              </div>

              <Typetags types={types} />

              <div className="flex justify-center">
                <ul>
                  {stats.map((item, i) => (
                    <li key={i} className="grid grid-cols-2">
                      <span className="m-0.5 py-0.5 pl-2 font-bold bg-slate-400 rounded-full border-2 border-slate-800">
                        {item.stat.name}:{" "}
                      </span>
                      <span className="m-0.5 py-0.5 text-center bg-slate-200 rounded-full border-2 border-slate-400">
                        {item.base_stat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default PokeItem;
