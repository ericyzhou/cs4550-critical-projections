import React from "react";
import {connect} from "react-redux";


export const LoginComponent = () => {
    return (<div className="container">
        <a href="../index.html">Cancel</a>
        <h1>Sign In</h1>
        <form>
            <div className="form-group row">
                <label htmlFor="username" className="col-sm-2 col-form-label">
                    Username </label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username"
                           id="username"
                           placeholder="Username"></input>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="password" className="col-sm-2 col-form-label">
                    Password </label>
                <div className="col-sm-10">
                    <input type="password" className="form-control wbdv-field wbdv-password"
                           id="password" placeholder="Password"></input>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-10">
                    <a href="../profile/profile.template.client.html"
                       className="btn btn-primary btn-block wbdv-button wbdv-login">Sign in</a>
                    <div className="row">
                        <div className="col-6">
                            <a href="../index.html" className="wbdv-link wbdv-forgot-password">Forgot
                                Password?</a>
                        </div>
                        <div className="col-6">
                            <a href="../register/register.template.client.html"
                               className="float-right wbdv-link wbdv-register">Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>)
}
