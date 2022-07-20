import React from "react";




function Hero() {
    return ( 
    <hero className="background bg-top-center bg-repeat-0 pt-5 " >
    <div className=" box pt-5 container">
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
    <div className=" group-form mt-4 mt-sm-3 mt-lg-n3 pb-5 mb-md-4 container">
            <div className="nav-tabs-light mb-4 nav nav-tabs">
                <div className="nav-item"><a role="button" data-rr-ui-event-key="new" className="nav-link active" tabindex="0" href=" ">New</a></div>
                <div className="nav-item"><a role="button" data-rr-ui-event-key="used" className="nav-link" tabindex="0" href=" ">Used</a></div>
            </div>
            <form className="form-group form-group-light d-block">
            <div className="g-0 ms-lg-n2 row">
                    <div calssName="col-lg-2">
                        <div className="border-end-lg border-light input-group"><span className="text-muted ps-2 ps-sm-3 input-group-text" id="search-icon"><i className="fi-search"></i></span><input placeholder="Keywords..." aria-label="Search" aria-describedby="search-icon" className="form-control" /></div>
                    </div>
                    <hr className="hr-light d-lg-none my-2" />
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div class="border-end-sm border-light dropdown"><button type="button" id="react-aria-28" aria-expanded="false" className="dropdown-toggle btn btn-link"><i className="fi-list me-2"></i>Make</button></div>
                    </div>
                    <hr className="hr-light d-sm-none my-2" />
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="border-end-md border-light dropdown"><button type="button" id="react-aria-29" aria-expanded="false" className="dropdown-toggle btn btn-link"><i className="fi-list me-2"></i>Model</button></div>
                    </div>
                    <hr className="hr-light d-md-none my-2" />
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="border-end-sm border-light dropdown"><button type="button" id="react-aria-30" aria-expanded="false" className="dropdown-toggle btn btn-link"><i className="fi-car me-2"></i>Body type</button></div>
                    </div>
                    <hr className="hr-light d-sm-none my-2" />
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="dropdown"><button type="button" id="react-aria-31" aria-expanded="false" className="dropdown-toggle btn btn-link"><i className="fi-map-pin me-2"></i>Location</button></div>
                    </div>
                    <hr className="hr-light d-lg-none my-2" />
                    <div className="col-lg-2"><button type="button" className="w-100 btn btn-primary">Search</button></div>
                </div>
            </form>
            
        </div>
    </hero>
    
    );
  }
  
  export default Hero;