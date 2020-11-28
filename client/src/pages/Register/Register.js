import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Register = () => {
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

const { name, email, password, password2 } = user; 

const handleChange = e => setUser ({...user, [e.target.name]: e.target.value });

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log(response);
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
        <div className="row m-0 p-0">
          <div className="col-md-5 m-0 p-0 text-center" id="landing-text">
            <div className="form-container">
              <h1 className="text-center mb-4 pb-3">Register Now</h1>
              <form onSubmit={submitForm}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    className="form-control"
                    required
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    onChange={handleChange}
                    name="email"
                    value={email}
                    className="form-control"
                    required
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    className="form-control"
                    onChange={handleChange}
                    required
                    minLength="6"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password2"
                    value={password2} 
                    className="form-control"
                    onChange={handleChange}
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
export default Register;
