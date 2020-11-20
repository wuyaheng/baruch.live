import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

class Home extends Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span class="navbar-brand mb-0" style={{fontFamily: "'Niconne', cursive", fontSize: "2rem", fontWeight: "bolder"}}>Baruch.live</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                <Link to="/about" className="nav-link">About</Link>
                </div>
            </div>
            </nav>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <img alt="calendar" width="80%" src="https://cdn.glitch.com/8c639e73-4683-4cc1-b093-ef7b7328e9e5%2Fimage-vector.svg?v=1603053176910"/>
                        </div>
                        <div className="col-md-6 text-center" id="landing-text">
                            <h1>Baruch.Live</h1>
                            <h6>We provide a full view of all the current and upcoming events held at Baruch and open to Baruch students</h6>
                            
                            <Link to="/calendar" type="button" id="calenderBtn" className="btn btn-outline-dark mt-4">View Calendar</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
 }
 export default Home; 