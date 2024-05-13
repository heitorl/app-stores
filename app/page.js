"use client"

import { useState } from "react";
import axios from "axios";
import Form from "./components/Form";
import MostrarLojas from "./components/MostrarLojas";


export default function Home() { 

  const [lojas, setLojas] = useState([]);

  const handleSearch = async (city, neighborhood) => {
    try {
      const response = await axios.get("https://stores-server.onrender.com/lojas", {
        params: {
          cidade: city,
          bairro: neighborhood,
        },
      });

      setLojas(response.data.lojas);
    } catch (error) {
      console.error("Ocorreu um erro ao buscar as lojas:", error);
    }
  };

  return (
    <div className="w-full h-screen bg-zinc-100 flex flex-col items-center py-4">

      <div>
        <Form handleSearch={handleSearch} />

      </div>
      <div className="flex w-full justify-center">
        <MostrarLojas lojas={lojas} />
      </div>
    </div>
  );
}