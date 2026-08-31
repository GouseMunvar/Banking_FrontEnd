
import './App.css';
import Login from './pages/login';
import Register from './pages/register';
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import OuterLayout from './components/outerLayout';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/' element={<OuterLayout/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
