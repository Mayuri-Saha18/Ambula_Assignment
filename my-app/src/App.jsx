// import logo from './logo.svg';
import './App.css';

import {Route,Routes} from "react-router"

import About from './Components/About';
import Bag from './Components/Bag';
import Cart from './Components/Cart';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Todo from './Components/Todo';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      
        <Navbar/>

        <Routes>

          <Route path="/" element={<Home/>}></Route>

          <Route path="/about" element={<About/>}></Route>
          <Route path="/todo" element={<Todo/>}></Route>

          <Route path="/bag" element={<Bag/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>

        </Routes>

    </div>
  );
}

export default App;
