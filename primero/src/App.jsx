import { useState, useEffect } from 'react';

const API_KEY = '219e6fdf368a2ca4a7764ecf73c0ef24';

function App() {
  const [texto, setTexto] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const validar = () => {

    if (texto === '') return;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=es-ES&query=${texto}`)
      .then(response => response.json())
      .then(data => {
        if (data.results.length === 0) {
          setError('');
          setMessage('No se encontraron los datos.');
        } else {
          setMessage('Datos cargados');
          setError('');
          console.log("Datos cargados: ", data.results);
        }
      })
      .catch(() => {
        setError('Error al cargar');
        setMessage('');
      });
  };

  return (
    <div>
      <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Buscar una película"/>

      <button onClick={validar}>Buscar pelicula</button>

      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;