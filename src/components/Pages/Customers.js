import React from "react";
import { customerData } from "../../DataSource/customerStore";

class Customers extends React.Component{
    constructor(props){
        super(props);
        this.state={
            customers:customerData
        }
    }

    render(){
       let {customer}=this.state.customers[0];
        return(
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <table className="table table-hover table-striped table-primary">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>#</th>
                                        <th>picture</th>
                                        <th>Name</th>
                                        <th>gender</th>
                                        <th>city</th>
                                        <th>email</th>
                                        <th>age</th>
                                        <th>phone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.state.customers[0].login.uuid.substring(this.state.customers[0].login.uuid.length-4)}</td>
                                        <td><img src={this.state.customers[0].picture.medium} width="50px" height="40px" alt=""/></td>
                                        <td>{this.state.customers[0].name.first}</td>
                                        <td>{this.state.customers[0].gender}</td>
                                        <td>{this.state.customers[0].location.city}</td>
                                        <td>{this.state.customers[0].email}</td>
                                        <td>{this.state.customers[0].dob.age}</td>
                                        <td>{this.state.customers[0].phone}</td>
                                    </tr>
                                    <tr>
                                        <td>{this.state.customers[1].login.uuid.substring(this.state.customers[1].login.uuid.length-4)}</td>
                                        <td><img src={this.state.customers[1].picture.medium} width="50px" height="40px" alt=""/></td>
                                        <td>{this.state.customers[1].name.first}</td>
                                        <td>{this.state.customers[1].gender}</td>
                                        <td>{this.state.customers[1].location.city}</td>
                                        <td>{this.state.customers[1].email}</td>
                                        <td>{this.state.customers[1].dob.age}</td>
                                        <td>{this.state.customers[1].phone}</td>
                                    </tr>

                                    <tr>
                                        <td>{this.state.customers[2].login.uuid.substring(this.state.customers[2].login.uuid.length-4)}</td>
                                        <td><img src={this.state.customers[2].picture.medium} width="50px" height="40px" alt=""/></td>
                                        <td>{this.state.customers[2].name.first}</td>
                                        <td>{this.state.customers[2].gender}</td>
                                        <td>{this.state.customers[2].location.city}</td>
                                        <td>{this.state.customers[2].email}</td>
                                        <td>{this.state.customers[2].dob.age}</td>
                                        <td>{this.state.customers[2].phone}</td>
                                    </tr>
                                    <tr>
                                        <td>{this.state.customers[3].login.uuid.substring(this.state.customers[3].login.uuid.length-4)}</td>
                                        <td><img src={this.state.customers[3].picture.medium} width="50px" height="40px" alt=""/></td>
                                        <td>{this.state.customers[3].name.first}</td>
                                        <td>{this.state.customers[3].gender}</td>
                                        <td>{this.state.customers[3].location.city}</td>
                                        <td>{this.state.customers[3].email}</td>
                                        <td>{this.state.customers[3].dob.age}</td>
                                        <td>{this.state.customers[3].phone}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Customers;