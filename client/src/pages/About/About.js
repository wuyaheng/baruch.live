import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Team from '../../components/Team/Team';
import '../../App.css';

class About extends Component {
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

                <div className="container-fluid">
                    <div className="row mt-2 justify-content-center">
                    <h1 className="text-center mb-3 mt-3"><span style={{color: "#212529"}}>Our Team</span></h1>
                    </div>
                    <div className="row mt-2 justify-content-center"> 
                    <Team />
                    </div>
                </div>
            </div>
        );
    }
 }
 export default About; 