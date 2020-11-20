import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

class Register extends Component {
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
                            Register Now
                            </h1>
                            <form> 
                            <div className="form-group">
                                {/* <label htmlFor="name">Name</label> */}
                                <input type="text" name="name" class="form-control" required placeholder="Enter your name"/> 
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="email">Email Address</label> */}
                                <input type="email" name="email" class="form-control" required placeholder="Enter your email"/>
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="password">Password</label> */}
                                <input type="password" name="password" class="form-control" required minLength="6" placeholder="Enter your password"/>
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="password2">Confirm Password</label> */}
                                <input type="password" name="password2" class="form-control" required minLength="6" placeholder="Confirm your password"/>
                            </div>
                            <input type="submit" value="Sign me up!" className="btn btn-primary btn-block" />
                            <p className="float-right mt-1">Already Registered. <Link to='/login'>Login</Link></p> 
                        </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
 }
 export default Register;  