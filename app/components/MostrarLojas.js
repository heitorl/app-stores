const MostrarLojas = ({ lojas }) => {
    console.log(lojas)

    return (
      <div className="w-[80%] bg-zinc-100">
        <ul className="w-full flex flex-col">
          <li className="w-full flex justify-between p-2 border-b-2 border-blue-500">
            <p className="font-bold">Nome</p>
            <p className="font-bold">Telefone</p>
            <p className="font-bold">Link Google</p>
          </li>
          {lojas.length > 0 &&
            lojas.map((loja, index) => (
              <li key={index} className="w-full flex justify-between p-2 py-3 border-b">
                <div className="w-[33.3%] flex">

                <p className=" font-bold">{loja.nome}</p>
                </div>
                <div className="w-[33.3%] flex justify-center">

                <p className="text-center">{loja.telefone}</p>
                </div>
                <div className="w-[33.3%] flex justify-end">

                    <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loja.nome)}&query_place_id=${encodeURIComponent(loja.googlePlaceId)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                    >
                  Google
                </a>
                </div>
              </li>
            ))}
        </ul>
      </div>
    );
  };
  


export default MostrarLojas