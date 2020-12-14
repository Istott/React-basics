import React, {useEffect, useState} from 'react';
import axios from 'axios';
import User from './User';

import './App.css';

const url = 'https://reqres.in/api/users'
// console.log('user url', url)

function App() {
  const [pod, setPod] = useState({
    title: '',
    date: '',
    image: '',
    explanation: ''
  })

  const [users, setUsers] = useState([])
  console.log('users:', users)

  const [likes, setLikes] = useState(1)
  const [dislikes, setDislikes] = useState(1)


  const getUsers = () => {
    axios
      .get(`${url}`)
      .then(response => {
        console.log(response)
        setUsers(response.data.data)
      }) 
  }

  useEffect(() => {
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

      .catch(err => {
        console.log('error', err)
      })
    }

    nasaPOD()
    getUsers()

  }, [])

  const liked = () => {
    setLikes(likes + 1)
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
          setDislikes(dislikes + 1)
        }}>👎</button>

      <div className='user-container'>
        {
          users.map(user => {
            return(
              <User key={user.id} details={user} />
            )
          })
        }
      </div>

    </div>
  );
}

export default App;
