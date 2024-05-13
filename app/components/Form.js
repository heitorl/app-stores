"use client"

import React, { useState } from "react";

const Form = ({ handleSearch }) => {
  const [city, setCity] = useState("");
  const [neighborhood, setNeighborhood] = useState("");

  const handleClick = () => {
    
    handleSearch(city, neighborhood);
  };

  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Cidade"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-2 m-2 border rounded"
      />
      <input
        type="text"
        placeholder="Bairro"
        value={neighborhood}
        onChange={(e) => setNeighborhood(e.target.value)}
        className="p-2 m-2 border rounded"
      />
      <button onClick={handleClick} className="p-2 m-2 bg-blue-500 text-white rounded">
        Buscar
      </button>
    </div>
  );
};

export default Form