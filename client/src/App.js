import React from "react";
import "./App.css";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import Calendar from "./pages/Calendar/Calendar";
import About from "./pages/About/About";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [state, setState] = React.useState({
    user: false,
  });

  const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        component={state.user ? Component : () => <Redirect to="/login" />}
      />
    );
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/login"
          component={(props) => (
            <Login
              {...props}
              setUser={(user) => setState({ ...state, user })}
            />
          )}
        />
        <Route exact path="/register" component={Register} />
        <Route exact path="/about" component={About} />
        <ProtectedRoute exact path="/calendar" component={Calendar} />
      </BrowserRouter>
    </div>
  );
}

export default App;
