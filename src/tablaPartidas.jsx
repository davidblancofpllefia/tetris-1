import React, { useState } from 'react';

const TablaPartidas = () => {
  const [partidas, setPartidas] = useState([
    { id: 1, nombre: 'Partida 1', puntaje: 100 },
    { id: 2, nombre: 'Partida 2', puntaje: 200 },
    { id: 3, nombre: 'Partida 3', puntaje: 150 },
  ]);

  const [ordenAscendente, setOrdenAscendente] = useState(true);

  const ordenarPorColumna = (columna) => {
    const partidasOrdenadas = [...partidas].sort((a, b) =>
      a[columna] === b[columna] ? 0 : (a[columna] < b[columna] ? -1 : 1) * (ordenAscendente ? 1 : -1)
    );
    setPartidas(partidasOrdenadas);
    setOrdenAscendente(!ordenAscendente)
  };

  const agregarPartida = (nuevaPartida) => {
    setPartidas([...partidas, nuevaPartida]);
  };

  return (
    <div>
      <button onClick={() => 
          agregarPartida({
            id: partidas.length + 1,
            nombre: `Partida ${partidas.length + 1}`,
            puntaje: Math.floor(Math.random() * 200),
          })
        }
      >
        Agregar Partida
      </button>

      <button onClick={() => ordenarPorColumna('puntaje')}>
        Ordenar por Puntaje ({ordenAscendente ? 'Ascendente' : 'Descendente'})
      </button>

      <ul>
        {partidas.map((partida) => (
          <li key={partida.id}>
            {partida.nombre} - {partida.puntaje}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TablaPartidas
