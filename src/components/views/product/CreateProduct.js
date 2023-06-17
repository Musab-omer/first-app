import React from "react";
import { Link, Navigate } from 'react-router-dom';
import Axios from 'axios';
class CreateProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                name: '',
                image: '',
                price: '',
                qty: '',
                info: ''
            },
            isSubmitted: false,
            errMessage: ''
        }
    }

    updateInput = (event) => {
        this.setState(
            {
                //    ...this.state,
                product: {
                    ...this.state.product,
                    [event.target.name]: event.target.value
                }
            }
        );
    }

    updateImage = async (event) => {
        let imageFile = event.target.files[0];
        let base64Image = await this.base64Image(imageFile);
        alert(base64Image);
        this.setState(
            {
                product: {
                    ...this.state.product,
                    image: base64Image
                }
            }
        );

    }

    base64Image = (imageFile) => {
        return new Promise((resolve, reject) => {
            let fileReader = new FileReader();
            fileReader.readAsDataURL(imageFile);
            fileReader.addEventListener('load', () => {
                if (fileReader.result) {
                    resolve(fileReader.result)
                }
                else {
                    reject('error Occure')
                }
            })
        });
    }

    addProduct = (event) => {
        event.preventDefault();
        // alert(JSON.stringify(this.state.product))
        let dataURl = "http://127.0.0.1:5000/api/products";
        Axios.post(dataURl, this.state.product).then((response) => {
            this.setState({
                ...this.state,
                isSubmitted: true
            });
        }).catch((error) => {
            console.log(error)
        });
    }
    render() {
        return (
            <React.Fragment>
                {/* <pre>{JSON.stringify(this.state.product)}</pre> */}
                {
                    this.state.isSubmitted ? <Navigate to='/products/admin' /> :


                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header bg-dark text-white">
                                            New Product Info
                                        </div>
                                        <div className="card-body bg-warning">
                                            <form onSubmit={this.addProduct}>
                                                <div className="form-group">
                                                    <input type="text"
                                                        required
                                                        name="name"
                                                        value={this.state.product.name}
                                                        onChange={this.updateInput}

                                                        className="form-control" placeholder="Product Name" />
                                                </div>
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>

                                                        </div>
                                                        <div className="custom-file">
                                                            <input type="file"
                                                                onChange={this.updateImage}
                                                                className="custom-file-input" id="inputGroupFile01"
                                                                aria-describedby="inputGroupFileAddon01" />
                                                            <label className="custom-file-label" for="inputGroupFile01">
                                                                {
                                                                    // this.state.product.image !=='' && 
                                                                    // <img src={this.state.product.image} width="30" height="20" alt=""/>
                                                                    this.state.product.image !== '' ?
                                                                        <img src={this.state.product.image} width="30" height="20" alt="" />
                                                                        : <span>Choose a Product Image</span>
                                                                }
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <input type="number"
                                                        required
                                                        name="price"
                                                        value={this.state.product.price}
                                                        onChange={this.updateInput}
                                                        className="form-control" placeholder="Price" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="number"
                                                        required
                                                        name="qty"
                                                        value={this.state.product.qty}
                                                        onChange={this.updateInput}
                                                        className="form-control" placeholder="Quantity" />
                                                </div>
                                                <div className="form-group">
                                                    <textarea rows="3"
                                                        required
                                                        name="info"
                                                        value={this.state.product.info}
                                                        onChange={this.updateInput}
                                                        className="form-control" placeholder="Information about a product" />
                                                </div>
                                                <div className="form-group">
                                                    <Link to='/products/admin' className="btn btn-dark">Back to List</Link>
                                                    <input type="submit" className="btn btn-primary" value="Save" />

                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                }
                <div style={{ marginBottom: "500px" }}></div>
            </React.Fragment>
        );
    }

}
export default CreateProduct;