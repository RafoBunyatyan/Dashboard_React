import './App.css';
import Dashboard from './Components/Dashborad/Dashboard';
import EmployeeContextProvider from '../src/Components/EmployeeContext/EmployeeContext';

function App() {
  return (
    <>
			<EmployeeContextProvider>
				<Dashboard />
			</EmployeeContextProvider>
	</>
  );
}

export default App;