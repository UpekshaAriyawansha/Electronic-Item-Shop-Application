import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/meta";
import Container from "../components/container";
import {useDispatch, useSelector} from 'react-redux';
import { getUserProductWishlist } from "../feactures/user/userSlice";
import { addWishlist } from "../feactures/products/productSlice";

const Wishlist =()=>{

    const dispatch = useDispatch();
    
    useEffect(() => {
        getWishlistFromDb();
    },[]);

    const getWishlistFromDb = () => {
        dispatch(getUserProductWishlist());
    };

    // const wishlistState = useSelector((state)=>state.auth.wishlist.wishlist);
    const wishlistState = useSelector((state)=>state?.auth?.wishlist?.wishlist);

    const removeFromWishlist = (id) =>{
        dispatch(addWishlist(id));
        setTimeout(()=>{
            dispatch(getUserProductWishlist());
        },300)
    };

    console.log(wishlistState);

    return(
        <>
            <Meta title="Wishlist"/>
            <BreadCrumb title="Wishlist"/>

            <Container className="wishlist-wrapper home-wrapper-2 py-5">
                    <div className="row">

                        {
                            // wishlistState.length === 0 && <div> No Data </div>
                            
                            /wishlistState === 0 && <div className="text-center fs-3"> No Data </div>

                            wishlistState && wishlistState.length === 0 && <div className="text-center fs-3"> No Data </div>

                        }

                        {
                            wishlistState && wishlistState?.map((item,index)=>{
                                return (
                                    <div className="col-3" key={index}>
                                        <div className="wishlist-card position-relative">
                                            <img
                                                className="position-absolute cross img-fluid"
                                                src="images/cross.svg"
                                                alt="cross"
                                                onClick={()=>{
                                                    removeFromWishlist(item?._id);
                                                }}
                                            />
                                            <div className="wishlist-card-image bg-white">
                                                <img
                                                    className="img-fluid d-block mx-auto"
                                                    width={160}
                                                    // src="images/laptop.jpg"
                                                    src={item?.images[0].url?item?.images[0].url:"images/laptop.jpg"}
                                                    alt="watch"
                                                />
                                            </div>
                                
                                            <div className="px-3 py-2">
                                                <h5 className="title">
                                                    {/* Lorem ipsum, or lipsum as it is sometimes known */}
                                                    {item?.title}
                                                </h5>
                                                <h6 className="price mb-3 mt-3">
                                                    {/* LKR 1000 */}
                                                    {item?.price}
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
            </Container>
        </>
    )
}

export default Wishlist;