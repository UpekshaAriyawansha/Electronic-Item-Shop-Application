import React from "react";
import { Link } from "react-router-dom";
import {BsLinkedin,BsGithub,BsTwitterX,BsInstagram,BsFacebook} from "react-icons/bs"

const Footer = () => {
    return (
        <>
        <footer className="py-4">
        <div className="container-xxl">
                <div className="row align-items-center">
                   <div className="col-5">
                        <div className="footer-top-data d-flex gap-30 align-items-center">
                            <img src="images/newsletter.png" alt="newsletter"/>
                            <h2 className="mb-0 text-white">
                                Sign Up for Newsletter
                            </h2>
                        </div>
                   </div>
                   <div className="col-7">
                        <div>
                            <div className="input-group">
                                <input 
                                type="email" 
                                className="form-control py-1" 
                                placeholder="Your email address..." 
                                aria-label="Your email address..." 
                                aria-describedby="basic-addon2"
                                />
                                <span 
                                className="input-group-text p-2" 
                                id="basic-addon2">
                                    Submit                    
                                </span>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </footer>
      
        <footer className="py-3">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-4"> 
                        <h4 className="mb-4 text-white">Contact Us</h4>
                        <div>
                            <address className="text-white fs-6">
                                No: 309, <br/> Nuwaragala, <br/> Polonnaruwa.
                            </address>
                            <a className="text-white mt-2 d-block mb-3"
                                href="tel:+94 788934306">
                                +9478 8934306
                            </a>
                            <a className="text-white mt-2 d-block mb-3"
                                href="mailto:upekshagayathree98@gmail.com">
                                upekshagayathree98@gmail.com
                            </a>

                            <div className="social-icons d-flex align-items-center gap-30 mt-4">
                                <a href="">
                                    <BsLinkedin className="fs-4 text-white"/>
                                </a>
                                <a href="">
                                    <BsGithub className="fs-4 text-white"/>
                                </a>
                                <a href="https://twitter.com/UpekshaGayathr1">
                                    <BsTwitterX className="fs-4 text-white"/>
                                </a>
                                <a href="">
                                    <BsInstagram className="fs-4 text-white"/>
                                </a>
                                <a href="">
                                    <BsFacebook className="fs-4 text-white"/>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div className="col-3"> 
                        <h4 className="mb-4 text-white">Information</h4>
                        <div className="footer-link d-flex flex-column">
                            <Link className="text-white py-2 mb-1" to="/privacy-policy">
                                Privacy Policy
                            </Link>

                            <Link className="text-white py-2 mb-1" to="/refund-policy">
                                Refund Policy
                            </Link>

                            <Link className="text-white py-2 mb-1" to="/shipping-policy">
                                Shipping Policy
                            </Link>

                            <Link className="text-white py-2 mb-1" to="/terms-and-conditions">
                                Terms & Conditions
                            </Link>

                            <Link className="text-white py-2 mb-1" to="/blog">
                                Blogs
                            </Link>
                        </div>                    
                    </div>

                    <div className="col-3"> 
                        <h4 className="mb-4 text-white">Account</h4>
                        <div className="footer-link d-flex flex-column">
                            <Link className="text-white py-2 mb-1" to="/">
                                About Us
                            </Link>

                            <Link className="text-white py-2 mb-1" to="/">
                                FAQ
                            </Link>

                            <Link className="text-white py-2 mb-1" to="/">
                                Contact
                            </Link>
                        </div>
                    </div>

                    <div className="col-2"> 
                        <h4 className="mb-4 text-white">Quick Links</h4>
                        <div className="footer-link d-flex flex-column">
                            <Link className="text-white py-2 mb-1" to="/">
                                Laptops
                            </Link>

                            <Link className="text-white py-2 mb-1" to="/">
                                Headphones
                            </Link>

                            <Link className="text-white py-2 mb-1" to="/">
                                Tablets
                            </Link>

                            <Link className="text-white py-2 mb-1" to="/">
                                Watch
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
       
        <footer className="py-4">
            <div className="container-xxl">
                <div className="row">
                   <div className="col-12">
                        <p className="text-center mb-0 text-white">
                            &copy; {new Date().getFullYear()} created by Upeksha Ariyawansha
                        </p>
                   </div>
                </div>
            </div>
        </footer>

       
       
       
       
        </>
    )
};

export default Footer;