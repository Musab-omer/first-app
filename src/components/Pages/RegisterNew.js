import { Component, Fragment } from "react";


class RegisterNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userRegister: {
                userName: '',
                email: '',
                password: '',
                confPassword: '',
                designation: '',
                termsConditions: false
            }
        }
    }

    //very best way to do this job with on method only 
    updateInput = (event) => {
        switch (event.target.type) {
            case "checkbox":
                this.setState(
                    {
                        userRegister: {
                            ...this.state.userRegister,
                            [event.target.name]: event.target.checked
                        }
                    }
                );
                break;
            default:
                this.setState(
                    {
                        userRegister: {
                            ...this.state.userRegister,
                            [event.target.name]: event.target.value
                        }
                    }
                );
        }
    }


    //register user 
    registerUser = (event) => {
        event.preventDefault();  //to avoid page refresh
        console.log(this.state);
    }
    render() {
        const { userName, email, password, confPassword, designation, termsConditions } = this.state.userRegister;
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
                                                value={userName}
                                                name="userName"
                                                onChange={this.updateInput}
                                                placeholder="User Name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control"
                                                value={email}
                                                name="email"
                                                onChange={this.updateInput}

                                                placeholder="Email" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control"
                                                value={password}
                                                name="password"
                                                onChange={this.updateInput}

                                                placeholder="Password" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control"
                                                value={confPassword}
                                                name="confPassword"
                                                onChange={this.updateInput}

                                                placeholder="Confirm Password" />
                                        </div>
                                        <div className="form-group">
                                            <select className="form-control"
                                                name="designation"
                                                onChange={this.updateInput}
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

                                                onClick={this.updateInput}
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

                    </div>
                </div>
            </Fragment>
        );
    }
}
export default RegisterNew;