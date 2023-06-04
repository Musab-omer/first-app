import React from "react";
import WithRouter from "../../custom-router/WithRouter";
import logo from '../../../assets/imgs/HotelLogo1.png';
import axios from "axios";
import {Link} from 'react-router-dom';

class Employee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: {},
            errorMessage: ''
        }

    }

    componentDidMount = () => {
        let dataUrl = "https://gist.githubusercontent.com/Musab-omer/59475f20b0d1fcb3268b3fc4bcab3015/raw/ee38dfe4276eb9c0b16ca02af1402e4862158101/customers.31-05-2023.json";
        axios.get(dataUrl).then(response => {
            this.setState({
                ...this.state,
                employee: response.data.find(employee => employee.login.uuid === this.props.params.id)
            });
        }).catch(error => {
            this.setState({
                ...this.state,
                errorMessage: error.message
            })
        });
    }
    render() {
        let {employee}=this.state;
        return (
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            {
                                Object.keys(this.state.employee).length > 0 ?
                                    <React.Fragment>
                                        <div className="card mt-5">
                                            <div className="card-header bg-warning text-center text-uppercase">
                                                <p className="h4">{employee.name.first}</p>
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-3 text-center">
                                                        <img src={employee.picture.large} className="img-fluid  img-thumbnail w-75" alt="" />
                                                        <p className="card-text mt-2">Do irure anim qui occaecat non laboris sint eiusmod non cillum.</p>
                                                        <Link to="/employees/list" className="btn btn-dark btn-sm">Back</Link>
                                                    </div>
                                                    <div className="col-md-5">
                                                        <ul className="list-group">
                                                            <li className="list-group-item card-title">Full Name : {employee.name.title}. {employee.name.first} {employee.name.last}</li>
                                                            <li className="list-group-item">Age : {employee.dob.age}</li>
                                                            <li className="list-group-item">City : {employee.location.city}</li>
                                                            <li className="list-group-item">Country : {employee.location.country}</li>
                                                            <li className="list-group-item">Member Since : {employee.registered.date}</li>
                                                            <li className="list-group-item">Email : {employee.email}</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27685.318791534304!2d31.326207999999998!3d29.845094399999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1685837955687!5m2!1sen!2seg" className="border-0 img-fluid w-100 h-100" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment> : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default WithRouter(Employee);