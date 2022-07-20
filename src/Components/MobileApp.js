import React from "react";




function MobileApp() {
    return (
        <mobileapp className="pb-3 pb-sm-4 pb-md-5 container">
    <div className="align-items-center pb-5 row">
        <div className="text-center text-md-start mb-4 mb-md-0 col-xl-5 col-lg-6 col-md-7 offset-xl-1">
            <h2 className="text-light mb-4">Get the top-rated app!</h2>
            <p className="fs-lg text-light opacity-70 mb-md-5">Download Finder App and join the community of car enthusiasts. Don't stop your car search when you leave your computer with our Android and iOS app!</p>

            
           
        </div>
        <div className="col-lg-6 col-md-5">
            <div className=" mobile-app d-flex mx-auto"> <span className= "car" >
                            <span className= "car-img">
                           
                            <img className="image-car" src="/Assets/Images/mobile-app.webp" alt=""/>
                            </span>

                            </span></div>
        </div>
    </div>
</mobileapp>
        );
  }
  
  export default MobileApp;