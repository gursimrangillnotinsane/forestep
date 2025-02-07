import React from 'react'

const footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <p>Copyright &copy; 2025 ForeStep Infotech. All rights reserved.</p>
                    </div>
                    <div className="col-sm-6 pull-right  ">
                        <ul className="list-inline pull-right ">
                            <li><a href="https://www.facebook.com/profile.php?id=61560455467426&mibextid=wwXIfr&rdid=qv2RywwsDf3GIhMd&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18eWZ5LKG2%2F%3Fmibextid%3DwwXIfr" className="fa fb"><i className="fa fa-fw fa-facebook"></i></a></li>
                            <li><a href="https://www.instagram.com/forestepinfotech/" className="fa ig"><i className="fa fa-fw fa-instagram"></i></a></li>
                            {/* <li><a href="#." className="fa gp"><i className="fa fa-fw fa-google-plus"></i></a></li>
                            <li><a href="#." className="fa gp"><i className="fa fa-fw fa-google-plus"></i></a></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default footer
