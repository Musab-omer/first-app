import { RadarController } from "chart.js";
import React from "react";

class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            customer:null
        }
    }

    cusomerDetails=(data)=>{
        //alert(JSON.stringify(data));
        this.setState({
            customer:data
        });
        this.props.sendData(data);
    }
    render() {
        return (
            <React.Fragment>
                {/* <pre>{JSON.stringify(this.props.customersData)}</pre> */}
                <table className="table table-hover table-sm table-striped table-primary  text-center">
                    <caption>List of Customers</caption>
                    <thead className="thead-dark">
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <React.Fragment>
                            {
                                this.props.customersData.length > 0 ?
                                    <React.Fragment>
                                        {
                                            this.props.customersData.map(custoerm=>{
                                                return(
                                                    <React.Fragment>
                                                        <tr key={custoerm.login.uuid} onClick={this.cusomerDetails.bind(this,custoerm)}>
                                                            <td>{custoerm.login.uuid.substring(custoerm.login.uuid.length-4)}</td>
                                                            <td><img src={custoerm.picture.medium} className="w-25" alt=''/></td>
                                                            <td>{custoerm.name.first}</td>
                                                            <td>{custoerm.gender}</td>
                                                            <td>{custoerm.dob.age}</td>
                                                            <td>{custoerm.email}</td>
                                                        </tr>
                                                     </React.Fragment>
                                                );
                                            })
                                        }
                                    </React.Fragment> :
                                    null
                            }
                        </React.Fragment>
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
export default ContactList;