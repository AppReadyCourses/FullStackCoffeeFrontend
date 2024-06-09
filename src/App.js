import logo from './logo.svg';
import './App.css';
import AddCoffee from './components/AddCoffee';
import EditCoffeeDetail from './components/EditCoffeeDetail'

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Coffees from './components/Coffees';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coffees />} />
        <Route path='/addcoffee' element={<AddCoffee />} />
        <Route path="/editcoffee/:id" element={< EditCoffeeDetail/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
