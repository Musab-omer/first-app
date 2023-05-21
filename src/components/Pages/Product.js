import React from "react";

class Product extends React.Component {
    constructor(props){
        super(props);
        this.state={
            product:{
                id:'AA45BB#',
                image:'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,dpr=2,fit=contain,format=auto/swappie-iphone-13-pro-max-gold.png?v=34',
                name:'Iphone 13 pro max',
                price:1039,
                qty:5
            }
        }
    }
    render() {
        
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <p className="h4 text-primary">Products Card</p>
                            <p>Ipsum Lorem consectetur ex aliqua nulla enim elit eu cupidatat quis ullamco. Deserunt ad enim do duis aute velit do. Nostrud laborum ipsum velit est nulla dolore do consequat cupidatat quis anim nulla labore ullamco. Et pariatur aute et excepteur magna laborum magna deserunt occaecat ullamco culpa reprehenderit. Sunt irure sint Lorem Lorem reprehenderit officia labore commodo amet amet fugiat.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <table className="table table-hover table-striped table-dark">
                                <thead>
                                    <tr>
                                        <th>SNO</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>AA45BB#</td>
                                        <td><img src={this.state.product.image} className="" width="50" height="50" alt="productImage"/></td>
                                        <td>{this.state.product.name}</td>
                                        <td>{this.state.product.price}</td>
                                        <td>{this.state.product.qty}</td>
                                        <td>{this.state.product.price * this.state.product.qty}</td>
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
export default Product;