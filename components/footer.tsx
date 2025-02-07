import React from 'react'

const footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <p>Copyright &copy; 2016 StudioX. All rights reserved.</p>
                    </div>
                    <div className="col-sm-6 pull-right  ">
                        <ul className="list-inline pull-right ">
                            <li><a href="#." className="fa fb"><i className="fa fa-fw fa-facebook"></i></a></li>
                            <li><a href="#." className="fa tw"><i className="fa fa-fw fa-twitter"></i></a></li>
                            <li><a href="#." className="fa gp"><i className="fa fa-fw fa-google-plus"></i></a></li>
                            <li><a href="#." className="fa gp"><i className="fa fa-fw fa-google-plus"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default footer
