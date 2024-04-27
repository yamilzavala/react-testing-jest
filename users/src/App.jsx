import './App.css';
import { useState } from 'react';
import { UserForm, UserList } from './components';


function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers([...users, user])
  }

  return (
    <div>
      <UserForm onUserAdd={onUserAdd}/>
      <hr />
      <UserList users={users}/>
    </div>
  );
}

export default App;
