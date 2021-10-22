import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './login/login';
import Register from './register/register';


function App() {
  return (
    <div className="App">
     <Homepage/>
     <Login/>
      <Register/> 
    </div>
  );
}

export default App;
