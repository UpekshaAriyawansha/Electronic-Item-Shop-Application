import React, { useState } from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/meta";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../components/container";
import CustomInput from "../components/customInput";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';


const profileSchema = Yup.object().shape({
    firstname: Yup.string().required('First Name is Required'),
    lastname: Yup.string().required('Last Name is Required'),
    email: Yup.string().email('Email should be valid').required('Email Address is Required'),
    mobile: Yup.string().required('Mobile Number is Required'),
  });

const Profile = () =>{

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userState = useSelector(state=>state.auth.user)

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            firstname:'',
            lastname: '',
            email: '',
            mobile: '',
        },
        validationSchema:profileSchema,
        onSubmit: values => {
        // dispatch(loginUser(values));
                navigate('/')
        },
      });  

    return(
        <>
        <BreadCrumb title='My Profile'/>
        <Container class1="cart-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-12">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-3">
                            <label 
                                htmlFor="example1" 
                                className="form-label">
                                    First Name
                            </label>
                            <input 
                                type="text" 
                                name="firstname" 
                                className="form-control" 
                                id="example1"
                                value={formik.values.firstname} 
                                onChange={formik.handleChange('firstname')} 
                                onBlur={formik.handleBlur('firstname')} />
                            <div className="error">
                                {formik.touched.firstname && formik.errors.firstname}
                            </div>
                        </div>

                        <div className="mb-3">
                            <label 
                                htmlFor="example2" 
                                className="form-label">
                                    Last Name
                            </label>
                            <input 
                                type="text" 
                                name="lastname" 
                                className="form-control" 
                                id="example2"value={formik.values.lastname} 
                                onChange={formik.handleChange('lastname')} 
                                onBlur={formik.handleBlur.lastname} 
                                placeholder="Last Name"
                            />
                            <div className="error">
                                {formik.touched.lastname && formik.errors.lastname}
                            </div>
                        </div>

                        <div className="mb-3">
                            <label 
                                htmlFor="exampleInputEmail1" 
                                className="form-label">
                                    Email address
                            </label>
                            <input 
                                type="email" 
                                name="email" 
                                className="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp"
                                value={formik.values.email} 
                                onChange={formik.handleChange('email')}
                                onBlur={formik.handleBlur.email}  
                                placeholder="Email"
                            />
                            <div className="error">
                                {formik.touched.email && formik.errors.email}
                            </div>
                        </div>

                        <div className="mb-3">
                            <label 
                                htmlFor="exampleInputEmail2" 
                                className="form-label">
                                    Mobile Number
                            </label>
                            <input 
                                type="number"
                                name="mobile" 
                                className="form-control" 
                                id="exampleInputEmail2" 
                                aria-describedby="emailHelp"
                                value={formik.values.mobile}
                                onChange={formik.handleChange('mobile')} 
                                onBlur={formik.handleBlur.mobile}  
                                placeholder="Phone Number"
                            />
                            <div className="error">
                                {formik.touched.mobile && formik.errors.mobile}
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary"> Save </button>
                    </form>
                </div>

            </div>
        </Container>
        </>
    )

}

export default Profile;