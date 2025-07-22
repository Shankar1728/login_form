import './App.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AllUsers from './components/AllUsers';
import Signup from './components/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/AllUsers" element={<AllUsers/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
