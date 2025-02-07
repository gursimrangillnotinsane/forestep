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
                            <p className="text-center p-margin">Lorem Ipsum is simply dummy text of the printing and typesetting
                                Quisque enim dolor, mauris ac sagittis erat pulvinar leo, sed ultrices ipsum elit sed leo dolor
                                in justo pretium et elit.</p>
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
                        <div id="map"></div>
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
                            <p>+01 331 63 23 136</p>
                        </div>
                        <div className="col-sm-4  wow fadeInLeft   address-details">
                            <h2><span className="sr-only">header</span><i className="fa fa-map-marker" aria-hidden="true"></i></h2>
                            <p>Unbelievable street 1/2
                                <br />011-525 New York</p>
                        </div>
                        <div className="col-sm-4  wow fadeInLeft   address-details">
                            <h2><span className="sr-only">header</span><i className="fa fa-envelope" aria-hidden="true"></i></h2>
                            <p><a href="#.">support&#64;StudioX.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--/contact-address--> */}
        </section>

    )
}

export default contact
