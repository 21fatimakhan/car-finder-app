import React from "react";



function TopOffers() {
    return (

        <topoffers className="pt-sm-1 pb-5 mb-md-4 container ">
            <div className="d-sm-flex align-items-center justify-content-between mb-4 pb-sm-2  container-fluid ">
                <h2 className="h3 text-light mb-2 mb-sm-0 ms-4 ">Top offers</h2>
                {/* <a role="button" tabindex="0" href="/car-finder/catalog?view=list" class="btn btn-link btn-light fw-normal px-0">View all offers<i class="fi-arrow-long-right fs-sm mt-0 ps-1 ms-2"></i></a> */}
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="card card-light  card-hover h-lg-100 mb-4 mb-lg-0 ms-3">

                        <img src="/Assets/Images/TopOffers/img1.webp" className="card-img-top " alt=" " />
                        <div className="position-absolute start-0 top-0 pt-3 ps-3">
                            <span className="d-table badge bg-info mb-1">Used</span>
                            <span className="d-table badge bg-success mb-1">Certified</span>
                        </div>


                        <div className="card-body ">
                            <div className="d-flex align-items-center justify-content-between pb-1"><span className="fs-sm text-light me-3">2015</span>
                                <div className="form-check form-check-light"><label className="form-check-label"><input type="checkbox" className="form-check-input" /><span class="fs-sm">Compare</span></label></div>
                            </div>
                            <h3 className="h6 mb-1"><a className="nav-link-light fw-bold s" href=" ">Mercedes Benz Convertible Coupe</a></h3>
                            <div className=" price fw-bold mb-1">$25,800</div>
                            <div className="fs-sm text-light opacity-70"><i className=" fa fa-solid fa-location-dot"></i>New York</div>
                        </div>
                        <div className="card-footer border-0 pt-3">
                            <div className="border-top  pt-3">
                                <div className="me-n1">
                                    <div className="row g-2">
                                        <div className="col me-sm-1 pb-2">
                                            <div className="card-btn text-light text-center w-100 h-100 text-nowrap p-2"><img src="/Assets/Images/dashboard.png " className="icons" alt=" " />
                                                <i className="fi-gearbox text-light d-block h4 mb-0"></i>
                                                <span className="fs-xs">48K mi</span></div>
                                        </div>
                                        <div className="col me-sm-1 pb-2">
                                            <div className=" card-btn  text-light  text-center w-100 h-100 text-nowrap p-2"><img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/gearbox-selector.png" alt="" /><i className="fi-gearbox text-light d-block h4 mb-0"></i><span className="fs-xs">Mannual</span></div>
                                        </div>
                                        <div className="col me-sm-1 pb-2">
                                            <div className=" card-btn  text-light  text-center w-100 h-100 text-nowrap p-2"><img src="https://img.icons8.com/ios/30/FFFFFF/petrol.png" alt="" /><i className="fi-gearbox text-light d-block h4 mb-0"></i><span className="fs-xs">Diesel</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-lg-6">
                    <div className="card mb-3 horizontal-card " >
                        <div className="row g-0">
                            <div className="col-md-4 ">
                          
                            <img src="/Assets/Images/TopOffers/img2.webp" className="img-fluid card-horizontal h-100" alt=" " />

                            <div className="position-absolute start-0 top-0 pt-3 ps-3">
                            <span className="d-table badge bg-info mb-1">Used</span>
                        </div>

                            </div>
                            <div className="col-md-8">
                                
                                <div className="card-body ">
                                    <div className="d-flex align-items-center justify-content-between pb-1"><span className="fs-sm text-light me-3">1995</span>
                                        <div className="form-check form-check-light"><label className="form-check-label"><input type="checkbox" className="form-check-input" /><span className="fs-sm">Compare</span></label></div>
                                    </div>
                                    <h3 className="h6 mb-1"><a class="nav-link-light fw-bold s" href=" ">Ford Truck Lifted</a></h3>
                                    <div className=" price fw-bold mb-1">$24,000</div>
                                    <div className="fs-sm text-light opacity-70"><i className=" fa fa-solid fa-location-dot"></i>Chicago</div>
                                </div>
                                <div className="card-footer border-0 pt-3">
                                    <div className="border-top  pt-3">
                                        <div className="me-n1">
                                            <div className="row g-2">
                                                <div className="col me-sm-1 pb-2">
                                                    <div className="card-btn text-light text-center w-100 h-100 text-nowrap p-2"><img src="/Assets/Images/dashboard.png " className="icons" alt=" " />
                                                        <i className="fi-gearbox text-light d-block h4 mb-0"></i>
                                                        <span className="fs-xs">278K mi</span></div>
                                                </div>
                                                <div className="col me-sm-1 pb-2">
                                                    <div className=" card-btn  text-light  text-center w-100 h-100 text-nowrap p-2"><img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/gearbox-selector.png" alt="" /><i className="fi-gearbox text-light d-block h4 mb-0"></i><span className="fs-xs">Manual</span></div>
                                                </div>
                                                <div className="col me-sm-1 pb-2">
                                                    <div className=" card-btn  text-light  text-center w-100 h-100 text-nowrap p-2"><img src="https://img.icons8.com/ios/30/FFFFFF/petrol.png" alt="" /><i className="fi-gearbox text-light d-block h4 mb-0"></i><span className="fs-xs">Gasoline</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="card mb-3 horizontal-card " >
                        <div className="row g-0 ">
                            <div className="col-md-4">
                                <img src="/Assets/Images/TopOffers/img3.webp" className="img-fluid card-horizontal  h-100  " alt=" " />

                                <div className="position-absolute start-0 top-0 pt-3 ps-3">
                            <span className="d-table badge bg-danger mb-1">New</span>
                        </div>

                            </div>
                            <div className="col-md-8">
                                <div className="card-body ">
                                    <div className="d-flex align-items-center justify-content-between pb-1"><span className="fs-sm text-light me-3">2018</span>
                                        <div className="form-check form-check-light"><label className="form-check-label"><input type="checkbox" className="form-check-input" /><span className="fs-sm">Compare</span></label></div>
                                    </div>
                                    <h3 className="h6 mb-1"><a className="nav-link-light fw-bold s" href=" ">BMW 640 XI Gran Turismo</a></h3>
                                    <div className=" price fw-bold mb-1">$43,500</div>
                                    <div className="fs-sm text-light opacity-70"><i className=" fa fa-solid fa-location-dot"></i>San Francisco</div>
                                </div>
                                <div className="card-footer border-0 pt-3">
                                    <div className="border-top  pt-3">
                                        <div className="me-n1">
                                            <div className="row g-2">
                                                <div className="col me-sm-1 pb-2">
                                                    <div className="card-btn text-light text-center w-100 h-100 text-nowrap p-2"><img src="/Assets/Images/dashboard.png " className="icons" alt=" " />
                                                        <i className="fi-gearbox text-light d-block h4 mb-0"></i>
                                                        <span className="fs-xs">10K mi</span></div>
                                                </div>
                                                <div className="col me-sm-1 pb-2">
                                                    <div className=" card-btn  text-light  text-center w-100 h-100 text-nowrap p-2"><img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/gearbox-selector.png" alt="" /><i className="fi-gearbox text-light d-block h4 mb-0"></i><span className="fs-xs">Automatic</span></div>
                                                </div>
                                                <div className="col me-sm-1 pb-2">
                                                    <div className=" card-btn  text-light  text-center w-100 h-100 text-nowrap p-2"><img src="https://img.icons8.com/ios/30/FFFFFF/petrol.png" alt="" /><i className="fi-gearbox text-light d-block h4 mb-0"></i><span className="fs-xs">Gasoline</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>

        </topoffers>

    )
}

export default TopOffers;