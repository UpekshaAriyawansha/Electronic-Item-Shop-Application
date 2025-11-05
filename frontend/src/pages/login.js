import React, { useState } from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/meta";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../components/container";
import CustomInput from "../components/customInput";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import { loginUser } from "../feactures/user/userSlice";

const loginSchema = Yup.object().shape({
    email: Yup.string().email('Email should be valid').required('Email Address is Required'),
    password: Yup.string().required('Password is Required'),
  });

const Login = () =>{

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const authState = useSelector(state=>state.auth)

    const formik = useFormik({
        initialValues: {
          email: '',
          password:'',
        },
        validationSchema:loginSchema,

        onSubmit: values => {
            // dispatch(values);
        //   alert(JSON.stringify(values, null, 2));
        dispatch(loginUser(values));
        // setTimeout(()=>{
        //     if(authState.isSuccess){
                navigate('/')
        //     }
        // },300)
        },
      });
        

    return(
        <>
            <Meta title="Login"/>
            <BreadCrumb title="Login"/>

            <Container class1="login-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3">
                                    Login
                                </h3>

                                <form 
                                    className="d-flex flex-column gap-15" 
                                    onSubmit={formik.handleSubmit}
                                >

                                    <CustomInput 
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formik.values.email} 
                                        onBlur={formik.handleBlur.email} 
                                        onChange={formik.handleChange('email')} 
                                    />
                                    <div className="error">
                                        {formik.touched.email && formik.errors.email}
                                    </div>

                                    <CustomInput 
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={formik.values.password} 
                                        onBlur={formik.handleBlur.password} 
                                        onChange={formik.handleChange('password')} 
                                    />
                                    <div className="error">
                                        {formik.touched.password && formik.errors.password}
                                    </div>

                                    <div>
                                        <Link to="/forgot-password">
                                            Forgot Password ?
                                        </Link>
                                        <div className="mt-3 d-flex justify-content-center gap-15 align-item-center">
                                            <button className="button">Login</button>
                                            <Link className="button register"
                                                to="/register">
                                                    Register
                                            </Link>
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

export default Login;