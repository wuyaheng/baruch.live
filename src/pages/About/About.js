import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Team from '../../components/Team/Team';
import '../../App.css';

class About extends Component {
    render() {
        return (
            <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <span class="navbar-brand mb-0" style={{fontFamily: "'Niconne', cursive", fontSize: "2rem", fontWeight: "bolder"}}>Baruch.live</span>
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