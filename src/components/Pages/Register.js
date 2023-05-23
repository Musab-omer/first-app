import { Component, Fragment } from "react";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email: '',
            password: '',
            confPassword: '',
            designation: '',
            termsConditions: false
        }
    }

    // update username
    updateUserName = (event) => {
        this.setState(
            { userName: event.target.value }
        );
    }
    updateEmail = (event) => {
        this.setState(
            { email: event.target.value }
        )
    }
    updatePassword = (event) => {
        this.setState(
            { password: event.target.value }
        );
    }
    updateConfPassword = (event) => {
        this.setState(
            { confPassword: event.target.value }
        );
    }
    selectedDesignation = (event) => {
        this.setState(
            { designation: event.target.value }
        );
    }
    updateTerms = (event) => {
        const checkbox = document.getElementById('terms');
        let flag = false;
        (checkbox.checked) ? flag = true : flag = false
        this.setState(
            { termsConditions: flag }
        );
    }

    //best way to do this job 
    updateInput = (controler, event) => {
        switch (controler) {
            case "userName":
                this.setState(
                    { userName: event.target.value }
                );
                break;
            case "email":
                this.setState(
                    { email: event.target.value }
                )
                break;
            case "password":
                this.setState(
                    { password: event.target.value }
                );
                break;
            case "confPassword":
                this.setState(
                    { confPassword: event.target.value }
                );
                break;
            case "designation":
                this.setState(
                    { designation: event.target.value }
                );
            case "terms":
                this.setState(
                    { termsConditions: event.target.checked }
                );
            // const checkbox = document.getElementById('terms');
            // let flag = false;
            // (checkbox.checked) ? flag = true : flag = false
            // this.setState(
            //     { termsConditions: flag }
            // );
        }
    }

    //very best way to do this job with on method only 
    updateInput1 = (event) => {
        // if (event.target.type === "checkbox")
        //     this.setState(
        //         { [event.target.name]: event.target.checked }
        //     );
        // else
        //     this.setState(
        //         { [event.target.name]: event.target.value }
        //     );

        switch (event.target.type) {
            case "checkbox":
                this.setState(
                    { [event.target.name]: event.target.checked }
                );
                break;
            default:
                this.setState(
                    { [event.target.name]: event.target.value }
                );
        }
    }


    //register user 
    registerUser = (event) => {
        event.preventDefault();  //to avoid page refresh
        console.log(this.state);
    }
    render() {
        return (
            <Fragment>
                <div className="container mt-3">
                    {/* <pre>{JSON.stringify(this.state)}</pre> */}
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header bg-primary text-white">
                                    <p className="h4">Register Form</p>
                                </div>
                                <div className="card-body bg-light">
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control"
                                                value={this.state.userName}
                                                name="userName"
                                                onChange={this.updateInput1}
                                                // onChange={this.updateInput.bind(this, "userName")}
                                                placeholder="User Name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control"
                                                value={this.state.email}
                                                name="email"
                                                onChange={this.updateInput1}
                                                // onChange={this.updateInput.bind(this, "email")}
                                                placeholder="Email" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control"
                                                value={this.state.password}
                                                name="password"
                                                onChange={this.updateInput1}
                                                // onChange={this.updateInput.bind(this, "password")}
                                                placeholder="Password" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control"
                                                value={this.state.confPassword}
                                                name="confPassword"
                                                onChange={this.updateInput1}
                                                // onChange={this.updateInput.bind(this, "confPassword")}
                                                placeholder="Confirm Password" />
                                        </div>
                                        <div className="form-group">
                                            <select className="form-control"
                                                name="designation"
                                                onChange={this.updateInput1}
                                            // onChange={this.updateInput.bind(this, "designation")}
                                            >
                                                <option value="">Select Designation</option>
                                                <option value="Software Engineer">Software Engineer</option>
                                                <option value="Sr.Software Engineer">Sr.Software Engineer</option>
                                                <option value="Team Leader">Team Leader</option>
                                                <option value="Project Manager">Project Manager</option>
                                                <option value="Director">Director</option>
                                            </select>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" id="terms"
                                                name="termsConditions"
                                                // onClick={this.updateTerms}
                                                onClick={this.updateInput1}
                                                className="form-check-input" />
                                            <label className="form-check-label">Accept Terms & Conditions</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" onClick={this.registerUser}
                                                className="btn btn-primary btn-sm" value="Register" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header bg-success text-white">
                                    <p className="h4">Registeration Details</p>
                                </div>
                                <div className="card-body bg-light">
                                    <ul className="list-group">
                                        <li className="list-group-item">User Name : {this.state.userName}</li>
                                        <li className="list-group-item">Email : {this.state.email}</li>
                                        <li className="list-group-item">Password : {this.state.password}</li>
                                        <li className="list-group-item">Confiermed Password : {this.state.confPassword}</li>
                                        <li className="list-group-item">Designation : {this.state.designation}</li>
                                        <li className="list-group-item">Terms & Conditions : {this.state.termsConditions}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default Register;