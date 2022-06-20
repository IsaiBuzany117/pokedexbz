import React from "react";

const PokeList = ({ children }) => {
  return (
    <div className="flex justify-center my-2.5 py-3">
      <ul className="grid grid-cols-6 gap-2">{children}</ul>
    </div>
  );
};

export default PokeList;
