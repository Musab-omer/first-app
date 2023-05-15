import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row mt-3 orange">
                        <div className="col-sm-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.1197816177805!2d31.319999274498084!3d29.860819227249497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145837b7f4b091db%3A0x7469b03cf789a521!2z2KfZhNis2YjZhtipINmD2KfZgdmK2Yc!5e0!3m2!1sen!2seg!4v1684131945353!5m2!1sen!2seg" className="border  mt-2 mb-1  w-100" style={{height:"95%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="col-sm-6">
                            <form>
                                <div className="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter Your Name" />
                                </div>
                                <div className="form-group">
                                    <lable for="email">Email</lable>
                                    <input type="email" className="form-control" id="email" placeholder="Enter Your Eamil" />
                                </div>
                                <div className="form-group">
                                    <lable form="message">Message</lable>
                                    <textarea id="message" className="form-control" placeholder="Write your message"></textarea>
                                </div>
                                <input type="submit" value={"Send"} className="btn btn-success" />

                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Contact;