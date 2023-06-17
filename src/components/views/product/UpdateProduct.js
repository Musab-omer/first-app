import React from "react";
import { Link ,Navigate} from 'react-router-dom';
import Axios from 'axios';
import WithRouter from '../../custom-router/WithRouter'

class UpdateProduct extends React.Component {
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

    componentDidMount() {
        let productId = this.props.params.id;
        this.getProduct(productId);
    }

    // get a product
    getProduct = (productId) => {
        let dataUrl = `http://127.0.0.1:5000/api/products/${productId}`;
        Axios.get(dataUrl).then((response) => {
            this.setState({
                ...this.state,
                product: response.data
            });
        }).catch((error) => {
            console.error(error.message);
        });
    }

    // updaet input 
    updateInput = (event) => {
        this.setState({

            product: {
                ...this.state.product,
                [event.target.name]: event.target.value
            }
        });
    }

    //update image
    updateImage = async (event) => {
        try {
            let imageFile = event.target.files[0];
            let base64Image = await this.base64Image(imageFile);
            //alert(this.state.product.image);
            this.setState(
                {
                    product: {
                        ...this.state.product,
                        image: base64Image
                    }
                }
            );
        } catch (error) {

        }
    }

    //convert image to base64 image
    base64Image = (imageFile) => {
        return new Promise((resolve, reject) => {
            let fileReader = new FileReader();
            fileReader.readAsDataURL(imageFile);
            fileReader.addEventListener('load', () => {
                if (fileReader.result)
                    resolve(fileReader.result);
                else
                    reject('error occure');
            })
        })
    }

    // base64Image = (imageFile) => {
    //     return new Promise((resolve, reject) => {
    //         let fileReader = new FileReader();
    //         fileReader.readAsDataURL(imageFile);
    //         fileReader.addEventListener('load', () => {
    //             if (fileReader.result) {
    //                 resolve(fileReader.result)
    //             }
    //             else {
    //                 reject('error Occure')
    //             }
    //         })
    //     });
    // }

    //update a product 
    submitForm = (event) => {
        event.preventDefault();
        let dataUrl = `http://127.0.0.1:5000/api/products/${this.props.params.id}`;
        Axios.put(dataUrl, this.state.product).then((response) => {
            this.setState({
                ...this.state,
                isSubmitted: true
            });
        }).catch((error) => {
            console.error(error)
        })
    }

    render() {
        return (
            <React.Fragment>
                <pre>{JSON.stringify(this.state.product)}</pre>
                {
                    this.state.isSubmitted ? <Navigate to='/products/admin' /> :
                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header bg-dark text-white">
                                            <p className="card-title">Update Product</p>
                                        </div>
                                        <div className="card-body bg-warning">
                                            <form onSubmit={this.submitForm}>
                                                <div className="form-group">
                                                    <input type="text"
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
                                                    <input type="nubmer"
                                                        name="price"
                                                        value={this.state.product.price}
                                                        onChange={this.updateInput}
                                                        className="form-control" placeholder="Price" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="number"
                                                        name="qty"
                                                        value={this.state.product.qty}
                                                        onChange={this.updateInput}
                                                        className="form-control" placeholder="Quntity" />
                                                </div>
                                                <div className="form-group">
                                                    <textarea rows="3"
                                                        name="info"
                                                        value={this.state.product.info}
                                                        onChange={this.updateInput}
                                                        className="form-control" placeholder="Information about a proudct" />
                                                </div>
                                                <Link to='/products/admin' className="btn btn-dark">back to list</Link>
                                                <input type="submit" value="update" className="btn btn-success" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }

            </React.Fragment>
        );
    }

}
export default WithRouter(UpdateProduct);