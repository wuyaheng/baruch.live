import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

class Login extends Component {
    render() {
        return (
            <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light"> 
            <Link to="/" class="navbar-brand mb-0" style={{fontFamily: "'Niconne', cursive", fontSize: "2rem", fontWeight: "bolder"}}>Baruch.live</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ml-auto">
                <Link to="/login" class="nav-link">Login<span class="sr-only">(current)</span></Link>
                <Link to="/about" class="nav-link">About</Link> 
                </div>
            </div>
            </nav>

                <div className="container">
                <div className="row">
                        <div className="col-md-8 text-center">
                            <img alt="calendar" width="60%" src="https://cdn.glitch.com/8c639e73-4683-4cc1-b093-ef7b7328e9e5%2Fimage-vector.svg?v=1603053176910"/>
                        </div>
                        <div className="col-md-4 text-center" id="landing-text">
                        <div className='form-container'>
                            <h1 className="text-center mb-4 pb-3">
                            Login
                            </h1>
                            <form> 
                             <div className="form-group"> 
                                    <label for="exampleInputEmail1" className="float-left">Email address</label>
                                   <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                                </div>
                                <div className="form-group">
                                <label for="exampleInputPassword1" className="float-left">Password</label>
                                 <input type="password" name="password" class="form-control" id="exampleInputPassword1"/>
                                </div>
                                <input type="submit" value="Login" className="btn btn-primary btn-block" /> 
                                <p className="float-right mt-1">Don't have an account? <Link to='/register'>Register Now</Link></p> 
                            </form> 
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
 }
 export default Login;  