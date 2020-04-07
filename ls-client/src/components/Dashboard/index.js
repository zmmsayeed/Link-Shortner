import React, { Component } from 'react'

// importing components
import Navbar from '../Navbar';

// importing stylesheet 
import './style.css';

class Dashboard extends Component {
    render() {
        return (
            <div className="mainContainer">
                <Navbar />

                <div className="innerContainer p-5 h-100 mx-auto mt-5">
                    <form>
                        <div className="form-group">
                            <label for="longUrl">Enter Long URL:</label>
                            <input type="text" className="form-control" id="longUrl" aria-describedby="linkHelp" />
                            <small id="linkHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>

                        <div className="form-group mb-5">
                            <label>Enter Custom Token (Optional):</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text font-weight-bold">http://someshorturl.com/</div>
                                </div>
                                <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="customToken" />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-info mb-5">Generate Short URL</button>

                        <p className="text-danger"><b>NOTE: </b> Link generated will be valid only for 7 days.</p>
                    </form>
                </div>
            </div>
        )
    }
}

export default Dashboard;