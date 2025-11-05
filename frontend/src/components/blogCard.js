import React from "react";
import { Link } from "react-router-dom";


const BlogCart = (props) => {

    const {id, title, description, date, image} = props;
    return (
        <>
         {/* <div className="col-3"> */}
            {/* <div className="blog-card">
                <div className="card-image">
                    <img className="img-fluid w-100"
                    src="images/blog-1.jpg" alt="blog"/>
                </div>
                <div className="blog-content">
                    <p className="date">01 Dec 2023</p>
                    <h5 className="title">Blog title 01</h5>
                    <p className="desc">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                    <Link className="button" to="/blog/:id">Read more</Link>
                </div>
            </div> */}
         {/* </div> */}

         <div className="blog-card">
                <div className="card-image">
                    <img className="img-fluid w-100"
                    src={image? image : "images/blog-1.jpg"}
                    alt="blog"/>
                </div>
                <div className="blog-content">
                    <p className="date">{date}</p>
                    <h5 className="title">{title}</h5>
                    <p className="desc">{description}</p>
                    <Link 
                        className="button" 
                        to={"/blog/" + id}>
                            Read more
                    </Link>
                </div>
            </div>
   
        </>
    )
   

};

export default BlogCart;