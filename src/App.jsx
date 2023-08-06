import { useMemo } from 'react';
import { useCallback } from 'react';
import {useEffect, useState } from 'react';

//let contador = 0;

function App() {
  const [count, setCount] = useState(0);
  const users = useMemo(() => [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Peter' },
  ], []);  

  const userMap = useMemo(() => {
    return users.map((user) => {
      console.log("rendering user");
      return (
        <div key={user.id}>
          <p>{user.id}</p>
          <p>{user.name}</p>
        </div>
      )
    })
}, [users]);



  return (
    <div>
      <h1>Lista</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setUsers([...users, { id: 4, name: 'New User' }])}>Add User</button>
      <div>
        {userMap}
      </div>
    </div>
  )
};

export default App
