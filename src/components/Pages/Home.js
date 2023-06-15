import React from "react";
import imgBackground from '../../assets/imgs/businesLanding.jpg';
import { Link } from 'react-router-dom';
import imgbg from '../../assets/imgs/testsvg.svg';
import imgbg1 from '../../assets/imgs/Untitled (5).svg';
import musab from '../../assets/imgs/musabcoding.png';
import myImg from '../../assets/imgs/_DSC6232.jpg';



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mousOver: false,
            mousOut: true
        }
    }

    handleMouseOver = () => {
        this.setState(
            {
                ...this.state,
                mousOver: true
            }
        );
    }

    handleMouseOut = () => {
        this.setState(
            {
                ...this.state,
                mousOver: false
            }
        );
    }

    render() {

        return (
            <React.Fragment>
                <div style={{ backgroundImage: "url('" + imgBackground + "')", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "100vh" }}>
                    <div className="d-flex flex-column align-items-center justify-content-center text-white d-sm-flex" style={{ height: "100vh", backgroundColor: "rgba(0,0,0,0.5)" }}>
                        <h3 className="">Ex exercitation reprehenderit labore deserunt</h3>
                        <Link to="/about" className="btn btn-dark  rounded rounded-circle">Learn More ...</Link>

                        <div className="pt-5">
                            <a href="https://www.facebook.com/musab.katry/" className="text-white mx-2" target="_blank"><i className=" bi bi-facebook"></i></a>
                            <a href="" className="text-white mx-2" target="_blank"><i className="bi bi-twitter"></i></a>
                            <a href="https://www.youtube.com/@CodeWithMusab" target="_blank" className="text-white mx-2"><i className="bi bi-youtube"></i></a>
                            <a href="" target="_blank" className="text-white mx-2"><i className="bi bi-linkedin"></i></a>
                            <a href="https://github.com/Musab-omer" target="_blank" className="text-white mx-2"><i className="bi bi-github"></i></a>

                        </div>

                    </div>
                </div>
                <div className="">
                    <div className="row">

                        <div className="col-md-5 ml-5 d-flex flex-column justify-content-center text-center">
                            <h1><span className="font-weight-bold">Hey,</span> I'm Musab</h1>
                            <p className="h3">I help <span className=""><u>start-ups.</u></span> developing outstanding web products</p>

                            <div className="mt-2">
                                <Link id="secondary" to="/about" className={this.state.mousOver ? "btn btn-outline-success success" : "btn btn-secondary"}
                                    name="btnSedondary"
                                    onMouseOver={this.handleMouseOver}
                                    onMouseOut={this.handleMouseOut}
                                > <i class="bi bi-brightness-alt-high"></i> Hier Me</Link>
                                <Link to="/about" className={this.state.mousOver ? "btn btn-secondary" : "btn btn-outline-success success"}
                                    name="btnSuccess"
                                    onMouseOver={this.handleMouseOver}
                                    onMouseOut={this.handleMouseOut}
                                > <i class="bi bi-arrow-right"></i> work with me</Link>
                            </div>
                            <div className="pt-5">
                                <a href="https://www.facebook.com/musab.katry/" className="text-dark mx-2" target="_blank"><i className=" bi bi-facebook"></i></a>
                                <a href="" className="text-dark mx-2" target="_blank"><i className="bi bi-twitter"></i></a>
                                <a href="https://www.youtube.com/@CodeWithMusab" target="_blank" className="text-dark mx-2"><i className="bi bi-youtube"></i></a>
                                <a href="" target="_blank" className="text-dark mx-2"><i className="bi bi-linkedin"></i></a>
                                <a href="https://github.com/Musab-omer" target="_blank" className="text-dark mx-2"><i className="bi bi-github"></i></a>
                            </div>
                        </div>
                        <div style={{backgroundImage:"url('" + imgbg1 + "')",height:"100vh",float:"right",backgroundRepeat:"no-repeat"}}>
                        <div className="col-md-6 float-left" >
                            {/* <p>Irure aute mollit laboris ad ea laboris ad velit velit anim eiusmod non laborum. Laboris consectetur elit fugiat fugiat enim magna non occaecat amet nulla consequat. Officia commodo dolor velit fugiat nisi enim consectetur fugiat enim sunt.</p> */}
                            {/* <img src={imgbg1} className="me" style={{ marginRight: "" }} alt="" /> */}
                        </div>
                        </div>
                        

                    </div>

                </div>



                <div className="container" >
                    <div className="row">
                        <div className="col-md-6 alig-item-center">
                            <div className="text-center">
                                <img src={myImg} className="img-fluid rounded my-3" style={{ height: "400px", width: "600px" }} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">

                            <p className="h2">So , who am I ?</p>
                            <p className="text-monospace">Have 5+ years of Professional experience in developing Web-based, Client/Server applications, Internet/Intranet applications and Windows-based applications using Microsoft Technologies </p>
                            <div className="pt-5">
                                <a href="https://www.facebook.com/musab.katry/" className="text-dark mx-2" target="_blank"><i className=" bi bi-facebook"></i></a>
                                <a href="" className="text-dark mx-2" target="_blank"><i className="bi bi-twitter"></i></a>
                                <a href="https://www.youtube.com/@CodeWithMusab" target="_blank" className="text-dark mx-2"><i className="bi bi-youtube"></i></a>
                                <a href="" target="_blank" className="text-dark mx-2"><i className="bi bi-linkedin"></i></a>
                                <a href="https://github.com/Musab-omer" target="_blank" className="text-dark mx-2"><i className="bi bi-github"></i></a>

                            </div>
                        </div>

                    </div>
                </div>

            </React.Fragment >
        );
    }

}
export default Home;