// import { Component, Fragment } from "react";
import React from "react";

class ApplicationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personalInformation: {
                firstName: '',
                middleName: '',
                lastName: '',
                fatherName: '',
                motherName: '',
                gender: '',
                nationality: '',
                IDC: '',
                passport: '',
                dob: '',
                pob: ''
            },

            contactInformation: {
                currentAddress: '',
                permanentAddress: '',
                landingNumber: '',
                phoneNumber: ''
            },

            hobies: {
                arabic: false,
                english: false,
                chines: false,
                french: false,
                traveling: false,
                shopping: false,
                coding: false,
                sleeping: false
            },

            otherDetails:{
                jobType:'',
                doj:'',
                toj:'',
                preferredLocation:'',
                relocateToKhartoum:false,
                terms:false
            }

        }
    }

    submitForm = (event) => {
        event.preventDefault();
        alert("Hello Musab  !");
    }

    addEducationDetailsrow = () => {

        //get the table element in which you want to add row 
        let table = document.getElementById('educationDetails');

        let qualifcation = table.rows[0].cells[1].children[0].value;
        let institure = table.rows[0].cells[2].children[0].value;
        let yop = table.rows[0].cells[3].children[0].value;
        let mark = table.rows[0].cells[4].children[0].value;
        alert(qualifcation + " " + institure + " " + yop + " " + mark + " Length=" + table.rows.length);

        //create row using insertRow() method and 
        //specify the index where you want to add the row if we pass -1 it insert the wor at last table and if we don't specify the index it all add the row at starting of the table
        let row = table.insertRow();

        let cell_1 = row.insertCell(0);
        let cell_2 = row.insertCell(1);
        let cell_3 = row.insertCell(2);
        let cell_4 = row.insertCell(3);
        let cell_5 = row.insertCell(4);
        let action = row.insertCell(5);

        cell_1.innerText = table.rows.length + 1;
        cell_2.innerText = qualifcation;
        cell_3.innerText = institure;
        cell_4.innerText = yop;
        cell_5.innerText = mark;
        action.innerHTML = "<i class='fa fa-trash fa-lg text-danger' onClick={onClick=this.deleteEducationDetailsrow}></i>";

        table.appendChild(row);

    }

    deleteEducationDetailsrow = (event) => {
        event.preventDefault();
        alert("row deleted")
    }
    render() {
        return (
            <React.Fragment>
                <div className="container mt-5">
                    <form>
                        <fieldset className="bg-light p-3 border border-primary">
                            <legend className="bg-info text-white  p-2   responsive-font-example shadow border border-primary">Personal Information</legend>
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
                                    <label for="motherName">Mother's Name</label>
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

                            <div className="form-row">
                                <div className="form-group col-md-3 ">
                                    <label for="dateOfBirht">Date of Birth</label>
                                    <input type="date" name="dateOfBirht" className="form-control" placeholder="" />
                                </div>
                                <div className="form-group col-md-3">
                                    <label for="placeOfBirth">Place of Birth</label>
                                    <input type="text" name="placeOfBirth" className="form-control" placeholder="city,area" />
                                </div>
                            </div>
                            <div className="form-group float-right">
                                <a href="#contactInfo" className="btn btn-primary btn-sm">Next</a>
                            </div>
                        </fieldset>

                        <fieldset id="contactInfo" className="bg-light mt-3 p-3 border border-primary">
                            <legend className="bg-info text-white p-2  responsive-font-example shadow border border-primary">Contact Information</legend>
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
                            </div>
                            <div className="form-group float-right">
                                <a href="#hobies" className="btn btn-primary btn-sm">Next</a>
                            </div>
                        </fieldset>

                        <fieldset id="hobies" className="bg-light p-3 mt-3 border border-primary">
                            <legend className="bg-info text-white p-2  responsive-font-example shadow border border-primary">Hobies</legend>
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
                                        <input type="checkbox" name="sleeping" id="sleep" className="custom-control-input" />
                                        <label for="sleep" className="custom-control-label">Sleeping</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group float-right">
                                <a href="#education" className="btn btn-primary btn-sm">Next</a>
                            </div>
                        </fieldset>

                        <fieldset id="education" className="bg-light p-3 mt-3 border border-primary">
                            <legend className="bg-info text-white p-2 responsive-font-example shadow border border-primary">Education Details</legend>
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
                            <table id="" className="table table-responsive-md  table-info text-center">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col" >Qualifcation</th>
                                        <th scope="col">Institure/ University</th>
                                        <th scope="col">Year of Passing</th>
                                        <th scope="col">Marks (%)</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody id="educationDetails">
                                    <tr>
                                        <th scope="col">1</th>
                                        <td><input type="text" className="form-control" /></td>
                                        <td><input type="text" className="form-control" /></td>
                                        <td><input type="date" className="form-control" /></td>
                                        <td><input type="number" className="form-control" /></td>
                                        <td>
                                            <i className="fa fa-plus-circle fa-lg text-success" onClick={this.addEducationDetailsrow} />
                                            {/* <a href="/" ><i className="fa fa-plus-circle fa-lg text-success" /></a> */}
                                            {/* <a href="/"><i className="fa fa-pen fa-lg text-warning" /></a>
                                                    <a href="/"><i className="fa fa-trash fa-lg text-danger" /></a> */}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="form-group float-right">
                                <a href="#experience" className="btn btn-primary btn-sm">Next</a>
                            </div>
                        </fieldset>

                        <fieldset id="experience" className="bg-light p-3 mt-3 border border-primary">
                            <legend className="bg-info text-white p-2 responsive-font-example shadow border border-primary">Work Experience</legend>
                            <table className="table table-responsive-md  table-info text-center">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Company</th>
                                        <th scop="col">Work/ Roles</th>
                                        <th scop="col" >From Date</th>
                                        <th scope="col">To Date</th>
                                        <th scop="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scop="col">1</th>
                                        <td><input type="text" name="company" className="form-control" /></td>
                                        <td><textarea name="roles" className="form-control" /></td>
                                        <td><input type="date" name="fromDate" className="form-control" /></td>
                                        <td><input type="date" name="toDate" className="form-control" /></td>
                                        <td>
                                            <i className="fa fa-plus-circle fa-lg text-success"></i>
                                            {/* <a href="/"><i className="fa fa-plus-circle fa-lg text-success"></i></a> */}
                                            {/* <a href="/"><i className="fa fa-pen fa-lg text-warning"></i></a>
                                            <a href="/"><i className="fa fa-trash fa-lg text-danger"></i></a> */}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="form-group float-right">
                                <a href="#otherDetails" className="btn btn-primary btn-sm">Next</a>
                            </div>
                        </fieldset>

                        <fieldset id="otherDetails" className="bg-light p-3 mt-3 border border-primary">
                            <legend className="bg-info text-white p-2 responsive-font-example shadow border border-primary">Other Details</legend>
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <label for="jobType">Job Type :</label>
                                </div>
                                <div className="form-check col-md-3">
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="parmanent" name="jobType" />
                                        <label for="parmanent" className="custom-control-label">Parmanent</label>
                                    </div>
                                </div>
                                <div className="form-check col-md-3">
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="contract" name="jobType" />
                                        <label for="contract" className="custom-control-label">Contract</label>
                                    </div>
                                </div>
                                <div className="form-check col-md-3">
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="other" name="jobType" />
                                        <label for="other" className="custom-control-label">Other</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <label form="dataJoining">Date Of Joining</label>
                                    <input type="date" className="form-control" id="dataJoining" name="dataJoining" />
                                </div>
                                <div className="form-group col-md-3">
                                    <label for="timeJoining">Time Of Joining</label>
                                    <input type="time" className="form-control" id="timeJoining" name="timeJoining" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <label >Preferred Job Location :</label>
                                </div>
                                <div className="form-check col-md-3">
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="khartoum" name="jobLocation" />
                                        <label for="khartoum" className="custom-control-label">Khartoum</label>
                                    </div>
                                </div>
                                <div className="form-check col-md-3">
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="qairo" name="jobLocation" />
                                        <label for="qairo" className="custom-control-label">Qairo</label>
                                    </div>
                                </div>
                                <div className="form-check col-md-3">
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="dubai" name="jobLocation" />
                                        <label for="dubai" className="custom-control-label">Dubai</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <id className="form-group col-md-3">
                                    <label >Willing to Relocate to Khartoum</label>
                                </id>
                                <div className="form-check col-md-3">
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="yes" name="wrk" className="custom-control-input" />
                                        <label for="yes" className="custom-control-label">Yes</label>
                                    </div>
                                </div>
                                <div className="form-check col-md-3">
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="no" name="wrk" className="custom-control-input" />
                                        <label for="no" className="custom-control-label">No</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <label >Any file to submit</label>
                                    <input type="file" className="" />
                                </div>
                            </div>

                            <div className="form-rwo">
                                <div className="form-group col">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="terms" />
                                        <label for="terms" className="custom-control-label"> I am here declaring that all the above mentioned information is ture as per my knowledge.</label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>

                        <div className="form-group bg-light d-flex justify-content-center">
                            <input type="submit"
                                onClick={this.submitForm}
                                value="Submit" className="btn btn-success" />
                            <input type="reset" value="Reset" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
                <div style={{ marginBottom: "500px" }}>

                </div>


            </React.Fragment >
        );
    }
}
export default ApplicationForm;