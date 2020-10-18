import React, { Component } from 'react';
import '../../App.css';

class Home extends Component {
    render() {
        return (
            <div>
            <div class="alert alert-primary" role="alert">
               <h4 className="text-center">Baruch.Live</h4>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center" id="landing-text">
                            <h1>Baruch.Live</h1>
                            <h6>We provides a full view of all the current and upcoming events held at Baruch and open to Baruch students</h6>

                            <button type="button" class="btn btn-outline-dark mt-4">View Calendar</button>
                        </div>
                        <div className="col-md-6">
                            <img src="https://cdn.glitch.com/8c639e73-4683-4cc1-b093-ef7b7328e9e5%2Fimage-vector.svg?v=1603053176910"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
 }
 export default Home; 