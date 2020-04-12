import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';

// importing components
import Navbar from '../Navbar';

// importing reducer
import LinkShortnerReducer from '../../reducer/LinkShortnerReducer';

// importing redux actions
import { callApi } from '../../actions';

// importing stylesheet 
import './style.css';

class Dashboard extends Component {

    handleSubmit = (values) => {
        console.log("Values: ", values)
    }

    validate = (values) => {
        const errors = {};
        if(!values.link) {
            errors.link = "Long URL is required!"
        }

        return errors
    }

    render() {
        return (
            <div className="mainContainer">
                <Navbar />

                <div className="innerContainer p-5 h-100 mx-auto mt-5">
                    <Form onSubmit={this.handleSubmit}
                        validate={this.validate}
                        render={({ handleSubmit, submitting, valid, pristine }) => (
                            <form onSubmit={handleSubmit} >
                                <Field name="link" placeholder="Enter long URL">
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
                                                <label>Enter Long URL:</label>
                                                <input {...input} type="text" placeholder={placeholder} className={ error?"form-control is-invalid":"form-control"} />
                                                <small className={ error?"form-text text-danger":"hidden" }>{meta.error}</small>
                                            </div>
                                        )
                                    }}
                                </Field>

                                <Field name="token" placeholder="Enter Custom Token (Optional):">
                                    {({ input, meta, placeholder }) => {
                                        return (

                                            <div className="form-group mb-5">
                                                <label>{placeholder}</label>
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


                                <button type="submit" className="btn btn-info mb-5" disabled={submitting || !valid || pristine}>
                                    Generate Short URL
                                </button>

                                <p className="text-danger"><b>NOTE: </b> Link generated will be valid only for 7 days.</p>
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