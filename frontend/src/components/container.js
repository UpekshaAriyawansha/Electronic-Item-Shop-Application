import React, { useState } from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/meta";
import { Link } from "react-router-dom";


const Container = (props) => {
   
    return(
        <>

        <section className={props.class1}>
            <div className="container-xxl">
                {props.children}
            </div>
        </section>

        </>
    )
}

export default Container;