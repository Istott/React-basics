import React, {useEffect, useState} from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [pod, setPod] = useState({
    title: 'hello',
    date: '',
    image: '',
    explanation: ''
  })

  useEffect(() => {
    const nasaPOD = () => {
      axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        console.log(res.data)
        setPod({
          title: res.data.title,
          date: res.data.date,
          image: res.data.url,
          explanation: res.data.explanation
        })
      })

      .catch(err => {
        console.log('error', err)
      })
    }

    nasaPOD()

  }, [])


  console.log('This is my pod slice of state:', pod)

  return (
    <div className="App">
      <h1>{pod.title}</h1>
      <h2>{pod.date}</h2>
      <div><img src={pod.image} height='500vh' alt='nasa pic of the day' /></div>
      <p>{pod.explanation}</p>
    </div>
  );
}

export default App;
