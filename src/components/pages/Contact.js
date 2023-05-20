import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container mb-3 mt-3">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card bg-secondary btn mt-3">
                                <div className="card-body p-0">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.1197816177805!2d31.319999274498084!3d29.860819227249497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145837b7f4b091db%3A0x7469b03cf789a521!2z2KfZhNis2YjZhtipINmD2KfZgdmK2Yc!5e0!3m2!1sen!2seg!4v1684131945353!5m2!1sen!2seg" className="border w-100" height="380px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card bg-secondary mt-3">
                                <div className="card-header  text-white">
                                    <h3>Contact us</h3>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="email" placeholder="Email" />
                                        </div>
                                        <div className="form-group">
                                            <textarea row="5" className="form-control" id="message" placeholder="Message" />
                                        </div>
                                        <a href="/#" className="btn btn-success">Send</a>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Contact;