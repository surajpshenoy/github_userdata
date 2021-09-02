import React, { useState, useEffect } from "react";

const url = `https://api.github.com/users `;

function App() {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const response = await fetch(url);

    const users = await response.json();
    setUsers(users);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h3>GitHub Users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
