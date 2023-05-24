// import { Component, Fragment } from "react";
import React from "react";

class applyForJob extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    <p className="h4">Personal Information</p>
                                </div>
                                <div className="card-body bg-light">
                                    <form>
                                        <div className="form-row">
                                            <div className="form-group col-md-4">
                                                <label for="firstName">First Name </label>
                                                <input type="text" className="form-control" name="firstName" placeholder="First Name" />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label for="lastName">Middle Name</label>
                                                <input type="text" className="form-control" name="middleName" placeholder="Middle Name" />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label for="lastName">Last Name</label>
                                                <input type="text" className="form-control" name="lastName" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-4">
                                                <label for="fatherName">Father's Name</label>
                                                <input type="text" className="form-control" name="fatherName" placeholder="Father's Name" />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label className="motherName">Mother's Name</label>
                                                <input type="text" className="form-control" name="motherName" placeholder="Mother's Name" />
                                            </div>
                                            <div className="form-group col-md-2">
                                                <label for="gender">Select Gender</label>
                                                <div class="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" id="male" name="gender" class="custom-control-input" />
                                                    <label class="custom-control-label" for="male">Male</label>
                                                </div>
                                                <div class="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" id="female" name="gender" class="custom-control-input" />
                                                    <label class="custom-control-label" for="female">Female</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="currentAddress">Current Address</label>
                                            <input type="text" className="form-control" name="currentAddress" placeholder="1234 Main St" />
                                        </div>
                                        <div className="form-group">
                                            <label for="permanentAddress">Permanent Address</label>
                                            <input type="text" className="form-control" name="parmanentAddress" placeholder="Apartment,studio, or floor" />
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group col-md-3">
                                                <label for="landingNumber">Landing Number</label>
                                                <input type="text" name="landingNumber" className="form-control" placeholder="W 000 000 000" />
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label for="phoneNumber">Phone Number</label>
                                                <input type="tel" name="phoneNumber" className="form-control" placeholder="" />
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label for="dateOfBirht">Date of Birth</label>
                                                <input type="date" name="dateOfBirht" className="form-control" placeholder="" />
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label for="placeOfBirth">Place of Birth</label>
                                                <input type="text" name="placeOfBirth" className="form-control" placeholder="city,area" />
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group col-md-4">
                                                <label for="hQualification">Highest Qualifcation</label>
                                                <input type="text" name="hQualification" className="form-control" placeholder="Bachelor ,Master,Phd" />
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label for="yofPassing">Year of passing</label>
                                                <input type="date" name="yofPassing" className="form-control" placeholder="Bachelor ,Master,Phd" />
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group col-md-8">
                                                <label for="langKnown">languages known</label>
                                                <div className="custom-control custom-checkbox custom-control-inline ml-3">
                                                    <input type="checkbox" name="arabic" id="arabic" className="custom-control-input"></input>
                                                    <label for="arabic" className="custom-control-label">Arabic</label>
                                                </div>

                                                <div className="custom-control custom-checkbox custom-control-inline">
                                                    <input type="checkbox" name="english" id="english" className="custom-control-input" />
                                                    <label for="english" className="custom-control-label">English</label>
                                                </div>

                                                <div className="custom-control custom-checkbox custom-control-inline">
                                                    <input type="checkbox" name="chines" id="chines" className="custom-control-input" />
                                                    <label for="chines" className="custom-control-label">Chines</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline">
                                                    <input type="checkbox" name="french" id="french" className="custom-control-input" />
                                                    <label for="french" className="custom-control-label">French</label>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="form-row">

                                            <div className="form-group col-md-8">
                                                <label for="hobies">Select Your Hobies</label>
                                                <div className="custom-control custom-checkbox custom-control-inline ml-2">
                                                    <input type="checkbox" name="traveling" id="traveling" className="custom-control-input" />
                                                    <label for="traveling" className="custom-control-label" >Traveling</label>
                                                </div>

                                                <div className="custom-control custom-checkbox custom-control-inline">
                                                    <input type="checkbox" name="shopping" id="shopping" className="custom-control-input" />
                                                    <label for="shopping" className="custom-control-label">Shopping</label>
                                                </div>

                                                <div className="custom-control custom-checkbox custom-control-inline">
                                                    <input type="checkbox" name="coding" id="coding" className="custom-control-input" />
                                                    <label for="coding" className="custom-control-label">Coding</label>
                                                </div>

                                                <div className="custom-control custom-checkbox custom-control-inline">
                                                    <input type="checkbox" name="sleeping" id="sleeping" className="custom-control-input" />
                                                    <lable for="sleeping" className="custom-control-label">Sleeping</lable>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="form-row">
                                            <div className="form-group col-md-4">
                                                <label for="nationality">Nationality</label>
                                                <select name="nationality" id="nationality" className="custom-select">
                                                    <option value="">Select Your Nationality</option>
                                                    <option value="Sudanese">Sudanese</option>
                                                    <option value="Egyptian">Egyptian</option>
                                                    <option value="Emirates">Emirates</option>
                                                    <option value="American">American</option>
                                                    <option value="Indian">Indian</option>
                                                </select>
                                            </div>

                                            <div className="form-group col-md-4">
                                                <label for="IDCard">National ID Card Number</label>
                                                <input type="text" name="IDCard" id="IDCard" className="form-control" />
                                            </div>

                                            <div className="form-group col-md-4">
                                                <label for="passport">Passport Number</label>
                                                <input type="text" name="passport" id="passport" className="form-control" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default applyForJob;