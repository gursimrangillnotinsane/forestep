import React from 'react'

const blog = () => {
    return (
        <section id="blog">
            {/* <!--blog-post--> */}
            <div id="blog-post" className="padding-one">
                <div className="container ">
                    <div className="row">
                        <div className="col-xs-12  wow fadeInRight  ">
                            <h2>Latest Blog</h2>
                            {/* <hr> */}
                            <p className="text-center p-margin">Lorem Ipsum is simply dummy text of the printing and typesetting
                                Quisque enim dolor, mauris ac sagittis erat pulvinar leo, sed ultrices ipsum elit sed leo dolor
                                in justo pretium et elit.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div id="blog-slider">
                            <div className="item">
                                <div className="blog-img">
                                    <a href="blog.html"> <img src="images/blog-img1.jpg" alt="Owl Image" /> <i
                                        className="fa fa-video-camera" aria-hidden="true"></i> </a>
                                </div>
                                <div className="blog-border">
                                    <div className="blog-slider-descp">
                                        <h3><a href="blog.html">Video Post</a></h3>
                                        <p className="p-font">by <span>admin</span> | July 24, 2016 at 03:00 AM</p>
                                        <p className="p-font">Lorem Ipsum is simply dummy text of the printing and typesetting Donec
                                            pulvinar mi sit amet viverra...</p>
                                        <p className="p-font"><a href="blog.html">Read More</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="blog-img">
                                    <a href="blog.html"><img src="images/blog-img2.jpg" alt="Owl Image" /> <i
                                        className="fa fa-picture-o" aria-hidden="true"></i> </a>
                                </div>
                                <div className="blog-border">
                                    <div className="blog-slider-descp">
                                        <h3><a href="blog.html">Graphic Post</a></h3>
                                        <p className="p-font">by <span>admin</span> | July 24, 2016 at 03:00 AM</p>
                                        <p className="p-font">Lorem Ipsum is simply dummy text of the printing and typesetting Donec
                                            pulvinar mi sit amet viverra...</p>
                                        <p className="p-font"><a href="blog.html">Read More</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="blog-img">
                                    <a href="blog.html"><img src="images/blog-img1.jpg" alt="Owl Image" /> <i
                                        className="fa fa-video-camera" aria-hidden="true"></i> </a>
                                </div>
                                <div className="blog-border">
                                    <div className="blog-slider-descp">
                                        <h3><a href="blog.html">Video Post</a></h3>
                                        <p className="p-font">by <span>admin</span> | July 24, 2016 at 03:00 AM</p>
                                        <p className="p-font">Lorem Ipsum is simply dummy text of the printing and typesetting Donec
                                            pulvinar mi sit amet viverra...</p>
                                        <p className="p-font"><a href="blog.html">Read More</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="blog-img">
                                    <a href="blog.html"><img src="images/blog-img1.jpg" alt="Owl Image" /> <i
                                        className="fa fa-video-camera" aria-hidden="true"></i> </a>
                                </div>
                                <div className="blog-border">
                                    <div className="blog-slider-descp">
                                        <h3><a href="blog.html">Video Post</a></h3>
                                        <p className="p-font">by <span>admin</span> | July 24, 2016 at 03:00 AM</p>
                                        <p className="p-font">Lorem Ipsum is simply dummy text of the printing and typesetting Donec
                                            pulvinar mi sit amet viverra...</p>
                                        <p className="p-font"><a href="blog.html">Read More</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="blog-img">
                                    <a href="blog.html"><img src="images/blog-img2.jpg" alt="Owl Image" /> <i
                                        className="fa fa-picture-o" aria-hidden="true"></i> </a>
                                </div>
                                <div className="blog-border">
                                    <div className="blog-slider-descp">
                                        <h3><a href="blog.html">Graphic Post</a></h3>
                                        <p className="p-font">by <span>admin</span> | July 24, 2016 at 03:00 AM</p>
                                        <p className="p-font">Lorem Ipsum is simply dummy text of the printing and typesetting Donec
                                            pulvinar mi sit amet viverra...</p>
                                        <p className="p-font"><a href="blog.html">Read More</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="blog-img">
                                    <a href="blog.html"><img src="images/blog-img1.jpg" alt="Owl Image" /> <i
                                        className="fa fa-video-camera" aria-hidden="true"></i> </a>
                                </div>
                                <div className="blog-border">
                                    <div className="blog-slider-descp">
                                        <h3><a href="blog.html">Video Post</a></h3>
                                        <p className="p-font">by <span>admin</span> | July 24, 2016 at 03:00 AM</p>
                                        <p className="p-font">Lorem Ipsum is simply dummy text of the printing and typesetting Donec
                                            pulvinar mi sit amet viverra...</p>
                                        <p className="p-font"><a href="#">Read More</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--blog-post end--> */}

            {/* <!--blog-text start--> */}
            <div id="blog-text" className="padding-one">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-xs-12  wow fadeInRight  ">
                            <h2><span className="sr-only">header</span><i className="fa fa-twitter" aria-hidden="true"></i></h2>
                            <div id="blog-text-slider" className="owl-carousel owl-theme">
                                <div className="item text-center">
                                    <p className="p-margin">Lorem ipsum dolor sit amet, consectetur <span>&#64;adipisicing</span>
                                        elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem.
                                        Etiam pellentesque aliquet. Phasellus <span>&#64;pharetra</span> nulla ac diam
                                        consectetur adipisicing elit.</p>
                                </div>
                                <div className="item text-center">
                                    <p className="p-margin">Lorem ipsum dolor sit amet, consectetur <span>&#64;adipisicing</span>
                                        elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem.
                                        Etiam pellentesque aliquet. Phasellus <span>&#64;pharetra</span> nulla ac diam
                                        consectetur adipisicing elit.</p>
                                </div>
                                <div className="item text-center">
                                    <p className="p-margin">Lorem ipsum dolor sit amet, consectetur <span>adipisicing</span> elit.
                                        Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam
                                        pellentesque aliquet. Phasellus <span>&#64;pharetra</span> nulla ac diam consectetur
                                        adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default blog
