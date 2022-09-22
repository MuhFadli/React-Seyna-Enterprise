import React, { Component, Fragment } from 'react';
import './Assets/CSS/bootstrap.css';
import './Assets/CSS/styles.css';

import printer from './Assets/Icons/004-printer.svg';
import shield from './Assets/Icons/003-shield.svg';
import chip from './Assets/Icons/002-chip.svg';
import exchanging from './Assets/Icons/005-exchanging.svg';
import database from './Assets/Icons/001-database.svg';
import wifi from './Assets/Icons/006-wifi.svg';

class body extends Component {
    render() {
        return (
            <Fragment>
                <main>
                    {/* <!-- FEATURES --> */}
                    <section className="container-fluid E-features py-5">
                        <content>
                            <article className="container py-5 my-4">
                                <div className="text-center in-features py-lg-0 pb-4">
                                    <h1 className="fw-bolder txt-purple txt-head">Enterprise Features</h1>
                                    <p className="txt-gray txt-subhead">
                                        We will help to grow your own company
                                    </p>
                                </div>
                                <div className="text-center">
                                    {/* <!-- row1 --> */}
                                    <div className="row row-cols-1 row-cols-md-3 g-4 py-2">
                                        {/* <!-- col 1 --> */}
                                        <div className="col py-lg-2 py-md-4">
                                            <div className="card border-0 h-100">
                                                <div className="icons my-2">
                                                    <img src={printer} className="card-img-top" alt="icon-printer"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title txt-purple py-1">Automatically</h5>
                                                    <p className="card-text txt-gray">
                                                        No need to hassle anymore for
                                                        <br />
                                                        doing data that you need
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- col 2 --> */}
                                        <div className="col py-lg-2 py-md-4 bg-white">
                                            <div className="card border-0 h-100">
                                                <div className="icons my-2">
                                                    <img src={shield} className="card-img-top" alt="icon-shield"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title txt-purple py-1">
                                                        Privacy
                                                        First
                                                    </h5>
                                                    <p className="card-text txt-gray">
                                                        We want to keep our customer
                                                        <br />
                                                        data is safe and sound
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- col 3 --> */}
                                        <div className="col py-lg-2 py-md-4">
                                            <div className="card border-0 h-100">
                                                <div className="icons my-2">
                                                    <img src={chip} className="card-img-top" alt="icon-chip"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title txt-purple py-1">
                                                        10X
                                                        Faster
                                                    </h5>
                                                    <p className="card-text txt-gray">
                                                        We use a new brand of chip
                                                        <br />
                                                        that let you work faster
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- row2 --> */}
                                    <div className="row row-cols-1 row-cols-md-3 g-4 py-2">
                                        {/* <!-- col 1 --> */}
                                        <div className="col py-lg-2 py-md-4">
                                            <div className="card border-0 h-100">
                                                <div className="icons my-2">
                                                    <img src={exchanging}
                                                        className="card-img-top" alt="icon-exchanging"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title txt-purple py-1">
                                                        Repeat
                                                        Scene
                                                    </h5>
                                                    <p className="card-text txt-gray">
                                                        Once you found the best
                                                        <br />
                                                        that you can save it for later
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- col 2 --> */}
                                        <div className="col py-lg-2 py-md-4 bg-white">
                                            <div className="card border-0 h-100">
                                                <div className="icons my-2">
                                                    <img src={database}
                                                        className="card-img-top" alt="icon-database"
                                                    />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title txt-purple py-1">
                                                        Multiple
                                                        Database
                                                    </h5>
                                                    <p className="card-text txt-gray">
                                                        Your database is safely from
                                                        <br />
                                                        any attack such as DDOS
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- col 3 --> */}
                                        <div className="col py-lg-2 py-md-4">
                                            <div className="card border-0 h-100">
                                                <div className="icons my-2">
                                                    <img src={wifi} className="card-img-top" alt="icon-wifi"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title txt-purple py-1">
                                                        Control
                                                        Remotely
                                                    </h5>
                                                    <p className="card-text txt-gray">
                                                        Access from anywhere that
                                                        <br />
                                                        we provide the apps
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </content>
                    </section>
                    {/* <!-- FEATURES --> */}
                    {/* <!-- PACKAGES --> */}
                    <section className="container-fluid packages pb-0 py-5">
                        <content>
                            <article className="container">
                                <div className="text-center in-packages py-2">
                                    <h1 className="fw-bolder txt-purple txt-head">Friendly Packages</h1>
                                    <p className="txt-gray txt-subhead">
                                        The price that we set is actually you can afford
                                    </p>
                                </div>
                                {/* <!-- paket 1 --> */}
                                <div className="d-flex justify-content-center flex-wrap">
                                    <div className="card mb-5 mx-lg-3 mx-md-2 mt-5 border-light bg-white shadow-sm border-radius-10"
                                    style={{maxWidth: 20 + 'rem'}}
                                    >
                                        <div className="card-body txt-purple bg-white border-radius-10">
                                            <h1 className="fw-bolder txt-highest">
                                                $17
                                                <span className="fs-6 fw-normal">/ quarter</span>
                                            </h1>
                                            <p className="pt-2 fw-light">
                                                Good for big companies and need complete features
                                            </p>
                                            <hr className="my-4" />
                                            <p className="py-1">
                                                <span className="checked bg-blue text-white me-2">&#10003;</span>
                                                Include Basic Features
                                            </p>
                                            <p className="py-1">
                                                <span className="checked bg-blue text-white me-2">&#10003;</span>
                                                Full Support 24/7
                                            </p>
                                            <p className="py-1">
                                                <span className="checked bg-blue text-white me-2">&#10003;</span>
                                                Special Mentoring
                                            </p>
                                            <p className="py-1">
                                                <span className="checked bg-blue text-white me-2">&#10003;</span>
                                                Multiple Integration
                                            </p>
                                            <p className="py-1">
                                                <span className="checked bg-blue text-white me-2">&#10003;</span>
                                                Unlimited Drive
                                            </p>
                                            <p className="py-1">
                                                <span className="checked bg-blue text-white me-2">&#10003;</span>
                                                All Bot Activated
                                            </p>
                                            <a href="">
                                                <button className="btn text-uppercase bg-blue w-100 text-white my-2" type="button">
                                                    Trial First
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                    {/* <!-- paket 2 --> */}
                                    <div className="card mb-5 mx-lg-3 mx-md-2 border-purple bg-white
                                         shadow-sm border-radius-10" style={{maxWidth: 20 + 'rem'}}
                                    >
                                        <div className="bg-purple card-header text-white text-center">
                                            <span className="txt-subhead">
                                                Most Company Choice
                                            </span>
                                        </div>
                                        <div className="card-body txt-purple bg-white border-radius-10">
                                            <h1 className="fw-bolder txt-highest">
                                                $999
                                                <span className="fs-6 fw-normal">/ lifetime</span>
                                            </h1>
                                            <p className="pt-2 fw-light">
                                                Good for big companies and need complete features
                                            </p>
                                            <hr className="my-4" />
                                            <p className="py-1">
                                                <span className="checked bg-purple text-white me-2">&#10003;</span>
                                                Include Basic Features
                                            </p>
                                            <p className="py-1">
                                                <span className="checked bg-purple text-white me-2">&#10003;</span>
                                                Full Support 24/7
                                            </p>
                                            <p className="py-1">
                                                <span className="checked bg-purple text-white me-2">&#10003;</span>
                                                Special Mentoring
                                            </p>
                                            <p className="py-1">
                                                <span className="checked bg-purple text-white me-2">&#10003;</span>
                                                Multiple Integration
                                            </p>
                                            <p className="py-1">
                                                <span className="checked bg-purple text-white me-2">&#10003;</span>
                                                Unlimited Drive
                                            </p>
                                            <p className="py-1">
                                                <span className="checked bg-purple text-white me-2">&#10003;</span>
                                                All Bot Activated
                                            </p>
                                            <a href="">
                                                <button className="btn text-uppercase bg-purple w-100 text-white my-2" type="button">
                                                    Get Started
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </content>
                    </section>
                    {/* <!-- PACKAGES --> */}
                    <div className="text-center bg-info bg-opacity-10 bg-overlay">
                        <div className="py-5">
                            <p className="txt-purple fw-light">
                                No credit card required and
                                cancel package anytime
                            </p>
                            <a href="">
                                <span className="text-decoration-underline txt-purple fw-normal">
                                    Terms
                                    & Conditions
                                </span>
                            </a>
                        </div>
                    </div>
                    {/* <!-- TESTIMONI --> */}
                    <section className="container-fluid bg-purple text-white text-center p-4 testimoni m-0">
                        <content>
                            <article className="container" >
                                <div className="w-75 mx-auto px-lg-4 py-4 pt-5 teks-testimoni">
                                    <p className="fs-5 px-lg-4 pb-0 fw-light">
                                        <span className="quotation">
                                            <i>&bdquo;</i>
                                        </span>
                                        I was worried about the company’s data and I found&nbsp;
                                        <a href=""><span className="text-white">Shayna could handle all</span></a>
                                        &nbsp;of our transactions. Feel safe and sound!
                                    </p>
                                </div>
                                <div className="w-100 h-100 gambar-testimoni">
                                    <img
                                        src={require('./Assets/Images/image.png')}
                                        alt="user/person"
                                        className="py-3"
                                    />
                                    <p className="m-0 name fw-normal">Rahayu Putri Alisiana</p>
                                    <p className="m-0 py-2 fw-light txt-gray job">Data Scientist</p>
                                </div>
                            </article>
                        </content>
                    </section>
                    {/* <!-- TESTIMONI --> */}
                </main>
            </Fragment>
        );
    }
}

export default body;