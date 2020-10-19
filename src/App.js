import React from 'react'; 
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Calendar from "./pages/Calendar/Calendar";
import About from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/calendar' component={Calendar} />
    </BrowserRouter>
    </div>
  );
}

export default App;