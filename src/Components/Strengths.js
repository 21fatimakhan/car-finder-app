import React from "react";




function Strengths() {
    return (
        <strengths className="pt-4 pt-md-5 container">
    <div className="d-sm-flex align-items-center justify-content-between">
        <h2 className="h3 text-light mb-2 mb-sm-0 top-headings">What sets Finder apart?</h2><a role="button" tabindex="0" href=" " className="btn btn-link btn-light fw-normal px-0">How to sell cars on Finder<i className="fi-arrow-long-right fs-sm mt-0 ps-1 ms-2"></i></a>
    </div>
    <div className="row">
        <div className="pt-4 mt-2 pt-md-5 mt-md-3 col-lg-4 col-md-5 offset-lg-1">
            <div className="d-flex pb-4 pb-md-5 mb-2"><i className=" fa fa-solid fa-file fal lead mt-1 order-md-2"></i>
            
            
            
                
                <div className="text-md-end ps-3 ps-md-0 pe-md-3 order-md-1">
                    <h3 className="h6 text-light mb-1">Over 1 Million Listings</h3>
                    <p className="fs-sm text-light opacity-70 mb-0">That's more than you'll find on any other major online automotive marketplace in the USA.</p>
                </div>
            </div>
            <div className="d-flex pb-4 pb-md-5 mb-2"><i class="fa fa-rgular fa-search mt-1 order-md-2 fal" ></i>
                <div className="text-md-end ps-3 ps-md-0 pe-md-3 order-md-1">
                    <h3 className="h6 text-light mb-1">Personalized Search</h3>
                    <p className="fs-sm text-light opacity-70 mb-0">Our powerful search makes it easy to personalize your results so you only see the cars and features you care about.</p>
                </div>
            </div>
            <div className="d-flex pb-4 pb-md-5 mb-2"><i class=" fa fa-thin fa-gear mt-1 order-md-2 fal "></i>
                <div className="text-md-end ps-3 ps-md-0 pe-md-3 order-md-1">
                    <h3 className="h6 text-light mb-1">Non-Stop Innovation</h3>
                    <p className="fs-sm text-light opacity-70 mb-0">Our team is constantly developing new features that make the process of buying and selling a car simpler.</p>
                </div>
            </div>
        </div>
        <div className="d-none d-md-block col-md-2">
            <div id="wrapper" className="position-relative mx-auto purple-car">
                <div class="content-overlay mt-5 pt-5 car-p" >
                <span >
                            <span>
                           
                            <img src="/Assets/Images/car.svg" alt="" className="p-car"/>
                            </span>
                            </span>
                </div>

            </div>
        </div>
        <div className="pt-md-5 mt-md-3 col-lg-4 col-md-5">
            <div className="d-flex pb-4 pb-md-5 mb-2"><i className="fa fa-solid fa-info-circle fal mt-1"></i>
                <div className="ps-3">
                    <h3 className="h6 text-light mb-1">Valuable Insights</h3>
                    <p className="fs-sm text-light opacity-70 mb-0">We provide free access to key info like dealer reviews, market value, price drops.</p>
                </div>
            </div>
            <div className="d-flex pb-4 pb-md-5 mb-2"><i className="fa fa-thin fa-user  mt-1 fal"></i>
                <div className="ps-3">
                    <h3 className="h6 text-light mb-1">Consumer-First Mentality</h3>
                    <p className="fs-sm text-light opacity-70 mb-0">We focus on building the most transparent, trustworthy experience for our users, and we've proven that works for dealers, too.</p>
                </div>
            </div>
            <div className="d-flex pb-4 pb-md-5 mb-2">
            <i class=" fa fa-thin fa-calculator mt-1 fal"></i>
                <div className="ps-3">
                    <h3 className="h6 text-light mb-1">Online Car Appraisal</h3>
                    <p className="fs-sm text-light opacity-70 mb-0">Specify the parameters of your car to form its market value on the basis of similar cars on Finder.</p>
                </div>
            </div>
        </div>
    </div>
</strengths>
      );
}

export default Strengths;