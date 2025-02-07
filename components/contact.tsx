"use client";
import React from 'react'

const contact = () => {
    return (
        <section id="contact-us">
            <div id="contact-form" className="padding-one">
                <div className="container ">
                    <div className="row">
                        <div className="col-xs-12  wow fadeInRight  ">
                            <h2>Contact Us</h2>
                            {/* <hr> */}
                            {/* <p className="text-center p-margin">Lorem Ipsum is simply dummy text of the printing and typesetting
                                Quisque enim dolor, mauris ac sagittis erat pulvinar leo, sed ultrices ipsum elit sed leo dolor
                                in justo pretium et elit.</p> */}
                        </div>
                    </div>
                    <div className="row padding-top-80">
                        <div className="col-xs-12">
                            <form id="form-elements" >
                                <div className="row">
                                    <div className="col-md-12 center"><div id="result"> </div> </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Your Name" name="name" id="name" required /></div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email Address" name="email" id="email" required /></div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Phone Number" name="phone" id="phone" required />
                                        </div>
                                    </div>
                                    <div className="col-xs-12">
                                        <textarea className="form-control" rows={7} required placeholder="Message" name="message" id="message" ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-default buttons" id="submit_btn">SUBMIT</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--/contact-form end-->

            <!--/g-map--> */}
            <div id="g-map">
                <div className="container-fluid ">
                    <div className="row">
                        <div id="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3298.913836693772!2d-113.3930768869345!3d53.43801127220056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01bd804ffe247%3A0xa2ec61bab621e71d!2s3317%2011%20Ave%20NW%2C%20Edmonton%2C%20AB%20T6L%202L5!5e1!3m2!1sen!2sca!4v1738913424399!5m2!1sen!2sca" width="100" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--/g-map-->
            <!--/contact-address--> */}
            <div id="contact-address" className="padding-two text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4  wow fadeInLeft   address-details">
                            <h2><span className="sr-only">header</span><i className="fa fa-volume-control-phone" aria-hidden="true"></i>
                            </h2>
                            <p>+1(780) 993-1330</p>
                        </div>
                        <div className="col-sm-4  wow fadeInLeft   address-details">
                            <h2><span className="sr-only">header</span><i className="fa fa-map-marker" aria-hidden="true"></i></h2>
                            <p>3317 11th Ave NW,<br />
                                Edmonton AB T6T 2C5, Canada</p>
                        </div>
                        <div className="col-sm-4  wow fadeInLeft   address-details">
                            <h2><span className="sr-only">header</span><i className="fa fa-envelope" aria-hidden="true"></i></h2>
                            <p><a href="mailto:support@forestepinfotech.com">support@forestepinfotech.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--/contact-address--> */}
        </section>

    )
}

export default contact
