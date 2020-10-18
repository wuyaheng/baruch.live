import React from 'react'; 
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Calendar from "./pages/Calendar/Calendar";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route path='/calendar' component={Calendar} />
    </BrowserRouter>
    </div>
  );
}

export default App;