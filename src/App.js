import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/about" > About</Route>
        <Route path="/contract" > contract </Route> */}

      </Routes>

    </div>
  );
}

export default App;
