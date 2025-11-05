import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const SpecialProduct = (props) => {

    const {title, brand, totalrating, price, sold, quantity,id} = props;

    console.log(quantity / quantity + sold * 100)

    return (
        <>
         <div className="col-6 mb-3">
            <div className="special-product-card">
                <div className="d-flex justify-content-between">
                    <div>
                        <img className="image-fluid"
                        src="images/watch.jpg" alt="special product"/>
                    </div>
                    <div className="special-product-content">
                        <h5 className="brand">
                            {/* Samsung */} {brand}
                        </h5>
                        <h6 className="title">
                            {/* Samsung watch */} {title}
                        </h6>
                        <ReactStars
                        count={5}
                        // onChange={ratingChanged}
                        size={24}
                        value={totalrating}
                        edit={false}
                        activeColor="#ffd700"
                        />
                        <p className="price">
                            <span className="red-p">
                                LKR {price}
                            </span>
                                &nbsp;
                            {/* <strike>
                                LKR 2000
                            </strike> */}
                        </p>
                        <div className="discount-till d-flex align-items-center gap-10">
                            <p className="mb-0"> 
                                <b>05</b> &nbsp; Days
                            </p>
                        </div>
                        <div className="d-flex gap-10 align-items-center" >
                            <span className="badge rounded-circle p-2 bg-warning">1</span>:
                            <span className="badge rounded-circle p-2 bg-warning">1</span>:
                            <span className="badge rounded-circle p-2 bg-warning">1</span>
                        </div>
                        <div className="prod-count my-4">
                            <p>Products : {quantity}</p>
                            <div 
                            className="progress " 
                            role="progressbar" 
                            aria-label="Example 1px high" 
                            aria-valuenow={quantity / quantity + sold * 100} 
                            aria-valuemin={quantity} 
                            aria-valuemax={sold + quantity} 
                            style={{height:5, width:quantity / quantity + sold * 100 + "%"}}
                            >
                            <div 
                            class="progress-bar" 
                            style={{width: 25}}
                            >
                            </div>
                            </div>
                            <Link className="button my-4"
                                to={'/product/'+id}
                            >
                                {/* Add to Cart */} View
                            </Link>


                        </div>
                    </div>
                </div>
            </div>
         </div>
   
        </>
    )
   

};

export default SpecialProduct;