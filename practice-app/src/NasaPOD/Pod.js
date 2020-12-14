import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Pod() {
  const [pod, setPod] = useState({
    title: '',
    date: '',
    image: '',
    explanation: ''
  })

  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)

  useEffect(() => {
    nasaPOD()
  }, [])

  const nasaPOD = () => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      // console.log(res)
      setPod({
        title: res.data.title,
        date: res.data.date,
        image: res.data.url,
        explanation: res.data.explanation
      })        
    })
  }

  const liked = () => {
    setLikes(prevLikes => prevLikes + 1)
  }


  return (
    <div className="App">
      <h1>{pod.title}</h1>
      <h2>{pod.date}</h2>
      <div><img src={pod.image} height='500vh' alt='nasa pic of the day' /></div>
      <p>{pod.explanation}</p>

        <span><div>{likes}</div></span><button onClick={liked}>👍</button>

        <div>{dislikes}</div>
        <button onClick={() => {
          setDislikes(prevDislikes => prevDislikes + 1)
        }}>👎</button>

    </div>
  );
}

export default Pod;