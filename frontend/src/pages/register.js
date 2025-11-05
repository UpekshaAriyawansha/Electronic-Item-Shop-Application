import React, { useState } from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/meta";
import { Link } from "react-router-dom";
import Container from "../components/container";
import CustomInput from "../components/customInput";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import { registerUser } from "../feactures/user/userSlice";


const registerSchema = Yup.object().shape({
    firstname: Yup.string().required('First Name is Required'),
    lastname: Yup.string().required('Last Name is Required'),
    email: Yup.string().email('Email should be valid').required('Email Address is Required'),
    mobile: Yup.string().required('Mobile No is Required'),
    password: Yup.string().required('Password is Required'),
  });

const Register = () =>{

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
          firstname: '',
          lastname: '',
          email: '',
          mobile:'',
          password:'',
        },
        validationSchema:registerSchema,

        onSubmit: values => {
            // dispatch(values);
        //   alert(JSON.stringify(values, null, 2));
        dispatch(registerUser(values));
        },
      });
        

    return(
        <>
            <Meta title="Register"/>
            <BreadCrumb title="Register"/>

            <Container class1="login-wrapper py-5 home-wrapper-2">
                <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3">
                                    Register
                                </h3>

                                <form 
                                    className="d-flex flex-column gap-15" 
                                    onSubmit={formik.handleSubmit}
                                >

                                    <CustomInput 
                                        type="text"
                                        name="firstname"
                                        value={formik.values.firstname} 
                                        onChange={formik.handleChange('firstname')} 
                                        onBlur={formik.handleBlur.firstname} 
                                        placeholder="First Name"
                                    />
                                    <div className="error">
                                        {formik.touched.firstname && formik.errors.firstname}
                                    </div>

                                    <CustomInput 
                                        type="text"
                                        name="lastname"
                                        value={formik.values.lastname} 
                                        onChange={formik.handleChange('lastname')} 
                                        onBlur={formik.handleBlur.lastname} 
                                        placeholder="Last Name"
                                    />
                                    <div className="error">
                                        {formik.touched.lastname && formik.errors.lastname}
                                    </div>

                                    <CustomInput 
                                        type="tel"
                                        name="mobile"
                                        value={formik.values.mobile}
                                        onChange={formik.handleChange('mobile')} 
                                        onBlur={formik.handleBlur.mobile}  
                                        placeholder="Phone Number"
                                    />
                                    <div className="error">
                                        {formik.touched.mobile && formik.errors.mobile}
                                    </div>

                                    <CustomInput 
                                        type="email"
                                        name="email"
                                        value={formik.values.email} 
                                        onChange={formik.handleChange('email')}
                                        onBlur={formik.handleBlur.email}  
                                        placeholder="Email"
                                    />
                                    <div className="error">
                                        {formik.touched.email && formik.errors.email}
                                    </div>

                                    <CustomInput 
                                        type="password"
                                        name="password"
                                        value={formik.values.password} 
                                        onChange={formik.handleChange('password')} 
                                        onBlur={formik.handleBlur.password} 
                                        placeholder="Password"
                                    />
                                    <div className="error">
                                        {formik.touched.password && formik.errors.password}
                                    </div>
                                        
                                    <div>
                                        <div className="mt-3 d-flex justify-content-center gap-15 align-item-center">
                                            <button className="button" type="submit">
                                                Register
                                            </button>
                                        </div>
                                    </div>

                                </form>

                            </div>

                        </div>

                </div>
            </Container>
        </>
    );

}

export default Register;