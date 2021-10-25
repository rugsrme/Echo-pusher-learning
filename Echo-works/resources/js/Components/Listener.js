import React, {useState, useEffect} from 'react';
    const Listen = (props) => {
      const [loggedIn, setLoggedIn] = useState(false)

      return (
      <>
        {!loggedIn ?
         <div>{user.name}</div>
        :<div>{user.name}Logged in</div>
        }
      </>
      )
    }
export default Listen
