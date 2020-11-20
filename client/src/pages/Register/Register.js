import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Register = () => {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = ({ target: [name, value] }) =>
    setState({ ...state, [name]: value });

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });

      if (response.status !== 200) throw new Error("Error");

      response = await response.json();

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link
          to="/"
          className="navbar-brand mb-0"
          style={{
            fontFamily: "'Niconne', cursive",
            fontSize: "2rem",
            fontWeight: "bolder",
          }}
        >
          Baruch.live
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <Link to="/login" className="nav-link">
              Login<span className="sr-only">(current)</span>
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-md-8 text-center">
            <img
              alt="calendar"
              width="60%"
              src="https://cdn.glitch.com/8c639e73-4683-4cc1-b093-ef7b7328e9e5%2Fimage-vector.svg?v=1603053176910"
            />
          </div>
          <div className="col-md-4 text-center" id="landing-text">
            <div className="form-container">
              <h1 className="text-center mb-4 pb-3">Register Now</h1>
              <form onSubmit={submitForm}>
                <div className="form-group">
                  {/* <label htmlFor="name">Name</label> */}
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    className="form-control"
                    required
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group">
                  {/* <label htmlFor="email">Email Address</label> */}
                  <input
                    type="email"
                    onChange={handleChange}
                    name="email"
                    className="form-control"
                    required
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group">
                  {/* <label htmlFor="password">Password</label> */}
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    onChange={handleChange}
                    required
                    minLength="6"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="form-group">
                  {/* <label htmlFor="password2">Confirm Password</label> */}
                  <input
                    type="password"
                    name="password2"
                    className="form-control"
                    required
                    minLength="6"
                    placeholder="Confirm your password"
                  />
                </div>
                <input
                  type="submit"
                  value="Sign me up!"
                  className="btn btn-primary btn-block"
                />
                <p className="float-right mt-1">
                  Already Registered. <Link to="/login">Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
