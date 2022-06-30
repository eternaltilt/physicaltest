import users from '../../users/ForTable.json';
import UsersTable from '../Table/UsersTable';

function App() {
console.log('users ===>', users)
  return (
    <div>
      <UsersTable users={users}/>
    </div>
  );
}

export default App;
