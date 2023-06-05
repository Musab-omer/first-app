import React from "react";
import axios from "axios";

class Stocks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stocks: [],
            errorMessage: ''
        }

    }

   
    componentDidMount = () => {
        let dataUrl = "https://gist.githubusercontent.com/Musab-omer/e0d8f63c6eff9cea5f488e24a110d795/raw/4a0ec7593acd7400022fca3c0b886182c732a7c2/stocks-03-06-2023.json";
        axios.get(dataUrl).then(respons => {
            this.setState({
                ...this.state,
                stocks: respons.data
            })

        }).catch(error => {
            this.setState({
                ...this.state,
                errorMessage: error.message
            });
        });
      
    }
    render() {
        
        return (
            <React.Fragment>
                
                {/* <pre>{JSON.stringify(this.state.stocks)}</pre> */}
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <h1 className="mt-5">Stocks</h1>
                            <p className="text-justify lead">Sint eu commodo anim ut labore. Ut eiusmod exercitation laborum eiusmod in adipisicing ex ullamco nostrud consectetur ex pariatur dolore ut. Voluptate culpa duis qui sunt adipisicing id excepteur. Sint ipsum sit pariatur nulla.</p>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <table id="example" className="table table-hover table-striped table-responsive-sm table-dark text-center">
                                <thead className="bg-warning text-dark text-uppercase">
                                    <tr>
                                        <th>SNO</th>
                                        <th>Name</th>
                                        <th>Industry</th>
                                        <th>Market</th>
                                        <th>Symbol</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.stocks.length > 0 ?
                                            <React.Fragment>
                                                {
                                                    this.state.stocks.map(stock => {
                                                        return (
                                                            <tr key={stock.id}>
                                                                <td>{stock.id}</td>
                                                                <td>{stock.name}</td>
                                                                <td>{stock.industry}</td>
                                                                <td>{stock.market}</td>
                                                                <td>{stock.symbol}</td>
                                                            </tr>
                                                        );
                                                    })
                                                }
                                            </React.Fragment> : null
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default Stocks;