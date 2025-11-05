import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/meta";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Container from "../components/container";
import {useDispatch, useSelector} from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { config } from "../utils/axiosConfig";
import { createAnOrder } from "../feactures/user/userSlice";



const shippingSchema = yup.object().shape({

    firstName: yup.string().required('First Name is Required'),
    lastName: yup.string().required('Last Name is Required'),
    address: yup.string().required('Address is Required'),
    state: yup.string().required('State is Required'),
    city: yup.string().required('City is Required'),
    country: yup.string().required('Country is Required'),
    pincode: yup.string().required('Pincode is Required'),
  });


const Checkout = () => {

    const dispatch = useDispatch();

    const cartState = useSelector(state=>state.auth.productCart)
    const [totalAmount, settotalAmount] = useState(null);
    const [shippingInfo, setShippingInfo] = useState(null);
    const [paymentInfo, setPaymentInfo] = useState({razorpayPaymentId:"", razorpayOrderId:""});
    const [cartProductState, setCartProductState] = useState([]);

    useEffect(()=>{
        let sum = 0;
        for (let index = 0; index < cartState?.length; index++) {
            sum= sum+(Number(cartState[index].quantity)*cartState[index].price) 
            settotalAmount(sum)           
        }
    },[cartState]);
    
    const formik = useFormik({
        initialValues: {
            firstName:'',
            lastName:'',
            address:'',
            state:'',
            city:'',
            country:'',
            pincode:'',
            other:'',
        },
        validationSchema: shippingSchema,

        onSubmit: values => {
            // alert(JSON.stringify(values));
            setShippingInfo(values)
            setTimeout(()=>{
                checkOutHandler()
            },300);
        },
      });

    const loadScript = (src) => {
        return new Promise((resolve) =>{
            const script = document.createElement('script');
            script.src = src;
            script.onload = () =>{
                resolve(true)
            }
            script.onerror = () =>{
                resolve(false)
            }
            document.body.appendChild(script)
        })
      }

    useEffect(()=>{
        let items= [];
        for (let index = 0; index < cartState?.length; index++) { 
            items.push({
                product:cartState[index].productId._id, 
                quantity:cartState[index].quantity, 
                color:cartState[index].color._id, 
                price:cartState[index].price
            }) 
            // console.log(cartState[index]);          
        }
            setCartProductState(items)
    },[])

    const checkOutHandler = async()=>{
        const res = await loadScript('rezorpay link')
        if(!res){
            alert('Razorpay SDK failed to load')
            return;
        }
        const result = await axios.post('http://localhost:5001/api/user/order/checkout', {amount:totalAmount+5}, config)
        if(!result){
            alert('Something Went Wrong')
            return;
        }

        const {amount, id:order_id, currency} = result.data.order

        const options = {
            key: "rzp_test_r6FiJfddJh76SI", // Enter the Key ID generated from the Dashboard
            // amount: amount.toString(),
            amount: amount,
            currency: currency,
            name: "Ecom 01",
            description: "Test Transaction",
            // image: { logo },
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    // razorpaySignature: response.razorpay_signature,
                };

                const result = await axios.post("http://localhost:5001/api/user/order/paymentVerification", data, config);

                // alert(result);

                setPaymentInfo({
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                })

                

                dispatch(createAnOrder({
                    totalPrice:totalAmount, 
                    totalPriceAfterDiscount:totalAmount, 
                    orderItems:[],
                    paymentInfo, 
                    shippingInfo,
                    orderItems: cartProductState,
                }))
            },
            prefill: {
                name: "Ecom 01",
                email: "upekshagayathree98@gmail.com",
                contact: "0788934306",
            },
            notes: {
                address: "Ecom 01 Corporate Office",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
}
    

    return(
        <>
        <Container className="checkout-wrapper home-wrapper-2 py-5 mt-4">
                <div className="row  mt-4">
                    <div className="col-7">
                        <h3 className="website-name">
                            Ecom01
                        </h3>
                        <nav 
                            style={{"--bs-breadcrumb-divider":">"}} 
                            aria-label="breadcrumb"
                        >
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <Link className="text-dark total-price"
                                        to="/cart">
                                        Cart
                                    </Link>
                                </li>
                                    &nbsp; /
                                <li 
                                    class="breadcrumb-item active total-price" 
                                    aria-current="page"
                                >
                                    Information
                                </li>
                                    &nbsp; /
                                <li class="breadcrumb-item active total-price">
                                        Shipping
                                </li>
                                    &nbsp; /
                                <li 
                                    class="breadcrumb-item active total-price" 
                                    aria-current="page"
                                >
                                    Payment
                                </li>
                            </ol>
                        </nav>

                        <h4 className="title total">
                            Contact Information
                        </h4>
                        <p className="user-details total">
                            Upeksha Ariyawansha ( upekshagayathree98@gmail.com )
                        </p>
                        <h4 className="mb-3">
                            Shipping Address
                        </h4>
                        <form
                            className="d-flex flex-wrap gap-15 justify-content-between"
                            action="" 
                            onSubmit={formik.handleSubmit}
                        >
                            <div className="w-100">
                                <select
                                    className="form-control form-select"
                                    id="country"
                                    name="country"
                                    value={formik.values.country} 
                                    onBlur={formik.handleBlur.country} 
                                    onChange={formik.handleChange('country')} 
                                >
                                    <option value="" selected disabled>
                                        Select Country
                                    </option>
                                    <option value="SriLanka">
                                        SriLanka
                                    </option>
                                </select>
                                <div className="error ms-2 my-1">
                                    {formik.touched.country && formik.errors.country}
                                </div>
                            </div>
                            <div className="flex-grow-1">
                                <input 
                                    className="form-control" 
                                    type="text"
                                    placeholder="First Name"
                                    name="firstName"
                                    value={formik.values.firstName} 
                                    onBlur={formik.handleBlur.firstName} 
                                    onChange={formik.handleChange('firstName')} 
                                />
                                <div className="error ms-2 my-1">
                                    {formik.touched.firstName && formik.errors.firstName}
                                </div>
                            </div>
                            <div className="flex-grow-1">
                                <input 
                                    className="form-control" 
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastName"
                                    value={formik.values.lastName} 
                                    onBlur={formik.handleBlur.lastName} 
                                    onChange={formik.handleChange('lastName')} 
                                />
                                <div className="error ms-2 my-1">
                                    {formik.touched.lastName && formik.errors.lastName}
                                </div>
                            </div>
                            <div className="w-100">
                                <input 
                                    className="form-control" 
                                    type="text"
                                    placeholder="Address"
                                    name="address"
                                    value={formik.values.address} 
                                    onBlur={formik.handleBlur.address} 
                                    onChange={formik.handleChange('address')} 
                                />
                                <div className="error ms-2 my-1">
                                    {formik.touched.address && formik.errors.address}
                                </div>
                            </div>
                            <div className="w-100">
                                <input 
                                    className="form-control" 
                                    type="text"
                                    placeholder="Apartment, Suite, etc"
                                    name="other"
                                    value={formik.values.other} 
                                    onBlur={formik.handleBlur.other} 
                                    onChange={formik.handleChange('other')} 
                                />
                                <div className="error ms-2 my-1">
                                    {formik.touched.other && formik.errors.other}
                                </div>
                            </div>
                            <div>
                                <input 
                                    className="form-control" 
                                    type="text"
                                    placeholder="City"
                                    name="city"
                                    value={formik.values.city} 
                                    onBlur={formik.handleBlur.city} 
                                    onChange={formik.handleChange('city')} 
                                />
                                <div className="error ms-2 my-1">
                                    {formik.touched.country && formik.errors.country}
                                </div>
                            </div>
                            <div className="flex-grow-1">
                                <select
                                    className="form-control form-select"
                                    id=""
                                    name="state"
                                    value={formik.values.state} 
                                    onBlur={formik.handleBlur.state} 
                                    onChange={formik.handleChange('state')} 
                                >
                                    <option value="" selected disabled>
                                        Select State
                                    </option>
                                    <option value="Polonnaruwa">
                                        Polonnaruwa
                                    </option>
                                </select>
                                <div className="error ms-2 my-1">
                                    {formik.touched.country && formik.errors.country}
                                </div>
                            </div>
                            <div className="flex-grow-1">
                                <input 
                                    className="form-control" 
                                    type="text"
                                    placeholder="Zip Code"
                                    name="pincode"
                                    value={formik.values.pincode} 
                                    onBlur={formik.handleBlur.pincode} 
                                    onChange={formik.handleChange('pincode')} 
                                />
                                <div className="error ms-2 my-1">
                                    {formik.touched.country && formik.errors.country}
                                </div>
                            </div>
                            <div className="w-100 mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <Link className="text-dark" 
                                        to="/cart">
                                        <IoMdArrowRoundBack className="me-1"/>
                                        Return to Cart
                                    </Link>
                                    <Link className="button"
                                        to="/cart">
                                        Continue to Shipping
                                    </Link>
                                    <button className="button" type="submit">
                                        Place Order
                                    </button>

                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="col-5">
                        <div className="border-bottom py-4">
                            {
                                cartState && cartState?.map((item, index)=>{
                                    return(
                                        <div key={index} className="d-flex align-items-center gap-10 mb-2">
                                            <div className="d-flex gap-10 w-75">
                                                <div className="w-25 position-relative">
                                                    <span 
                                                        className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                                                        style={{top: "-10px", right: "-5px"}}
                                                    >
                                                       {item?.quantity}
                                                    </span>
                                                    <img 
                                                        // className="img-fluid" 
                                                        width={100} height={100}
                                                        // src="images/watch.jpg" 
                                                        src={item?.productId?.images[0].url}
                                                        alt="product-item"
                                                    />
                                                </div>
                                                <div>
                                                    <h5 className="total-price">
                                                        {item?.productId?.title}
                                                    </h5>
                                                    <p className="total-price">
                                                        {item?.color?.title}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h5 className="total">
                                                    LKR {item?.price * item?.quantity}
                                                </h5>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        

                        <div className="border-bottom py-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="total">Sub Total</p>
                                <p className="total-price">LKR {totalAmount?totalAmount:"0"}</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="mb-0 total">Shipping</p>
                                <p className="mb-0 total-price">LKR 300</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                            <h4 className="total">Total</h4>
                            <h5 className="total-price">LKR {totalAmount?totalAmount+500:"0"}</h5>
                        </div>
                    </div>
                </div>
        </Container>
        </>
    )
}

export default Checkout;