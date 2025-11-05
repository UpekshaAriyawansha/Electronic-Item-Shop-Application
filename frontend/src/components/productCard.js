import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import {useDispatch, useSelector} from 'react-redux';
import { addWishlist } from "../feactures/products/productSlice";

const ProductCard = (props) => {

    const {grid, data} = props;
        // console.log(data);
    let location = useLocation();
    // console.log(location);
    const dispatch = useDispatch();

    const addToWishlist = (id) => {
        dispatch(addWishlist(id));
        alert(id);
    };

    return (
        <>
        {
            data && data.map((item, index) =>{
            // data?.map((item, index) =>{
                return(
                    <div 
                        key={index}
                        className={`${location.pathname == "/product" ? `gr-${grid}`:"col-3"}`}>
                            <Link className="product-card position-relative"
                            // to={`${location.pathname == "/" ? "product/:id" : ":id"}`}>
                            // to={`(${location.pathname == "/"} || ${location.pathname == "/"})
                            // ? "product/:id" : ":id"}`}>
                            // to={`${location.pathname == "/" ? "product/:id" :location.pathname == "/product/:id" ? "/product/1": ":id"}`}
                                
                            // to={`${location.pathname == "/" 
                            //     ? "product/:id" 
                            //     :location.pathname == "/product/:id" 
                            //     ? "/product/:id"
                            //     : ":id"}`}
                            >
                                
                            <div className="wishlist-icon position-absolute">
                                    <button 
                                        className="border-0 bg-transparent"
                                        onClick={(e) => {addToWishlist(item?._id);}}    
                                    >
                                    <img src="images/wish.svg" alt="wishlist"/>
                                    </button>
                                </div>

                                <div className="product-image">
                                    <img className="img-fluid d-block mx-auto" width={160}
                                    // src={item.images[0].url} alt="product-cart"/>
                                    src={item.images[0]} alt="product-cart"/>
                                    
                                    <img className="img-fluid d-block mx-auto" width={160}
                                    // src={item.images[0].url} alt="product-cart"/>
                                    src={item.images[0]} alt="product-cart"/>
                                </div>
                                <div className="blog-product-details">
                                    <h6 className="brand">{item?.brand}</h6>
                                    <h5 className="product-title">{item?.title}</h5>
                                    <ReactStars
                                        count={5}
                                        // onChange={ratingChanged}
                                        size={24}
                                        value={item?.totalrating.toString()}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className={`description ${grid === 12 ? "d-block":"d-none"}`}>
                                    <p dangerouslySetInnerHTML={{ __html: item?.description }} />
                                        {/* {item?.description} */}
                                    {/* In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. */}
                                    </p>
                                    <p className="price">LKR {item?.price}</p>
                                </div>

                                <div className="action-bar position-absolute">
                                    <div className="d-flex flex-column gap-15">
                                        <button className="border-0 bg-transparent">
                                            <img src="images/prodcompare.svg" alt="compare"/>
                                        </button>
                                        <Link className="border-0 bg-transparent"
                                            to={'/product/' + item?._id}
                                        >
                                            <img src="images/view.svg" alt="view"/>
                                        </Link>
                                        <button className="border-0 bg-transparent">
                                            <img src="images/add-cart.svg" alt="add-cart"/>
                                        </button>
                                    </div>
                                </div>
                            </Link>
                    </div>
                )
            })
        }



         
{/*  <div 
         className={`${location.pathname == "/product" ? `gr-${grid}`:"col-3"}`}>
            <Link className="product-card position-relative"
                to={`${location.pathname == "/" 
                ? "product/:id" 
                :location.pathname == "/product/:id" 
                ? "/product/:id"
                : ":id"}`}  
            >
                  <div className="wishlist-icon position-absolute">
                    <button className="border-0 bg-transparent">
                    <img src="images/wish.svg" alt="wishlist"/>
                    </button>
                </div>

                <div className="product-image">
                    <img className="img-fluid"
                    src="images/tab3.jpg" alt="product-cart"/>
                     <img className="img-fluid"
                    src="images/watch.jpg" alt="product-cart"/>
                </div>
                <div className="blog-product-details">
                    <h6 className="brand">Canon</h6>
                    <h5 className="product-title">Lorem ipsum</h5>
                    <ReactStars
                        count={5}
                        // onChange={ratingChanged}
                        size={24}
                        value="3"
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className={`description ${grid === 12 ? "d-block":"d-none"}`}>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                    </p>
                    <p className="price">LKR 100.00</p>
                </div>

                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                        <button className="border-0 bg-transparent">
                            <img src="images/prodcompare.svg" alt="compare"/>
                        </button>
                        <button className="border-0 bg-transparent">
                            <img src="images/view.svg" alt="view"/>
                        </button>
                        <button className="border-0 bg-transparent">
                            <img src="images/add-cart.svg" alt="add-cart"/>
                        </button>
                    </div>
                </div>
            </Link>
         </div>
    */}
        </>
    )
   

};

export default ProductCard;