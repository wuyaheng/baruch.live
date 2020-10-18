import React, { Component } from 'react';
import '../../App.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="navbar-fixed">
                    <nav className="nav-wrapper">
                    <div className="container">
                        <a href="#" className="sidenav-trigger" data-target="mobile-links">
                            <i className="material-icons" style={{color: "#212529"}}>menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="/">Home</a></li> 
                            <li><a href="/">About</a></li> 
                        </ul>
                    </div>
                </nav>
                </div>
                <ul className="sidenav" id="mobile-links"> 
                    <li><a href="/">Home</a></li> 
                    <li><a href="/">About</a></li> 
                </ul>

                <div className="container">
                    <div className="row mt-4 pt-4">
                        <div className="col-md-6 text-center" id="landing-text">
                            <h1>Baruch.Live</h1>
                            <h6>We provides a full view of all the current and upcoming events held at Baruch and open to Baruch students</h6>

                            <button type="button" className="btn btn-outline-dark mt-4">View Calendar</button>
                        </div>
                        <div className="col-md-6 text-center">
                            <img width="80%" src="https://cdn.glitch.com/8c639e73-4683-4cc1-b093-ef7b7328e9e5%2Fimage-vector.svg?v=1603053176910"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
 }
 export default Home; 