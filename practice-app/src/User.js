import React from 'react';


function User({details}) {
    if(!details) {
        return <p>Nothing here</p>
    } else {
        return (
            <div className='user'>
                <span>{details.first_name}</span>
            </div>
        )
    }

}

export default User;