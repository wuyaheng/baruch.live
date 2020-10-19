import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

class Home extends Component {
    render() {
        return (
            <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ml-auto">
                <Link to="/" class="nav-link">Home <span class="sr-only">(current)</span></Link>
                <Link to="/about" class="nav-link">About</Link>
                </div>
            </div>
            </nav>

                <div className="container">
                    <div className="row mt-4 pt-4">
                        <div className="col-md-6 text-center" id="landing-text">
                            <h1>Baruch.Live</h1>
                            <h6>We provide a full view of all the current and upcoming events held at Baruch and open to Baruch students</h6>
                            
                            <Link to="/calendar" type="button" id="calenderBtn" className="btn btn-outline-dark mt-4">View Calendar</Link>
                        </div>
                        <div className="col-md-6 text-center">
                            <img alt="calendar" width="80%" src="https://cdn.glitch.com/8c639e73-4683-4cc1-b093-ef7b7328e9e5%2Fimage-vector.svg?v=1603053176910"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
 }
 export default Home; 