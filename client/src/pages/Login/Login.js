import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Login = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  
  const { email, password } = user; 
  
  const handleChange = e => setUser ({...user, [e.target.name]: e.target.value });

  const submitForm = async (e) => {
    e.preventDefault();
    try {
    } catch (error) {
      console.log(error.message);
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
            color: "#fff"
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

      <div className="container-fluid p-0 m-0">
        <div className="row p-0 m-0">

          <div className="col-md-5 m-0 p-0 text-center" id="landing-text">
            <div className="form-container">
              <h1 className="text-center mb-4 pb-3">Login</h1>
              <form onSubmit={submitForm}>
                <div className="form-group">
                  <label for="exampleInputEmail1" className="float-left">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1" className="float-left">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    className="form-control"
                    id="exampleInputPassword1"
                    onChange={handleChange}
                  />
                </div>
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary btn-block"
                />
                <p className="float-right mt-1">
                  Don't have an account?{" "}
                  <Link to="/register">Register Now</Link>
                </p>
              </form>
            </div>
          </div>

          <div className="col-md-7 m-0 p-0 text-center">
            <img
              alt="calendar"
              id="calendar"
              width="100%"
              src="https://cdn.glitch.com/79b975e7-f2dd-49c9-bdbc-ead9636766ae%2Fcal_bgIMG.png?v=1606100608924"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
