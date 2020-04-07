import React, { Component } from 'react'

// importing stylesheet 
import './style.css';

class Navbar extends Component {

    void = () => {
        return null;
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href={this.void}>Link Shortner</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href={this.void}>Home <span className="sr-only">(current)</span></a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href={this.void}>About</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href={this.void}>Help</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href={this.void}>Link Info</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
