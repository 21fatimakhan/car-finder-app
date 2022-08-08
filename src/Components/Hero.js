import React from "react";




function Hero() {
    return ( 
    <hero className="background bg-top-center bg-repeat-0 pt-5 " >
    <div className=" box pt-5 container ">
            <div className="pt-lg-4 pt-xl-5 row">
                <div className=" pt-3 pt-md-4 pt-lg-5 col-lg-4 col-md-5">
                    <h1 className="display-4 text-light pb-2 mb-4 me-md-n5">Easy way to find the right car</h1>
                    <p className="fs-lg text-light opacity-70">Finder is a leading digital marketplace for the automotive industry that connects car shoppers with sellers.</p>
                </div>
                <div className="pt-md-5 col-lg-8 col-md-7">
                    <div className=" height-setting d-flex mt-4 ms-auto">
                        <span className= "car" >
                            <span class= "car-img">
                           
                            <img className="image-car" src="/Assets/Images/hero-img.webp" alt=""/>
                            </span>

                            </span></div>
                </div>
            </div>
        </div>
   
    </hero>
    
    );
  }
  
  export default Hero;