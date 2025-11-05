import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/meta";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import Container from "../components/container";
import {useDispatch, useSelector} from 'react-redux';
import moment from "moment";
import { getaBlog } from "../feactures/blogs/blogSlice";


const SingleBlog =()=>{

    const dispatch = useDispatch();
    const location = useLocation();
    const getBlogId = location.pathname.split('/')[2];

    const blogState = useSelector((state) => state?.blog?.singleBlog);
    // console.log(productState.product.product);
    // console.log(blogState);


    useEffect(() => {
        getBlog();
    },[]);

    const getBlog = () => {
        dispatch(getaBlog(getBlogId));
    };


    return(
        <>
            <Meta 
                // title="Dynamic Blog Name"
                title = {blogState?.title}
             />
            <BreadCrumb 
                // title="Dynamic Blog Name"
                title = {blogState?.title}
            />

            <Container class1="blog-wrapper home-wrapper-2 py-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-blog-card">
                                <Link className="d-flex align-items-center gap-10"
                                    to="/blog">
                                        <IoIosArrowRoundBack className="fs-4"/>
                                        Go back to Blogs
                                </Link>
                                <h3 className="title">
                                    Blog title 01
                                </h3>
                                <img className="img-fluid w-100 my-4" 
                                    src={blogState?.images[0].url? blogState?.images[0].url:"images/blog-1.jpg"} 
                                    // "images/blog-1.jpg" 
                                    alt="blog"/>
                                <p>
                                    {/* dangerouslySetInnerHTML = {{
                                        __html: blogState.description,
                                    }} */}
                                    {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.                                 */}
                                    {blogState?.description}
                                </p>

                            </div>
                            

                        </div>

                    </div>
            </Container>
        </>
    )
}

export default SingleBlog;