
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { AllRoutes } from './pages/AllRoutes';
import { Navbars } from './pages/Navbars';
import { UserAuthContextProvider } from './contex/UserAuthContext';



function App() {
  
  return (
    <div className="App">
      <UserAuthContextProvider>        
        <Navbars/>
        <AllRoutes/>
        </UserAuthContextProvider>

    </div>
  );
}

export default App;
