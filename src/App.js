import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';


function App() {
  const [role, setRole] = useState('developer');
  const showEmployees = true;
  return (
    <div className="App">
        {showEmployees ? (
          <>
            <input type="tetx" onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}/>

            <Employee name="Jalal Udiin" role="Teacher and Researcher" />
            <Employee name="Tanzirul Islam" role={role}/>
            
          </>
        ) : (
          <p>You don't have the access to the Employee</p>

        )}

    </div>
  );
}

export default App;
