import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.jpeg';
function Header() {
  return (
    <div>
        <div className="header container-fluid bg-white">
            <div id="menu-jk" className="nav-col text-white shadow-md mb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pt-2 pb-2 align-items-center">
                            <Link to="/voting">
                            <img className="max-230 mt-2" src={Logo} alt="" height="60"/>
                            </Link>
                            <a  data-bs-toggle="collapse" data-bs-target="#menu" className="float-end text-dark d-lg-none pt-1 ps-3"><i className="bi pt-1 fs-1 cp bi-list"></i></a>
                        </div>
                        <div id="menu" className="col-lg-6 d-none d-lg-block">
                            <ul className="float-end mul d-inline-block">
                                {/* <li className="float-md-start px-4 pe-1 pt-4">
                                    <Link to="/result" className="fw-bold fs-8 text-primary">View Result</Link>
                                </li> */}

                                <li className="float-md-start px-4 pe-1 py-3">
                                    <button className="btn fw-bold fs-8 btn-primary">Logout</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header