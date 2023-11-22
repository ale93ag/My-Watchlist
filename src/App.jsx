import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Components/Card';
import AddCardSeries from './Components/AddCardSeries';

function App() {
  const [count, setCount] = useState(0);
  const [newSerie, setNewSerie] = useState({
    title: '',
    imgUrl: '',
    description: '',
    isVisited: false,
  });
  const [serieTv, setSerieTv] = useState(() => {
    const storedData = localStorage.getItem('serieTv');
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(() => {
    if (serieTv.length === 0) {
      const apiKey = 'f3d1fd78306d8cd0d2324a569dddfd01';
      const apiEndpoint = 'https://api.themoviedb.org/3/discover/movie';
      const params = new URLSearchParams({
        api_key: apiKey,
      });

      fetch(`${apiEndpoint}?${params}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Errore nella risposta della richiesta API');
          }
          return response.json();
        })
        .then((data) => {
          const newSeries = data.results.map((movie) => ({
            id: movie.id,
            title: movie.title,
            imgUrl: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            description: movie.overview,
            isVisited: false,
          }));
          setSerieTv(newSeries);
        })
        .catch((error) => {
          console.error('Errore nella chiamata API:', error);
        });
    }
  }, [serieTv]);

  useEffect(() => {
    localStorage.setItem('serieTv', JSON.stringify(serieTv));
  }, [serieTv]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setNewSerie((prevSerie) => ({ ...prevSerie, [name]: inputValue }));
  };

  const handleClick = () => {
    setSerieTv((prevSeries) => [
      ...prevSeries,
      { ...newSerie, id: new Date().getTime() + Math.random() },
    ]);
    setNewSerie({ title: '', imgUrl: '', description: '', isVisited: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick();
  };

  const handleDelete = (id) => {
    setSerieTv((prevSeries) => prevSeries.filter((serie) => serie.id !== id));
  };

  return (
    <>
      <div className='grid grid-cols-4 gap-10'>
        {serieTv.map((serie) => (
          <Card
            key={serie.id}
            title={serie.title}
            imgUrl={serie.imgUrl}
            description={serie.description}
            isVisited={serie.isVisited}
            onDelete={() => handleDelete(serie.id)}
          />
        ))}
      </div>

      <div className='mt-4'>
        <AddCardSeries
          onSubmit={handleSubmit}
          newSerie={newSerie}
          handleInputChange={handleInputChange}
        />
      </div>
    </>
  );
}

export default App;

