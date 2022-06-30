import users from '../../users/ForTable.json';
import UsersTable from '../Table/UsersTable';

function App() {
  return (
    <div>
      <UsersTable users={users}/>
    </div>
  );
}

export default App;
