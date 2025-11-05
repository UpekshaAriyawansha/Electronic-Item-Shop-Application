import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import Container from "../components/container";
import BreadCrumb from "../components/breadCrumb";
import { getUserOrder } from "../feactures/user/userSlice";


const Orders = () =>{

    const dispatch = useDispatch();
    const orderState = useSelector(state=>state.auth.getOrderdProduct.orders);

    console.log(orderState)

    useEffect(()=>{
        dispatch(getUserOrder())
    },[])

    return(
        <>
        <BreadCrumb title='My Orders'/>
        <Container class1="cart-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-3">
                            <h5>Order Id</h5>
                        </div>

                        <div className="col-3">
                            <h5>Total Amount</h5>
                        </div>

                        <div className="col-3">
                            <h5>Total Amount after Discount</h5>
                        </div>

                        <div className="col-3">
                            <h5>Status</h5>
                        </div>
                    </div>

                    <div className="col-12 mt-3">
                        {
                            orderState && orderState?.map((item, index)=>{
                                return(
                                    <>
                                    <div className="row pt-3 my-3" style={{backgroundColor:"#febd69"}} key={index}>
                                        <div className="col-3">
                                            <p>{item?._id}</p>
                                        </div>

                                        <div className="col-3">
                                            <p>{item?.totalPrice}</p>
                                        </div>

                                        <div className="col-3">
                                            <p>{item?.totalPriceAfterDiscount}</p>
                                        </div>

                                        <div className="col-3">
                                            <p>{item?.orderStatus}</p>
                                        </div>
                                    </div>

                                <div className="col-12">
                                    <div className="row bg-secondary p-3 mt-4">
                                        <div className="col-3">
                                            <h6>Product Name</h6>
                                        </div>

                                        <div className="col-3">
                                            <h6>Quantity</h6>
                                        </div>

                                        <div className="col-3">
                                            <h6>Price</h6>
                                        </div>

                                        <div className="col-3">
                                            <h6>Color</h6>
                                        </div>
                                    </div>
                                </div>

                                {
                                    item?.orderItems?.map((i, index)=>{
                                        return(
                                            <>
                                            <div className="col-12">
                                                <div className="row bg-secondary p-3 mt-4">
                                                    <div className="col-3">
                                                        <p>{i?.product?.title}</p>
                                                    </div>

                                                    <div className="col-3">
                                                        <p>{i?.quantity}</p>
                                                    </div>

                                                    <div className="col-3">
                                                        <p>{i?.price}</p>
                                                    </div>

                                                    <div className="col-3">
                                                        <p>
                                                            <ul className="colors ps-0">
                                                                <li 
                                                                    style={{backgroundColor:i?.color}} 
                                                                > </li>
                                                            </ul></p>
                                                    </div>
                                                </div>
                                            </div>
                                            </>
                                        )
                                    })
                                }
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Container>
        </>
    )
}

export default Orders;