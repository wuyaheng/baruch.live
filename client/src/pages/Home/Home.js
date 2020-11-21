import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

class Home extends Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
            <Link to="/" className="navbar-brand mb-0" style={{fontFamily: "'Niconne', cursive", fontSize: "2rem", fontWeight: "bolder"}}>Baruch.live</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                <Link to="/login" className="nav-link">Login<span className="sr-only">(current)</span></Link>
                <Link to="/about" className="nav-link">About</Link>
                </div>
            </div>
            </nav>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <img alt="calendar" id="calendar" width="80%" src="https://cdn.glitch.com/8c639e73-4683-4cc1-b093-ef7b7328e9e5%2Fimage-vector.svg?v=1603053176910"/>
                        </div>
                        <div className="col-md-6 text-center" id="landing-text">
                            <h5>Hi, I'm A Full-view Calendar <br/>for Baruch Faculties and Students</h5>
                            
                            <Link to="/calendar" type="button" id="calenderBtn" className="btn btn-outline-dark mt-4">View Calendar</Link>
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
 }
 export default Home; 