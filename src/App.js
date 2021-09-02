import React, { useState, useEffect } from "react"


const url = `https://api.github.com/users `;

function App() {

  const [users, setUsers] = useState([]);

  const getData = async() => {
    const response = await fetch(url);

    const users = await response.json();
    setUsers(users)
  }

  useEffect (()=> {

    getData();

  }, [])

  return (
    <div className="App">
        <h2>GitHub user data</h2>
        <ul className="users">
            {users.map((user) => {
              const {id, login, avatar_url, html_url} = user;
              return (
                <li key={id}>
                  <img src={avatar_url} alt ={login}/>
                </li>
              )
            })}
        </ul>

    </div>
  );
}

export default App;
