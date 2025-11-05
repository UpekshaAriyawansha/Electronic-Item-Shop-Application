import React from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/meta";
import { FaHome , FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { AiFillInfoCircle } from "react-icons/ai";
import Container from "../components/container";
import * as yup from 'yup';
import { useFormik } from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import { createQuiry } from "../feactures/contact/contactSlice";


let contactSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().nullable().email("Email should be valid.").required("Email is required"),
    mobile: yup.string().default('').nullable().required("Mobile Number is required"),
    comment: yup.string().default('').nullable().required("Comment Number is required"),
  });

const Contact = () => {

    const dispatch = useDispatch();


    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          mobile: '',
          comment: '',
        },
        validationSchema:contactSchema,
        onSubmit: values => {
        //   alert(JSON.stringify(values, null, 2));
        dispatch(createQuiry(values));
        },
      });

    return (
        <>
            <Meta title="Contact Us"/>
            <BreadCrumb title="Contact Us"/>

            <Container class1="contact-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-12">
                            <iframe
                                className="border-0 w-100"
                                src="https://maps.app.goo.gl/CsdbeMpTMJcH6PE48" 
                                title="location" 
                                width="600"
                                height="450"
                                loading="lazy"
                                referrerPolicy="n0-refrerrer-when-downgrade"
                                allowfullscreen=""
                            />
                        </div>
                    </div>

                    <div div className="row" >
                        <div className="col-12 mt-5">
                            <div className="contact-inner-wrapper d-flex justify-content-between">
                                <div>
                                    <h3 className="contant-title mb-4">
                                        Contact
                                    </h3>

                                    <form 
                                        className="d-flex flex-column gap-15" 
                                        onSubmit={formik.handleSubmit}
                                    >
                                        <div>
                                            <input 
                                                className="form-control" 
                                                type="text"
                                                placeholder="Name"
                                                name="name"
                                                value={formik.values.name}
                                                onChange={formik.handleChange("name")}
                                                onBlur={formik.handleBlur("name")}
                                            />
                                            <div className="errors">
                                                {
                                                    formik.touched.name && formik.errors.name
                                                }
                                            </div>
                                        </div>

                                        <div>
                                            <input 
                                                className="form-control" 
                                                type="email"
                                                placeholder="Email"
                                                name="email"
                                                value={formik.values.email}
                                                onChange={formik.handleChange("email")}
                                                onBlur={formik.handleBlur("email")}
                                            />
                                            <div className="errors">
                                                {
                                                    formik.touched.email && formik.errors.email
                                                }
                                            </div>
                                        </div>

                                        <div>
                                            <input 
                                                className="form-control" 
                                                type="tel"
                                                placeholder="Mobile Number"
                                                name="mobile"
                                                value={formik.values.mobile}
                                                onChange={formik.handleChange("mobile")}
                                                onBlur={formik.handleBlur("mobile")}
                                            />
                                            <div className="errors">
                                                {
                                                    formik.touched.mobile && formik.errors.mobile
                                                }
                                            </div>
                                        </div>

                                        <div>
                                            <textarea
                                                name="comments"
                                                className="w-100 form-control"
                                                cols="30"
                                                rows="10"
                                                placeholder="Comment"                                                name="email"
                                                value={formik.values.comment}
                                                onChange={formik.handleChange("comment")}
                                                onBlur={formik.handleBlur("comment")}
                                            />
                                            <div className="errors">
                                                {
                                                    formik.touched.comment && formik.errors.comment
                                                }
                                            </div>
                                        </div>

                                        <div>
                                            <button
                                                className="button border-0"
                                            >
                                                Submit
                                            </button>
                                        </div>

                                    </form>
                                </div>

                                <div>
                                    <h3 className="contant-title mb-4">
                                        Get in touch with us
                                    </h3>

                                    <div>
                                        <ul className="ps-0">
                                            <li className="mb-3 d-flex gap-15 align-items-center">
                                                <FaHome className="fs-5"/>
                                                <address>
                                                    No: 309, Nuwaragala, Polonnaruwa
                                                </address>
                                            </li>
                                            <li className="mb-3 d-flex gap-15 align-items-center">
                                                <FaPhone className="fs-5"/>
                                                <a 
                                                    href="tel:+94 788934306">+94 788934306
                                                </a>
                                            </li>

                                            <li className="mb-3 d-flex gap-15 align-items-center">
                                                <IoIosMail className="fs-5"/>
                                                <a 
                                                    href="mailto:upekshagayathree98@gmail.com">
                                                        upekshagayathree98@gmail.com
                                                </a>
                                            </li>

                                            <li className="mb-3 d-flex gap-15 align-items-center">
                                                <AiFillInfoCircle className="fs-5"/>
                                                <p className="mb-0" >
                                                    Lorem ipsum, or lipsum as it is sometimes known
                                                </p>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                    </div>
            </Container>
        </>
    )
};

export default Contact;