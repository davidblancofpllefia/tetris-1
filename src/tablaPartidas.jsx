const [partidas, setPartidas] = useState([
    { id: 1, nombre: 'Partida 1', puntaje: 100 },
    { id: 2, nombre: 'Partida 2', puntaje: 200 },
    { id: 3, nombre: 'Partida 3', puntaje: 150 },
  ]);

  const ordenarPorColumna = (columna) => {
    const partidasOrdenadas = [...partidas].sort((partidaA, partidaB) => 
    partidaA[columna] === partidaB[columna] ? 0 : (partidaA[columna] < partidaB[columna] ? (ordenAscendente ? -1 : 1) : (ordenAscendente ? 1 : -1))
  )}

  setPartidas(partidasOrdenadas);

  const agregarPartida = (nuevaPartida) => {
    setPartidas([...partidas, nuevaPartida])
  };
  