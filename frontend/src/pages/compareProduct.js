import React from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/meta";
import {NavLink, Link} from "react-router-dom";
import Color from "../components/color";
import Container from "../components/container";

const CompareProduct = () => {
    return ( 
        <>
            <Meta title="Compare Product"/>
            <BreadCrumb title="Compare Product"/>  
            
            <Container class1="compare-product-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img
                                    className="position-absolute cross img-fluid"
                                    src="images/cross.svg"
                                    alt="cross"
                                />

                                <div className="product-card-image">
                                    <img
                                        src="images/laptop.jpg"
                                        alt="watch"
                                    />
                                </div>

                                <div className="compare-product-details">
                                    <h5 className="title">
                                        Lorem ipsum, or lipsum as it is sometimes known
                                    </h5>
                                    <h6 className="price mb-3 mt-3">
                                        LKR 1000
                                    </h6>

                                    <div className="product-details">
                                        <h5>
                                            Brand :
                                        </h5>
                                        <p>
                                            Apple
                                        </p>
                                    </div>

                                    <div className="product-details">
                                        <h5>
                                            Type :
                                        </h5>
                                        <p>
                                            Laptop
                                        </p>
                                    </div>

                                    <div className="product-details">
                                        <h5>
                                            Availability :
                                        </h5>
                                        <p>
                                            In Stock
                                        </p>
                                    </div>

                                    <div className="product-details">
                                        <h5>
                                            Color :
                                        </h5>
                                        
                                           <Color/>
                                      
                                    </div>

                                    <div className="product-details">
                                        <h5>
                                            Size :
                                        </h5>
                                        <div className="d-flex gap-10">
                                            <p>S</p>
                                            <p>M</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img
                                    className="position-absolute cross img-fluid"
                                    src="images/cross.svg"
                                    alt="cross"
                                />

                                <div className="product-card-image">
                                    <img
                                        src="images/laptop.jpg"
                                        alt="watch"
                                    />
                                </div>

                                <div className="compare-product-details">
                                    <h5 className="title">
                                        Lorem ipsum, or lipsum as it is sometimes known
                                    </h5>
                                    <h6 className="price mb-3 mt-3">
                                        LKR 1000
                                    </h6>

                                    <div className="product-details">
                                        <h5>
                                            Brand :
                                        </h5>
                                        <p>
                                            Apple
                                        </p>
                                    </div>

                                    <div className="product-details">
                                        <h5>
                                            Type :
                                        </h5>
                                        <p>
                                            Laptop
                                        </p>
                                    </div>

                                    <div className="product-details">
                                        <h5>
                                            Availability :
                                        </h5>
                                        <p>
                                            In Stock
                                        </p>
                                    </div>

                                    <div className="product-details">
                                        <h5>
                                            Color :
                                        </h5>
                                        
                                           <Color/>
                                      
                                    </div>

                                    <div className="product-details">
                                        <h5>
                                            Size :
                                        </h5>
                                        <div className="d-flex gap-10">
                                            <p>S</p>
                                            <p>M</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
            </Container>
        </>
    )
    }

    export default CompareProduct;
    