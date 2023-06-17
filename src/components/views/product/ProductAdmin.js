import React from "react";
import Axios from 'axios';
import { Link } from 'react-router-dom';

class ProductAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            errorMessage: ''
        }
    }

    componentDidMount = () => {
        this.getAllProducts();
    }

    getAllProducts = () => {
        let dataURl = "http://127.0.0.1:5000/api/products";
        Axios.get(dataURl).then((response) => {
            this.setState({
                ...this.state,
                products: response.data
            });
        }).catch((err) => {
            this.setState({
                ...this.state,
                errorMessage: err.message
            });
        });
    }

    //delete a product
    deleteProduct = (productId) => {
       let dataUrl=`http://127.0.0.1:5000/api/products/${productId}`;
       Axios.delete(dataUrl).then((response)=>{
        alert("product deleted");
        this.getAllProducts();
       }).catch((error)=>{
        alert(error.message)
       })
    }
    render() {
        return (
            <React.Fragment>
                {/* <pre>JSON.stringify({this.state.products})</pre> */}
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <h2>Products List</h2>
                            <p>Reprehenderit occaecat enim id incididunt laboris elit deserunt irure culpa reprehenderit deserunt labore qui excepteur. Id fugiat aute ullamco voluptate cupidatat mollit dolor magna. Occaecat mollit consequat nostrud nostrud amet consequat nostrud dolor sint amet tempor deserunt fugiat est.</p>
                            <Link to="/products/create"  className="btn btn-success mb-3">New Product</Link>
                            <table className="table table-striped table-hover table-dark text-center">
                                <thead className="bg-warning">
                                    <tr>
                                        <td>SNO</td>
                                        <td>NAME</td>
                                        <td>IMAGE</td>
                                        <td>PRICE</td>
                                        <td>QTY</td>
                                        <td>Created On</td>
                                        <td>Updated On</td>
                                        <td>ACTION</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.products.length > 0 ?
                                            <React.Fragment>
                                                {
                                                    this.state.products.map(product => {
                                                        return (
                                                            <tr key={product._id}>
                                                                <td>{product._id.substring(product._id.length - 4)}</td>
                                                                <td> {product.name}</td>
                                                                <td><img src={product.image} alt="" className="image-fluid" width="50" height="50" /></td>
                                                                <td>{product.price.toFixed(2)}</td>
                                                                <td>{product.qty} kgs</td>
                                                                <td>      {product.createdOn.toString()}</td>
                                                                <td>{product.updatedOn}</td>
                                                                <td>
                                                                    <Link to={`/products/${product._id}`} className="btn btn-warning btn-sm">Update</Link>
                                                                    <button className="btn btn-danger btn-sm" onClick={this.deleteProduct.bind(this, product._id)}>Delete</button>
                                                                </td>
                                                            </tr>
                                                        )
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
export default ProductAdmin;