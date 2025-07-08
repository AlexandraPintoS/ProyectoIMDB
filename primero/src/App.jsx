import { useState, useEffect } from 'react';

const API_KEY = '219e6fdf368a2ca4a7764ecf73c0ef24';

function App() {
  const [texto, setTexto] = useState('');
  const [error, setError] = useState('');

  const validar = () => {
    if (texto === '') return;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=es-ES&query=${texto}`)
      .then(response => response.json())
      .then(data => {
        if (data.results.length === 0) {
          setError('No se encontro.');
        } else {
          setError('');
        }
      })
      .catch(() => {
        setError('Error al buscar');
      });
  };
}

export default App;