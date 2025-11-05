import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/meta";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProductCard from "../components/productCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from "../components/color"
import { IoMdGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import Container from "../components/container";
import {useDispatch, useSelector} from 'react-redux';
import { getsingleProduct } from "../feactures/products/productSlice";
import { toast } from "react-toastify";
import { addProductToCart, getUserCart } from "../feactures/user/userSlice";


const SingleProduct = () => {

    const [color, setColor] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const [alreadyAdded, setAlreadyAdded] = useState(false)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const getProductId = location.pathname.split('/')[2];
    
    const productState = useSelector(state => state.product.singleproduct)
    const cartState = useSelector(state=>state.auth.productCart)

    console.log(productState);

    useEffect(()=>{
        dispatch(getsingleProduct(getProductId));
        dispatch(getUserCart);
    },[])

    useEffect(()=>{
        for (let index = 0; index < cartState?.length; index++) {
            if (getProductId === cartState[index]?.productId?._id) {
                setAlreadyAdded(true);
            }            
        }
    })

    const uploadCart = ()=> {
       if(color === null){
        toast.error("Please Choose a Color")
        return false
       } else{
        dispatch(addProductToCart({productId:productState?._id, quantity, color, price:productState?.price}))
        navigate('/cart')
       }
    }


    const props = {
        width: 400, 
        height: 600, 
        zoomWidth: 600, 
        img: productState?.images[0]?.url? productState?.images[0]?.url:"https://iriver.lk/storage/products/samsung-tabs/s6-black-540x600.jpg",
        // "https://iriver.lk/storage/products/samsung-tabs/s6-black-540x600.jpg"
    };

    const copyToClipboard = (text) => {
        console.log('text', text);
        var textField = document.createElement('textarea');
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
      }

    const [orderedProduct,setorderedProduct] = useState(true);


    return (
        <>
            <Meta title={"Product Name"}/>
            <BreadCrumb title="Single Product"/>

            <Container class1="main-product-wrapper py-5 home-wrapper-2">
                 {/* p-3 bg-white */}
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                                <div className="other-product-images d-flex flex-wrap gap-15">
                                    {productState?.images.map((item, index)=>{
                                        return(
                                            <div>
                                                <img className="img-fluid"
                                                    // src="https://xmobile.lk/wp-content/uploads/2023/09/1-13.jpg"
                                                    src={item.url}
                                                    alt="main-product"
                                                />
                                            </div>
                                        )
                                    })}
                                    
                                    {/* <div>
                                        <img className="img-fluid"
                                            src="https://xmobile.lk/wp-content/uploads/2023/09/1-13.jpg"
                                            alt="main-product"
                                        />
                                    </div>
                                    <div>
                                        <img className="img-fluid"
                                            src="https://xmobile.lk/wp-content/uploads/2023/09/1-13.jpg"
                                            alt="main-product"
                                        />
                                    </div>
                                    <div>
                                        <img className="img-fluid"
                                            src="https://xmobile.lk/wp-content/uploads/2023/09/1-13.jpg"
                                            alt="main-product"
                                        />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-product-details">
                                <div className="border-bottom">
                                    <h3 className="title">
                                        {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. */}
                                        {productState?.title}
                                    </h3>
                                </div>

                                <div className="border-bottom py-3">
                                    <p className="price">
                                        LKR {productState?.price}
 
                                    </p>
                                    <div className="d-flex align-items-center gap-10">
                                        <ReactStars
                                            count={5}
                                            // onChange={ratingChanged}
                                            size={24}
                                            value={productState?.totalrating}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className="mb-0 t-review">
                                            ( 2 Reviews )
                                        </p>

                                    </div>

                                    <a className="review-btn" href="#review"> 
                                        Write a Review
                                    </a>
                                </div>

                                <div className="border-bottom">
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Type :</h3>
                                        <p className="product-data">Tab</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Brand :</h3>
                                        <p className="product-data">
                                            {/* Apple */} {productState?.brand}
                                        </p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Category :</h3>
                                        <p className="product-data">
                                        {productState?.category}
                                        </p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center mt-2 mb-3">
                                        <h3 className="product-heading">Tag :</h3>
                                        <p className="product-data">
                                        {productState?.tags}
                                        </p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Availablity :</h3>
                                        <p className="product-data">In Stock</p>
                                    </div>
                                    <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                        <h3 className="product-heading">Size :</h3>
                                        <div className="d-flex flex-wrap gap-15">
                                            <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">L</span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">XXL</span>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                        <h3 className="product-heading">Color :</h3>
                                        <Color setColor={setColor} colorData={productState?.color} />
                                    </div>

                                    {
                                        alreadyAdded === false && <>
                                        </>
                                    }
                                   
                                    <div className="d-flex gap-15 flex-row align-items-center my-2">
                                        {
                                            alreadyAdded === false && <>
                                              <h3 className="product-heading">Quantity :</h3>
                                                <div className="">
                                                    <input 
                                                    className="form-control"
                                                    type="number" 
                                                    name="" 
                                                    id=""
                                                    min={1}
                                                    max={10}
                                                    style={{width:"70px"}}
                                                    onChange={(e)=>setQuantity(e.target.value)}
                                                    value={quantity}
                                                    /> 
                                                </div>
                                            </>
                                        }
                                    </div>

                                    <div className={alreadyAdded?"ms-0":"ms-5" + "d-flex gap-30 align-item-center ms-5" }>
                                        {/* <button className="button" onClick={()=>{uploadCart()}}> */}
                                        <button className="button" onClick={()=>{alreadyAdded? navigate('/cart'):uploadCart()}}>
                                            {
                                                alreadyAdded?"Go to Cart": "Add to Cart"
                                            }
                                        </button>

                                        {/* <button className="button register">
                                            Buy It Now
                                        </button> */}
                                    </div>

                                    <div className="d-flex align-items-center gap-15 mb-3 mt-3">
                                        <div>
                                            <a href="">
                                                <IoMdGitCompare className="fs-5 me-2"/>
                                                Add to Compare
                                            </a>
                                        </div>
                                        <div>
                                            <a href="">
                                                <FaRegHeart className="fs-5 me-2"/>
                                                Add to Wishlist
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column gap-10 my-3">
                                        <h3 className="product-heading">
                                            Shipping & Returns :
                                        </h3>
                                        <p className="product-data">
                                        {productState?.description}

                                       {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. */}
                                            </p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-3">
                                        <h3 className="product-heading">
                                            Product Link:
                                        </h3>
                                        <a 
                                        href="javascript:void(0);"
                                        onClick={()=>{
                                            copyToClipboard(
                                                window.location.href
                                            )
                                        }}>
                                            Copy Product Link
                                        </a>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
            </Container>

            <Container class1="description-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-12">
                            <h4>
                                Description 
                            </h4>
                            <div className="bg-white p-3">
                                
                                <p className="bg-white p-3">
                                {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
                                {productState?.description}
                                </p>
                            </div>
                        </div>
                    </div>
            </Container>

            <Container class1="reviews-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-12">
                            <h4>
                                Reviews 
                            </h4>
                            <div className="review-inner-wrapper">
                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div>
                                        <h4 className="mb-2">
                                            Customer Reviews
                                        </h4>
                                        <div className="d-flex align-items-center gap-10">
                                            <ReactStars
                                                count={5}
                                                // onChange={ratingChanged}
                                                size={24}
                                                value="3"
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p className="mb-0">
                                                Based on 2 Reviews
                                            </p>
                                        </div>
                                    </div>
                                    {orderedProduct && (
                                <div>
                                    <a className="text-dark text-decoration-underline"
                                        href="">Write a Review</a>
                                </div>
                            )}
                                </div>

                                <div className="review-form py-4">
                                    <h4 id="review" className="mb-2">
                                            Write a Review
                                    </h4>

                                    <form 
                                        className="d-flex flex-column gap-15" 
                                        action=""
                                    >
                                        <div>
                                            <ReactStars
                                                count={5}
                                                // onChange={ratingChanged}
                                                size={24}
                                                value="3"
                                                edit={true}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <div>
                                            <textarea
                                                name=""
                                                id=""
                                                className="w-100 form-control"
                                                cols="30"
                                                rows="10"
                                                placeholder="Comments"
                                            />
                                        </div>

                                        <div className="d-flex justify-content-end">
                                            <button
                                                className="button border-0"
                                            >
                                                Submit Review
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                <div className="reviews mt-4">
                                    <div className="review">
                                        <div className="d-flex gap-10 align-items-center">
                                            <h6 className="mb-0">
                                                Upeksha
                                            </h6>
                                            <ReactStars
                                                count={5}
                                                // onChange={ratingChanged}
                                                size={24}
                                                value="3"
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        

                                        <p className="mt-3">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </p>
                                    </div>

                                </div>


                            </div>
                        </div>    
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
                        <ProductCard/>
                    </div>
            </Container>

        </>
    )
}
    export default SingleProduct;