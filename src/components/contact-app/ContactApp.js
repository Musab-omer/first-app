import axios from "axios";
import React from "react";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";

class ContactApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            errorMessage: '',
            customer: null
        }

    }

    componentDidMount = () => {
        let url = "https://gist.githubusercontent.com/Musab-omer/59475f20b0d1fcb3268b3fc4bcab3015/raw/ee38dfe4276eb9c0b16ca02af1402e4862158101/customers.31-05-2023.json";
        axios.get(url).then(response => {
            this.setState({
                ...this.state,
                customers: response.data
            })
        }).catch(error => {
            this.setState({
                ...this.state,
                errorMessage: error.message
            })
        });
    }

    getCustomerDetails = (data) => {
        this.setState({
            ...this.state,
            customer: data
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    {/* <pre>{JSON.stringify(this.state.customers)}</pre> */}
                    <div className="row">
                        <div className="col">
                            <h2 className="text-primary">Contact App</h2>
                            <p>Fugiat do est irure aliqua ipsum ex ipsum. Quis ex deserunt excepteur exercitation aliquip qui duis. Consectetur et incididunt voluptate occaecat in deserunt ad occaecat pariatur veniam eu et ea exercitation. Adipisicing ullamco adipisicing magna qui cillum ex officia pariatur. Incididunt occaecat officia enim consectetur id ea occaecat velit enim reprehenderit. Labore id ullamco irure dolor voluptate ullamco Lorem dolor ea proident cillum. Commodo aliquip sint id incididunt ullamco sint.</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-12 col-md-8">
                            <ContactList customersData={this.state.customers} sendData={this.getCustomerDetails} />
                        </div>
                        <div className="col-sm-12 col-md-4">
                            {
                                this.state.customer !== null ?
                                    <React.Fragment>
                                        <ContactCard customerDetails={this.state.customer} />
                                    </React.Fragment>:null
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default ContactApp;