import React, { Component, Fragment } from 'react';
import './Assets/CSS/bootstrap.css';
import './Assets/CSS/styles.css';

class header extends Component {
    render() {
        return (
            <Fragment>
                {/* <!-- HEADER --> */}
                <header className="container-fluid">
                    {/* <!-- Navigation --> */}
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container">
                            {/* <!-- BrandLogo & Burger --> */}
                            <a className="navbar-brand logo fw-bold txt-purple" href="./index.html">shayna</a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#open-navbar"
                                aria-controls="navbarTogglerDemo02"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            {/* <!-- BrandLogo & Burger --> */}
                            <div className="collapse navbar-collapse" id="open-navbar">
                                <ul className="navbar-nav ms-auto mb-4 mb-lg-0">
                                    <li className="nav-item mx-3 lg-px-1 ms-0">
                                        <a className="nav-link" href="#">Home</a>
                                    </li>
                                    <li className="nav-item mx-3 px-lg-1 ms-0">
                                        <a className="nav-link" href="#">Pricing</a>
                                    </li>
                                    <li className="nav-item mx-3 px-lg-1 ms-0">
                                        <a className="nav-link active txt-purple" aria-current="page" href="#">
                                            Features
                                        </a>
                                    </li>
                                    <li className="nav-item mx-3 px-lg-1 ms-0">
                                        <a className="nav-link" href="#">Clients</a>
                                    </li>
                                    <li className="nav-item mx-3 px-lg-1 ms-0">
                                        <a className="nav-link" href="#">Stories</a>
                                    </li>
                                    <li className="nav-item mx-3 ms-0 px-lg-1 me-0">
                                        <a className="" href="">
                                            <button className="btn text-uppercase bg-purple
                                        px-4 text-white" type="submit">
                                                Sign Up
                                            </button>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* <!-- Navigation --> */}
                </header>
                {/* <!-- HEADER --> */}
            </Fragment>
        );
    }
}

export default header;