import React, { Component } from 'react'

// importing stylesheet 
import './style.css';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">Link Shortner</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">Help</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">Link Info</a>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
