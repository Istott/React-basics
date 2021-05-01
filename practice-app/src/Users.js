import React from 'react';
// import axios from 'axios';
import User from './User';


// const url = 'https://reqres.in/api/users'
// console.log('user url', url)

function Users(props) {
    // console.log('props:', props)
//   const [users, setUsers] = useState([])
//   console.log('users:', users)

//   useEffect(() => {
//     getUsers()
//   }, [])

//   const getUsers = () => {
//     axios
//       .get(`${url}`)
//       .then(response => {
//         console.log(response)
//         setUsers(response.data.data)
//       }) 

//     .catch(err => {
//       console.log('error', err)
//     })
//   }


  return (
    <div className="App">
      <div className='user-container'>
        {
          props.users.map(user => {
            return(
              <User key={user.id} details={user} />
            )
          })
        }
      </div>

    </div>
  );
}

export default Users;