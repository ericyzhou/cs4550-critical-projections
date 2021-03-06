import React from "react";
import {connect} from "react-redux";


export const ProfileComponent = () => {
    return (
        <div className="container">
            <h1>Profile</h1>
            <form>
                <div className="form-group row">
                    <label htmlFor="password"
                           className="col-sm-2 col-form-label wbdv-field wbdv-password">
                        Profile Picture</label>
                    <div className="col-sm-10">
                        <img src='data:image/jpeg;base64,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'/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="username"
                           className="col-sm-2 col-form-label wbdv-field wbdv-username">
                        Username </label>
                    <div className="col-sm-10">
                        <input readOnly className="form-control wbdv-field wbdv-username"
                               id="username" placeholder="Username"></input>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password"
                           className="col-sm-2 col-form-label wbdv-field wbdv-password">
                        Password </label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-field wbdv-username"
                               id="password" placeholder="Password"></input>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="email" className="col-sm-2 col-form-label">
                        Email </label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control wbdv-field wbdv-email"
                               id="email" placeholder="name@email.com"></input>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="role" className="col-sm-2 col-form-label">
                        Role </label>
                    <div className="col-sm-10">
                        <select name="Role" className="form-control wbdv-field wbdv-role" id="role">
                            <option value="admin">Admin</option>
                            <option value="verifiedCritic">Verified Critic</option>
                            <option value="reviewer">Reviewer</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <a href="#"
                           className="btn btn-success btn-block wbdv-button wbdv-update">Update</a>
                        <a href="../index.html"
                           className="btn btn-danger btn-block wbdv-button wbdv-logout">Logout</a>
                    </div>
                </div>
            </form>
        </div>
    )
}
