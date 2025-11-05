import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/meta";
import BlogCard from "../components/blogCard";
import Container from "../components/container";
import {useDispatch, useSelector} from 'react-redux';
import { getallBlogs } from "../feactures/blogs/blogSlice";
import moment from "moment";

const Blog = () => {

    const dispatch = useDispatch();
    const blogState = useSelector((state) => state?.blog?.blog);
    // console.log(productState.product.product);
    // console.log(blogState);


    useEffect(() => {
        getBlogs();
    },[]);

    const getBlogs = () => {
        dispatch(getallBlogs());
    };

    return(
        <>
            <Meta title="Blog"/>

            <BreadCrumb title="Blog"/>

            <Container class1="blog-wrapper home-wrapper-2 py-5">
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Find By Categories
                                </h3>
                                <div>
                                    <ul className="ps-0">
                                        <li>Watch</li>
                                        <li>Tv</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-9">
                            <div className="row">

                                {
                                    blogState && blogState.map((item,index)=>{
                                        return (
                                            <div className="col-6 mb-3" key={index}>
                                                <BlogCard 
                                                    id={item?.id}
                                                    // date={moment.format(item?.created_at)}
                                                    date={moment(item?.createdAt).format('MMMM Do YYYY, h:mm a')}
                                                    title={item?.title}
                                    //                 description = dangerouslySetInnerHTML = {{
                                    //     __html: RTCSessionDescription.substr(0, 70) + "...",
                                    // }}
                                                    description = {item?.description}
                                                    image = {item?.images[0]?.url}
                                                    
                                                />
                                            </div>
                                        )
                                    })
                                }
                                
                            </div>

                            {/* <div className="row">
                                <div className="col-6 mb-3">
                                  <BlogCard/>
                                </div>

                                <div className="col-6 mb-3">
                                  <BlogCard/>
                                </div>
                            </div> */}

                        </div>

                    </div>
            </Container>
        </>
    )
};

export default Blog;