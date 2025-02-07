"uce client"
import React, { useState } from 'react'

const about = () => {
    const teamMembers = [
        {
            id: "tab-1",
            name: "John Toi",
            role: "Senior SEO Expert",
            image: "/images/team1.jpg",
            description:
                "Donec sollicitudin, mauris ac sagittis bibendum, erat tortor pulvinar leo, sed ultrices ipsum elit sed leo.",
            skills: [
                { name: "WordPress", value: 72 },
                { name: "Photoshop", value: 98 },
                { name: "Marketing", value: 95 },
                { name: "Business", value: 85 },
            ],
        },
        {
            id: "tab-2",
            name: "Jane Doe",
            role: "Content Strategist",
            image: "/images/team2.jpg",
            description:
                "Jane specializes in content marketing and digital storytelling.",
            skills: [
                { name: "SEO", value: 88 },
                { name: "Writing", value: 92 },
                { name: "Social Media", value: 90 },
                { name: "Marketing", value: 80 },
            ],
        },
        {
            id: "tab-3",
            name: "Mark Lee",
            role: "Marketing Expert",
            image: "/images/team3.jpg",
            description:
                "Mark has extensive experience in digital marketing and advertising strategies.",
            skills: [
                { name: "Google Ads", value: 85 },
                { name: "Analytics", value: 90 },
                { name: "Branding", value: 80 },
                { name: "Marketing", value: 89 },
            ],
        },
        {
            id: "tab-4",
            name: "Alice Brown",
            role: "Graphic Designer",
            image: "/images/team4.jpg",
            description:
                "Alice is a talented designer with expertise in UI/UX and branding.",
            skills: [
                { name: "Illustrator", value: 90 },
                { name: "Photoshop", value: 95 },
                { name: "Figma", value: 85 },
                { name: "Branding", value: 80 },
            ],
        },
    ];
    const [activeTab, setActiveTab] = useState(teamMembers[0]); // Default to first member
    return (
        <section id="about-us">
            {/* <!--what-we-do-section start--> */}
            <div id="what-we-do" className="padding-one">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 wow fadeInRight  ">
                            <h2>What We Do</h2>

                            <p className="text-center p-margin">Lorem Ipsum is simply dummy text of the printing and typesetting
                                Quisque enim dolor, mauris ac sagittis erat pulvinar leo, sed ultrices ipsum elit sed leo dolor
                                in justo pretium et elit.</p>
                        </div>
                    </div>
                    <div className="row margin-100-top" id="none">
                        <div className="col-sm-4 wow fadeInLeft  ">
                            <div className="row">
                                <div className="col-xs-12 ">
                                    <div className="what-we-do-features margin-100-bottom">
                                        <h3><span><i className="fa fa-gitlab" aria-hidden="true"></i></span>Web Development</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting Donec pulvinar mi
                                            sit amet viverra justo hendrerit.</p>
                                    </div>
                                    <div className="what-we-do-features margin-100-bottom">
                                        <h3><span><i className="fa fa-paper-plane" aria-hidden="true"></i></span>Web Designing</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting Donec pulvinar mi
                                            sit amet viverra justo hendrerit.</p>
                                    </div>
                                    <div className="what-we-do-features">
                                        <h3><span><i className="fa fa-paper-plane" aria-hidden="true"></i></span>Our Misson</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting Donec pulvinar mi
                                            sit amet viverra justo hendrerit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 wow fadeIn  " id="device">
                            <div>
                                <div>
                                    <div id="mobile-img"><img src="images/device.jpg" alt="" />
                                        <div id="mobile-slider" className="owl-carousel owl-theme">
                                            <div className="item"><img src="./images/IOS.png" alt="The Last of us" /></div>
                                            {/* <div className="item"><img src="./images/image_8S.png" alt="GTA V" /></div>
                                            <div className="item"><img src="./images/image_A0.png" alt="Mirror Edge" /></div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 wow fadeInRight  ">
                            <div className="col-xs-12">
                                <div className="row">
                                    <div className="what-we-do-features margin-100-bottom">
                                        <h3 className="text-right"><span className="pull-right"><i className="fa fa-calendar"
                                            aria-hidden="true"></i></span>Our
                                            Values</h3>
                                        <p className="text-right">Lorem Ipsum is simply dummy text of the printing and typesetting
                                            Donec pulvinar mi sit amet viverra justo hendrerit.</p>
                                    </div>
                                    <div className="what-we-do-features margin-100-bottom">
                                        <h3 className="text-right"><span className="pull-right"><i className="fa fa-archive"
                                            aria-hidden="true"></i></span>Our
                                            Locations</h3>
                                        <p className="text-right">Lorem Ipsum is simply dummy text of the printing and typesetting
                                            Donec pulvinar mi sit amet viverra justo hendrerit.</p>
                                    </div>
                                    <div className="what-we-do-features ">
                                        <h3 className="text-right"><span className="pull-right"><i className="fa fa-futbol-o"
                                            aria-hidden="true"></i></span>24/7
                                            Live Support</h3>
                                        <p className="text-right">Lorem Ipsum is simply dummy text of the printing and typesetting
                                            Donec pulvinar mi sit amet viverra justo hendrerit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--what-we-do section end --> */}

            {/* <!--counters table start--> */}
            <div id="counters" className="padding-one text-center">
                <div className="container">
                    <div className="row" id="counter-main">
                        <div className=" col-md-3 col-sm-6 col-xs-6 record  wow fadeInLeft   ">
                            <div className="row ">
                                <div className="col-xs-12 ">
                                    <div className="outer-circle">
                                        <div className="icons"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></div>
                                    </div>
                                    <div className="incrementalNumber numscroller" data-value="100"></div>
                                    <p>Projects</p>
                                </div>
                            </div>
                        </div>
                        <div className=" col-md-3 col-sm-6 col-xs-6 record wow fadeInLeft   ">
                            <div className="row ">
                                <div className="col-xs-12 ">
                                    <div className="outer-circle">
                                        <div className="icons"><i className="fa fa-gitlab" aria-hidden="true"></i></div>
                                    </div>
                                    <div className="incrementalNumber numscroller" data-value="102"></div>
                                    <p>Total Employees</p>
                                </div>
                            </div>
                        </div>
                        <div className=" col-md-3 col-sm-6 col-xs-6 record wow fadeInRight   ">
                            <div className="row counter-margin-3">
                                <div className="col-xs-12">
                                    <div className="outer-circle">
                                        <div className="icons"><i className="fa fa-calendar" aria-hidden="true"></i></div>
                                    </div>
                                    <div className="incrementalNumber numscroller" data-value="12"></div>
                                    <p>Our Offices</p>
                                </div>
                            </div>
                        </div>
                        <div className=" col-md-3 col-sm-6 col-xs-6 record wow fadeInRight  ">
                            <div className="row counter-margin-4">
                                <div className="col-xs-12">
                                    <div className="outer-circle">
                                        <div className="icons"><i className="fa fa-users" aria-hidden="true"></i></div>
                                    </div>
                                    <div className="incrementalNumber numscroller" data-value="400"></div>
                                    <p>Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- counters table end--> */}

            {/* <!--Our team start --> */}
            <div id="our-team" className="padding-one">
                <div className="container">
                    <div className="text-center">
                        <h2>Our Team</h2>
                        <p>
                            Meet our skilled team of professionals dedicated to excellence in
                            their fields.
                        </p>
                    </div>

                    {/* Team Member List */}
                    <div className="row">
                        {teamMembers.map((member) => (
                            <div
                                key={member.id}
                                className="col-xs-3"
                                onClick={() => setActiveTab(member)}
                                style={{ cursor: "pointer" }}
                            >
                                <div className={`hovereffect ${activeTab.id === member.id ? "active" : ""}`}>
                                    <img src={member.image} alt={member.name} />
                                    <div className="overlay">
                                        <h3>{member.name}</h3>
                                        <p>{member.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Active Team Member Details */}
                    <div className="margin-60-top row padding-three our-team-border">
                        <div className="col-sm-7">
                            <p>{activeTab.description}</p>
                            <ul className="list-inline our-team-social">
                                <li>
                                    <a href="#.">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#.">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#.">
                                        <i className="fa fa-google-plus"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Progress Bars */}
                        <div className="col-sm-5 progress-bars">
                            {activeTab.skills.map((skill) => (
                                <div key={skill.name} className="progress skill-bar">
                                    <div
                                        className="progress-bar progress-bar-custom"
                                        role="progressbar"
                                        style={{ width: `${skill.value}%` }}
                                        aria-valuenow={skill.value}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <span>{skill.name} {skill.value}%</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Our team End --> */}
            {/* <!-- Company History --> */}
            <div id="company-history" className="padding-one">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12  wow fadeInRight  ">
                            <h2>Company History</h2>
                            <p className="company-p text-center">Lorem Ipsum is simply dummy text of the printing and
                                typesetting</p>
                            <div className="timline-year">
                                <h3>2016</h3></div>
                            <ul className="timeline">
                                <li className=" wow fadeInLeft  " data-wow-duration="500ms">
                                    <div className="timeline-badge"><a><i className="fa fa-circle"></i></a></div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>Awsome post with HTML5</h4></div>
                                        <div className="timeline-body">
                                            <p>Lorem Ipsum is simply dummy text of the printing and that typesetting Donec
                                                pulvinar mi sit.</p>
                                        </div>
                                        <div className="timeline-footer">
                                            <p>MAY 21, 2016</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-inverted wow fadeInRight  " data-wow-duration="900ms">
                                    <div className="timeline-badge"><a><i className="fa fa-circle invert"></i></a></div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>StudioX is an innovative</h4></div>
                                        <div className="timeline-body">
                                            <p>Lorem Ipsum is simply dummy text of the printing and that typesetting Donec
                                                pulvinar mi sit.</p>
                                        </div>
                                        <div className="timeline-footer">
                                            <p>MAY 21, 2016</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="wow fadeInLeft  " data-wow-duration="500ms">
                                    <div className="timeline-badge"><a><i className="fa fa-circle"></i></a></div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>Digital/Design agency</h4></div>
                                        <div className="timeline-body">
                                            <p>Lorem Ipsum is simply dummy text of the printing and that typesetting Donec
                                                pulvinar mi sit.</p>
                                        </div>
                                        <div className="timeline-footer">
                                            <p>MAY 21, 2016</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-inverted wow fadeInRight  " data-wow-duration="900ms">
                                    <div className="timeline-badge"><a><i className="fa fa-circle invert"></i></a></div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>HTML5 HD video support</h4></div>
                                        <div className="timeline-body">
                                            <p>Lorem Ipsum is simply dummy text of the printing and that typesetting Donec
                                                pulvinar mi sit.</p>
                                        </div>
                                        <div className="timeline-footer">
                                            <p>MAY 21, 2016</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="clearfix no-float"></li>
                            </ul>
                            <div className="timline-year">
                                <h3>2015</h3></div>
                            <ul className="timeline">
                                <li className="wow fadeInLeft  " data-wow-duration="500ms">
                                    <div className="timeline-badge"><a><i className="fa fa-circle"></i></a></div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>Organized Blog to Share</h4></div>
                                        <div className="timeline-body">
                                            <p>Lorem Ipsum is simply dummy text of the printing and that typesetting Donec
                                                pulvinar mi sit.</p>
                                        </div>
                                        <div className="timeline-footer">
                                            <p>MAY 21, 2016</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-inverted wow fadeInRight  " data-wow-duration="900ms">
                                    <div className="timeline-badge"><a><i className="fa fa-circle invert"></i></a></div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>We Always Make Sure you</h4></div>
                                        <div className="timeline-body">
                                            <p>Lorem Ipsum is simply dummy text of the printing and that typesetting Donec
                                                pulvinar mi sit.</p>
                                        </div>
                                        <div className="timeline-footer">
                                            <p>MAY 21, 2016</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="clearfix no-float"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Company History end --> */}
        </section>
    )
}

export default about
