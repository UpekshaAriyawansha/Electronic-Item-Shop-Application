import React, { useState } from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/meta";
import { Link } from "react-router-dom";
import Container from "../components/container";
import CustomInput from "../components/customInput";


const RestPassword = () =>{
        

    return(
        <>
            <Meta title="Rest Password"/>
            <BreadCrumb title="Rest Password"/>

            <Container class1="login-wrapper py-5 home-wrapper-2">
                <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3">
                                    Rest Password
                                </h3>

                                <form className="d-flex flex-column gap-15" 
                                    action="">

                                    <CustomInput 
                                        type="password"
                                        name="password"
                                        placeholder="Password"/>

                                    <CustomInput 
                                        type="password"
                                        name="conformpassword"
                                        placeholder="Conform Password"/>

                                    <div>
                                        <div className="mt-3 d-flex justify-content-center gap-15 align-item-center">
                                            <button className="button" type="submit">
                                                Submit
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

export default RestPassword;