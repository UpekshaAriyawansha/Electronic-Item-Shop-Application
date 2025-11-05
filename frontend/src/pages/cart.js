import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/meta";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Container from "../components/container";
import {useDispatch, useSelector} from 'react-redux';
import { getUserCart, removeCartProduct, updateCartProduct } from "../feactures/user/userSlice";


const Cart = () => {

    const dispatch = useDispatch();

    // const [quantity, setQuantity] = useState(null);

    const [productUpdateDetail, setproductUpdateDetail] = useState(null);
    const [totalAmount, settotalAmount] = useState(null);

    const userCartState = useSelector(state=>state.auth.productCart)

    useEffect (()=>{
        dispatch(getUserCart())
    },[])

    useEffect (()=>{
        if(productUpdateDetail!==null){
                dispatch(updateCartProduct({cartItemId:productUpdateDetail?.cartItemId, quantity:productUpdateDetail?.quantity}))
                setTimeout(()=>{
                    dispatch(getUserCart())
                },200)
            }
        },[productUpdateDetail])

    const deleteProductFromCart = (id) => {
        dispatch(removeCartProduct(id))
        setTimeout(()=>{
            dispatch(getUserCart())
        },200)
    }

// console.log(userCartState)

    useEffect(()=>{
        let sum = 0;
        for (let index = 0; index < userCartState?.length; index++) {
            sum= sum+(Number(userCartState[index].quantity)*userCartState[index].price) 
            settotalAmount(sum)           
        }
    },[userCartState]);

   
    return(
        <>
        <Meta title={"Cart"}/>
        <BreadCrumb title={"Cart"}/>

        <Container class1="cart-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="cart-header d-flex justify-content-between align-items-center py-3">
                            <h4 className="cart-col-1">Product</h4>
                            <h4 className="cart-col-2">Price</h4>
                            <h4 className="cart-col-3">Quantity</h4>
                            <h4 className="cart-col-4">Total</h4>
                        </div>

                            {
                                userCartState && userCartState?.map((item, index) =>{
                                    return (
                                            <div key={index} className="cart-data d-flex justify-content-between align-items-center py-3 mb-2">
                                                <div className="cart-col-1 d-flex align-items-center gap-15">
                                                    <div className="w-25">
                                                        <img className="img-fluid"
                                                            src="images/watch.jpg" alt="product-image"/>
                                                    </div>
                                                    <div className="w-75">
                                                        <p>
                                                        {item?.productId.title}
                                                            {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. */}
                                                        </p>
                                                        <p>
                                                            Size : S
                                                        </p>
                                                        <p className="d-flex gap-3">
                                                            Color : 
                                                                <ul className="colors ps-0">
                                                                    <li 
                                                                        style={{backgroundColor:item?.title}} 
                                                                    > </li>
                                                                </ul>
                                                        </p>
                                                    </div>
                                                </div>
                                                
                                                <div className="cart-col-2">
                                                    <h5 className="price">
                                                        LKR {item?.price}
                                                    </h5>
                                                </div>

                                                <div className="cart-col-3 d-flex align-items-center gap-15">
                                                    <div>
                                                        <input
                                                            className="form-control"
                                                            type="number"
                                                            name=""
                                                            id=""
                                                            min={1}
                                                            max={10}
                                                            value={productUpdateDetail?.quantity ? productUpdateDetail?.quantity: item?.quantity}
                                                            onChange={(e)=>{setproductUpdateDetail({cartItemId:item?._id, quantity:e.target.value})}}
                                                        />
                                                    </div>
                                                    <div>
                                                        <MdDelete 
                                                            className="text-danger fs-4"
                                                            onClick={()=>{deleteProductFromCart(item._id)}}
                                                         />
                                                    </div>
                                                </div>
                                                <div className="cart-col-4">
                                                    <h5 className="price">
                                                        LKR {item?.price * item?.quantity}
                                                    </h5>
                                                </div>
                                            </div>
                                    )
                                })
                            }

                        {/* <div className="cart-data d-flex justify-content-between align-items-center py-3 mb-2">
                            <div className="cart-col-1 d-flex align-items-center gap-15">
                                <div className="w-25">
                                    <img className="img-fluid"
                                        src="images/watch.jpg" alt="product-image"/>
                                </div>
                                <div className="w-75">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                    <p>
                                        Size : S
                                    </p>
                                    <p>
                                        Color : #FFFFFF
                                    </p>
                                </div>
                            </div>
                            
                            <div className="cart-col-2">
                                <h5 className="price">
                                    LKR 1000
                                </h5>
                            </div>

                            <div className="cart-col-3 d-flex align-items-center gap-15">
                                <div>
                                    <input
                                        className="form-control"
                                        type="number"
                                        name=""
                                        id=""
                                        min={1}
                                        max={10}
                                    />
                                </div>
                                <div>
                                    <MdDelete className="text-danger fs-4" />
                                </div>
                            </div>
                            <div className="cart-col-4">
                                <h5 className="price">
                                    LKR 1000
                                </h5>
                            </div>
                        </div> */}

                        <div className="col-12 py-2 mt-4">
                            <div className="d-flex justify-content-between align-items-baseline">
                                <Link className="button"
                                    to="/product">
                                    Continue To Shopping
                                </Link>

                                {
                                    (totalAmount !== null || totalAmount !== 0) && 
                                        <div className="d-flex flex-column align-items-end">
                                            <h4>SubTotal : LKR {totalAmount}</h4>
                                            <p>Taxes snd shipping calculated at checkout</p>
                                            <Link className="button"
                                                to="/checkout">
                                                Checkout
                                            </Link>
                                        </div>
                                }    
                            </div>

                        </div>
                        
                    </div>
                </div>
        </Container>


        </>
        
        )
}

export default Cart