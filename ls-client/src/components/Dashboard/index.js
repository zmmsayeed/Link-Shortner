import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';

// importing components
import Navbar from '../Navbar';

// importing reducer
import LinkShortnerReducer from '../../reducer/LinkShortnerReducer';

// importing redux actions
import { callApi } from '../../actions';

// importing icons
import { FaArrowRight } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

// importing stylesheet 
import './style.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customDomain: false
        }
    }

    handleSubmit = (values) => {
        console.log("Values: ", values)
    }

    validate = (values) => {
        const errors = {};
        if (!values.link) {
            errors.link = "Long URL is required!"
        }

        return errors
    }

    customDomain = () => {
        this.setState({
            customDomain: true
        })
    }

    closeCustomDomain = () => {
        this.setState({
            customDomain: false
        })
    }

    render() {
        return (
            <div className="mainContainer">
                <Navbar />

                <div className="innerContainer p-5 h-100 mx-auto mt-5">
                    <h1 className="text-center font-weight-bold">SHORTENING YOUR URL?</h1>
                    <h4 className="text-center mb-5">Sure, we will do that at a mouse click!</h4>
                    <Form onSubmit={this.handleSubmit}
                        validate={this.validate}
                        render={({ handleSubmit, submitting, valid, pristine }) => (
                            <form onSubmit={handleSubmit} >
                                <div className="row">
                                    <div className={this.state.customDomain?"col-md-12":"col-md-11"}>
                                        <Field name="link" placeholder="http://enter-long-url-here.com">
                                            {({ input, meta, placeholder }) => {
                                                let error = false;
                                                if (meta.error && meta.visited && !meta.active) {
                                                    error = true;
                                                }
                                                else {
                                                    error = false;
                                                }
                                                return (
                                                    <div className="form-group">
                                                        <input {...input} type="text" placeholder={placeholder} className={error ? "form-control is-invalid" : "form-control"} />
                                                        <small className={error ? "form-text text-danger" : "hidden"}>{meta.error}</small>
                                                    </div>
                                                )
                                            }}
                                        </Field>
                                    </div>
                                    <div className={this.state.customDomain?"hidden":"col-md-1"}>
                                        <button type="submit" className="btn btn-info mb-5 generateButton" disabled={submitting || !valid || pristine}>
                                            <FaArrowRight />
                                        </button>
                                    </div>
                                </div>

                                <p className={this.state.customDomain ? "hidden" : "text-center p-3 font-weight-bold text-light link"} onClick={this.customDomain}>
                                    Enter Custom Domain
                                </p>

                                <div className={this.state.customDomain ? "mt-3" : "hidden"}>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <Field name="token" placeholder="Enter Custom Token (Optional):">
                                                {({ input, meta, placeholder }) => {
                                                    return (

                                                        <div className="form-group mb-5">
                                                            <div className="input-group">
                                                                <div className="input-group-prepend">
                                                                    <div className="input-group-text font-weight-bold">http://someshorturl.com/</div>
                                                                </div>
                                                                <input {...input} type="text" className="form-control" placeholder="customToken" />
                                                            </div>
                                                        </div>
                                                    )
                                                }}
                                            </Field>
                                        </div>
                                        <div className="col-md-12 text-center">
                                            <button className="btn btn-danger mb-5 generateButton mr-4" onClick={ this.closeCustomDomain }>
                                                <MdClose />
                                            </button>
                                            <button type="submit" className="btn btn-info mb-5 generateButton" disabled={submitting || !valid || pristine}>
                                                <FaArrowRight />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-center text-danger p-2"><b>NOTE: </b> Link generated will be valid only for 7 days.</p>
                            </form>
                        )}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state
    };
}

const mapDispatchToProps = dispatch => {
    return {
        propsToCallApi: (data) => {
            return dispatch(callApi(data)) // this function will come from action file
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);