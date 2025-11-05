import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCart from "../components/blogCard";
import ProductCard from "../components/productCard";
import SpecialProduct from "../components/specialProduct";
import Container from "../components/container";
import { services } from "../utils/Data";
import {useDispatch, useSelector} from 'react-redux';
import moment from "moment";
import { getallBlogs } from "../feactures/blogs/blogSlice";
import BlogCard from "../components/blogCard";
import { addWishlist, getallProducts } from "../feactures/products/productSlice";
import ReactStars from "react-rating-stars-component";

const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const blogState = useSelector((state) => state?.blog?.blog);
    const productState = useSelector((state) => state.product.product);

    console.log(productState);

    useEffect(() => {
        getBlogs();
        getProducts();
    },[]);

    const getBlogs = () => {
        dispatch(getallBlogs());
    };

    const getProducts = () => {
        dispatch(getallProducts());
    }

    const addToWishlist = (id) => {
        dispatch(addWishlist(id));
        alert(id);
    };

    return (
        <>
        <Container class1="home-wrapper-1 py-5">
            <div className="row">
                    <div className="col-6">
                        <div className="main-banner position-relative">
                            <img className="img-fluid rounded-3"
                            src="images/main-banner-1.jpg" alt="main banner"/>

                            <div className="main-banner-content position-absolute">
                                <h4>SUPERCHARGED FOR PROS.</h4>
                                <h5>iPad 13000 LKR Pro.</h5>
                                <p>From LKR 9000 or LKR 4000/mo.</p>
                                <Link className="button">BUY NOW</Link>

                            </div>
                        </div>

                    </div>

                    <div className="col-6">
                        <div className="d-flax flax-wrap justify-content-between align-items-center gap-30">
                           
                            <div className="small-banner position-relative p-2">
                                <img className="img-fluid rounded-3"
                                src="images/catbanner-01.jpg" alt="main banner"/>
                               
                                <div className="small-banner-content position-absolute">
                                    <h4>BEST SAKE</h4>
                                    <h5>iPad S13+ Pro.</h5>
                                    <p>From LKR 9000 <br/> or LKR 4000/mo.</p>
                                    <Link className="button">BUY NOW</Link>
                                </div>

                            </div>
                        </div>

                        <div className="d-flax flax-wrap justify-content-between align-items-center ">
                           
                            <div className="small-banner position-relative p-2">
                                <img className="img-fluid rounded-3"
                                src="images/catbanner-02.jpg" alt="main banner"/>
                               
                                <div className="small-banner-content position-absolute">
                                    <h4>NEW ARRIVAL</h4>
                                    <h5>But iPad Air</h5>
                                    <p>From LKR 9000 <br/> or LKR 4000/mo.</p>
                                    <Link className="button">BUY NOW</Link>
                                </div>

                            </div>
                        </div>

                        <div className="d-flax flax-wrap justify-content-between align-items-center">
                           
                           <div className="small-banner position-relative p-2">
                               <img className="img-fluid rounded-3"
                               src="images/catbanner-03.jpg" alt="main banner"/>
                              
                               <div className="small-banner-content position-absolute">
                                   <h4>NEW ARRIVAL</h4>
                                   <h5>But iPad Air</h5>
                                   <p>From LKR 9000 <br/> or LKR 4000/mo.</p>
                                   <Link className="button">BUY NOW</Link>
                               </div>

                           </div>
                       </div>

                       <div className="d-flax flax-wrap justify-content-between align-items-center">
                           
                           <div className="small-banner position-relative p-2">
                               <img className="img-fluid rounded-3"
                               src="images/catbanner-04.jpg" alt="main banner"/>
                              
                               <div className="small-banner-content position-absolute">
                                   <h4>NEW ARRIVAL</h4>
                                   <h5>But iPad Air</h5>
                                   <p>From LKR 9000 <br/> or LKR 4000/mo.</p>
                                   <Link className="button">BUY NOW</Link>
                               </div>

                           </div>
                       </div>

                    </div>
                </div>
        </Container>

        <Container class1="home-wrapper-1 py-5">
             <div className="row">
                    <div className="col-12">
                        <div className="servies d-flex align-items-center justify-content-between">
                            {
                                services?.map((i,j) => {
                                    return (
                                        <div className="d-flex align-items-center gap-15" key={j}>
                                                <img src={i.image} alt="services"/>
                                            <div>
                                                <h6>{i.title}</h6>
                                                <p className="mb-0">{i.tagline}</p>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                            {/* <div className="d-flex align-items-center gap-15">
                                <img src="images/service-02.png" alt="services"/>
                                <div>
                                    <h6>Daily Suprise Offers</h6>
                                    <p className="mb-0">Save upto 25% off</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
            </div>
        </Container>

        <Container class1="home-wrapper-1 py-5">
            <div className="row">
                    <div className="col-12">
                        <div className="categories d-flex justify-content-between align-items-center flex-wrap">
                            <div className="d-flex gap-30 align-items-center">
                                <div>
                                    <h6>Music & Gaming</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/headphone.jpg" alt="camera"/>
                            </div>

                            <div className="d-flex gap-30 align-items-center">
                                <div>
                                    <h6>Cameras</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/camera.jpg" alt="camera"/>
                            </div>

                            <div className="d-flex gap-30 align-items-center">
                                <div>
                                    <h6>Smart Tv</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/tv.jpg" alt="camera"/>
                            </div>

                            <div className="d-flex gap-30 align-items-center">
                                <div>
                                    <h6>Smart Watch</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/watch.jpg" alt="camera"/>
                            </div>

                            <div className="d-flex gap-30 align-items-center">
                                <div>
                                    <h6>Music & Gaming</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/headphone.jpg" alt="camera"/>
                            </div>

                            <div className="d-flex gap-30 align-items-center">
                                <div>
                                    <h6>Cameras</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/camera.jpg" alt="camera"/>
                            </div>

                            <div className="d-flex gap-30 align-items-center">
                                <div>
                                    <h6>Smart Tv</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/tv.jpg" alt="camera"/>
                            </div>

                            <div className="d-flex gap-30 align-items-center">
                                <div>
                                    <h6>Smart Watch</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/watch.jpg" alt="camera"/>
                            </div>
                        </div>
                    </div>
            </div>
        </Container>

        <Container class1="featured-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">
                            Featured Collection
                        </h3>
                    </div>
                    {
                    productState && productState?.map((item, index)=>{
                        // if(item.tags === "featured"){
                            return (
                                <div 
                                    key={index}
                                    className="col-3">
                                    <Link className="product-card position-relative">
                                        
                                    <div className="wishlist-icon position-absolute">
                                            <button 
                                                className="border-0 bg-transparent"
                                            >
                                            <img 
                                                onClick={(e) => {addToWishlist(item?._id);}}    
                                                src="images/wish.svg" 
                                                alt="wishlist"
                                            />
                                            </button>
                                        </div>
        
                                        <div className="product-image">
                                            <img 
                                                className="img-fluid d-block mx-auto" 
                                                width={160}
                                                src={item.images[0]} 
                                                alt="product-cart"
                                            />
                                            <img 
                                                className="img-fluid d-block mx-auto" 
                                                width={160}
                                                src={item.images[0]} 
                                                alt="product-cart"
                                            />
                                        </div>
                                        <div className="blog-product-details">
                                            <h6 className="brand">{item?.brand}</h6>
                                            <h5 className="product-title">{item?.title}</h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={item?.totalrating.toString()}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            {/* <p className={`description ${grid === 12 ? "d-block":"d-none"}`}>
                                            <p dangerouslySetInnerHTML={{ __html: item?.description }} />
                                            </p> */}
                                            <p className="price">LKR {item?.price}</p>
                                        </div>
        
                                        <div className="action-bar position-absolute">
                                            <div className="d-flex flex-column gap-15">
                                                <button className="border-0 bg-transparent">
                                                    <img src="images/prodcompare.svg" alt="compare"/>
                                                </button>
                                                <button className="border-0 bg-transparent">
                                                    <img src="images/view.svg" alt="view"
                                                        onClick={()=> navigate("/product/"+ item?._id)}
                                                        />
                                                </button>
                                                <button className="border-0 bg-transparent">
                                                    <img src="images/add-cart.svg" alt="add-cart"/>
                                                </button>
                                            </div>
                                        </div>
                                    </Link>
                            </div>
                            )
                        // }
                    })
                }
{/* 
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/> */}
                </div>
            </div>
        </Container>

        <Container class1="famous-wrapper py-5 home-wrapper-2">
            <div className="row">
                    <div className="col-3">
                        <div className="famous-card bg-dark position-relative">
                            <img className="img-fluid" src="images/laptop.jpg" alt="famous-products"/>
                           <div className="famous-content position-aboslute">
                            <h5>Big Screen</h5>
                            <h6>Smart Watch Series 7</h6>
                            <p>From LKR 9000 or LKR 4000/mo.</p>
                           </div>
                        </div>
                    </div> 

                    <div className="col-3">
                        <div className="famous-card bg-white  position-relative">
                            <img className="img-fluid" src="images/laptop.jpg" alt="famous-products"/>
                           <div className="famous-content position-aboslute">
                            <h5 className="text-dark">Big Screen</h5>
                            <h6 className="text-dark">Smart Watch Series 7</h6>
                            <p className="text-dark">From LKR 9000 or LKR 4000/mo.</p>
                           </div>
                        </div>
                    </div>     

                    <div className="col-3">
                        <div className="famous-card bg-white  position-relative">
                            <img className="img-fluid" src="images/laptop.jpg" alt="famous-products"/>
                           <div className="famous-content position-aboslute">
                            <h5 className="text-dark">Big Screen</h5>
                            <h6 className="text-dark">Smart Watch Series 7</h6>
                            <p className="text-dark">From LKR 9000 or LKR 4000/mo.</p>
                           </div>
                        </div>
                    </div>    

                    <div className="col-3">
                        <div className="famous-card bg-white  position-relative">
                            <img className="img-fluid" src="images/laptop.jpg" alt="famous-products"/>
                           <div className="famous-content position-aboslute">
                            <h5 className="text-dark">Big Screen</h5>
                            <h6 className="text-dark">Smart Watch Series 7</h6>
                            <p className="text-dark">From LKR 9000 or LKR 4000/mo.</p>
                           </div>
                        </div>
                    </div>    
            </div>
        </Container>

        <Container class1="special-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-12">
                     <h3 className="section-heading">Special Products</h3>
                </div>
            </div>

            <div className="row">
                {
                    productState && productState?.map((item, index)=>{
                            // if(item.tags === "special"){
                                return (
                                <SpecialProduct 
                                    id={item?._id}
                                    key={index} 
                                    title={item?.title}
                                    brand={item?.brand}
                                    totalrating={item?.totalrating.toString()}
                                    price={item?.price}
                                    sold={item?.sold}
                                    quantity={item?.quantity}
                                />
                                )
                            // }
                    })
                }
            </div>
        </Container>

        <Container class1="popular-wrapper py-5 home-wrapper-2">
            <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">
                            Our Popular Products
                        </h3>
                    </div>
            </div>

            <div className="row">
                {
                    productState && productState?.map((item, index)=>{
                        // if(item.tags === "popular"){
                            return (
                                <div 
                                    key={index}
                                    className="col-3">
                                    <div className="product-card position-relative">
                                        
                                    <div className="wishlist-icon position-absolute">
                                            <button 
                                                className="border-0 bg-transparent"
                                                onClick={(e) => {addToWishlist(item?._id);}}    
                                            >
                                            <img 
                                                src="images/wish.svg" 
                                                alt="wishlist"
                                            />
                                            </button>
                                        </div>
        
                                        <div className="product-image">
                                            <img 
                                                className="img-fluid d-block mx-auto" 
                                                width={160}
                                                src={item.images[0]} 
                                                alt="product-cart"
                                            />
                                            <img 
                                                className="img-fluid d-block mx-auto" 
                                                width={160}
                                                src={item.images[0]} 
                                                alt="product-cart"
                                            />
                                        </div>
                                        <div className="blog-product-details">
                                            <h6 className="brand">{item?.brand}</h6>
                                            <h5 className="product-title">{item?.title}</h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={item?.totalrating.toString()}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            {/* <p className={`description ${grid === 12 ? "d-block":"d-none"}`}>
                                            <p dangerouslySetInnerHTML={{ __html: item?.description }} />
                                            </p> */}
                                            <p className="price">LKR {item?.price}</p>
                                        </div>
        
                                        <div className="action-bar position-absolute">
                                            <div className="d-flex flex-column gap-15">
                                                <button className="border-0 bg-transparent">
                                                    <img src="images/prodcompare.svg" alt="compare"/>
                                                </button>
                                                <button className="border-0 bg-transparent">
                                                    <img src="images/view.svg" alt="view"
                                                        onClick={()=> navigate("/product/"+ item?._id)}
                                                    />
                                                </button>
                                                <button className="border-0 bg-transparent">
                                                    <img src="images/add-cart.svg" alt="add-cart"/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            )
                        // }
                    })
                }
            </div>
        </Container>

        <Container class1="marque-wrapper py-5">
            <div className="row">
                <div className="col-12">
                        <div className="marquee-inner-wrapper card-wrapper">
                            <Marquee className="d-flex">
                                <div className="mx-4 w-25">
                                    <img src="images/brand-01.png" alt="brands"/>
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-02.png" alt="brands"/>
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-03.png" alt="brands"/>
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-04.png" alt="brands"/>
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-05.png" alt="brands"/>
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-06.png" alt="brands"/>
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-07.png" alt="brands"/>
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-08.png" alt="brands"/>
                                </div>
                            </Marquee>
                        </div>
                </div>
            </div>
        </Container>

        <Container class1="blog-wrapper py-5 home-wrapper-2">
            <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">
                            Our Latest Blog
                        </h3>
                    </div>

                    <div className="row">
                        {/* <div className="col-3">
                            <BlogCart/>
                        </div> */}
                                {
                                    blogState && blogState.map((item,index)=>{
                                        if (index < 3){
                                            return (
                                                <div className="col-3 mb-3" key={index}>
                                                    <BlogCard 
                                                        id={item?.id}
                                                        date={moment(item?.createdAt).format('MMMM Do YYYY, h:mm a')}
                                                        title={item?.title}
                                                        description = {item?.description}
                                                        image = {item?.images[0]?.url}
                                                    />
                                                </div>
                                            )
                                        }
                                    })
                                }
                    </div>

                    
                  
                </div>
        </Container>

        </>
    )
};

export default Home;