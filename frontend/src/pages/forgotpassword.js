import React, { useState } from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/meta";
import { Link } from "react-router-dom";
import Container from "../components/container";
import CustomInput from "../components/customInput";


const ForgotPassword = () =>{
        

    return(
        <>
            <Meta title="ForgotPassword"/>
            <BreadCrumb title="ForgotPassword"/>

            <Container class1="login-wrapper py-5 home-wrapper-2">
                <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3">
                                    Reset Password
                                </h3>
                                <p className="text-center mt-2 mb-3">
                                    We will reset your password
                                </p>

                                <form className="d-flex flex-column gap-15" 
                                    action="">
                                        
                                    <CustomInput 
                                        type="email"
                                        name="email"
                                        placeholder="Email"/>

                                    <div>
                                        <div className="mt-3 d-flex d-flex-column justify-content-center gap-15 align-item-center">
                                            <button className="button" type="submit">
                                                Submit
                                            </button>                                             
                                        </div>
                                        <div>
                                        <Link className="mt-3 d-flex d-flex-column justify-content-center"
                                            to="/login">
                                            Cancel
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

export default ForgotPassword;