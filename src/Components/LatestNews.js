import React from "react";



function LatestNews() {
    return (
        <latestnews className="pb-4 pb-sm-5 mb-2 mb-md-4 container">
    <div className="d-sm-flex align-items-center justify-content-between mb-3 mb-sm-4 pb-sm-2">
        <h2 className="h3 text-light mb-2 mb-sm-0 top-headings">Latest news</h2><a role="button" tabindex="0" href="/car-finder/blog" class="btn btn-link btn-light fw-normal px-0">Go to blog<i class="fa  fa-rgular fa-arrow-right fs-sm mt-0 ps-1 ms-2"></i></a>
    </div>
    

<div className="card-group ms-lg-4  ">
  <div className=" conainer  card card-s bg ">
    <img className="card-img-top" src="/Assets/Images/LatestNews/img1.webp " alt=" " />
    
     <div className="py-3"><a className=" fs-xs text-uppercase text-decoration-none" href=" #Home ">Events
                    </a>
                        <h3 className="fs-base pt-1 mb-2"><a className="nav-link-light" href="#Home ">
                            <b>Top 10 Classic Car Events</b></a></h3><a className="d-flex align-items-center text-decoration-none pt-2" href="#Home">
                            <div className=" person-pic position-relative flex-shrink-0 rounded-circle overflow-hidden me-2"> 
                            <span className= "img-car">
                           
                            <img className="image-car comment-img" src="/Assets/Images/LatestNews/img1.1.webp" alt=""/>
                            </span>

                            </div>
                            <div >
                                <h6 className="text-color fs-sm text-light opacity-80 lh-base mb-1"><b>Jacob Jones</b></h6>
                                <div className=" text-color d-flex text-light opacity-60 fs-xs"><span className="me-2 pe-1 text-color"><i className="fa fa-calendar-alt opacity-70 me-1"></i><b>May 8</b></span><span><i className="fa fa-regular fa-comment  opacity-70 me-1"></i><b>No comments</b></span></div>
                            </div>
                        </a>
                    </div>
  </div>
  <div className=" conainer card ms-lg-4 bg ">
    <img className="card-img-top car-img" src="/Assets/Images/LatestNews/img2.webp" alt=" " />
    <div className="py-3"><a class="fs-xs text-uppercase text-decoration-none" href="#Home">Inspiration
                    </a>
                        <h3 className="fs-base pt-1 mb-2"><a className="nav-link-light" href=" #Home">
                        <b>5 Predictions From the Past About the Future</b></a></h3><a className="d-flex align-items-center text-decoration-none pt-2" href="#Home">
                            <div className=" person-pic position-relative flex-shrink-0 rounded-circle overflow-hidden me-2"> 
                            <span className= "car-img">
                           
                            <img className="image-car comment-img" src="/Assets/Images/LatestNews/img2.1.webp" alt=""/>
                            </span>

                            </div>
                            <div className="text-color">
                                <h6 className="fs-sm text-light opacity-80 lh-base mb-1 text-color"><b>Guy Hawkins</b></h6>
                                <div className="d-flex text-light opacity-60 fs-xs text-color"><span className="me-2 pe-1 text-color"><i className="fa fa-calendar-alt opacity-70 me-1"></i><b>Apr 25</b></span><span><i className="fa fa-regular fa-comment  opacity-70 me-1"></i><b>6 comments</b></span></div>
                            </div>
                        </a>
                    </div>
  </div>
  <div className=" card ms-lg-4 me-lg-4 bg">
    <img className="card-img-top" src="/Assets/Images/LatestNews/img3.webp" alt=" " />
    <div className="py-3"><a class="fs-xs text-uppercase text-decoration-none" href="#Home ">Test Drives
                    </a>
                        <h3 className="fs-base pt-1 mb-2"><a className="nav-link-light" href="#Home ">
                        <b>This Year is All About New Harley Davidson</b></a></h3><a className="d-flex align-items-center text-decoration-none pt-2" href="#Home">
                            <div className=" person-pic position-relative flex-shrink-0 rounded-circle overflow-hidden me-2"> 
                            <span className= "car-img">
                           
                            <img className="image-car comment-img" src="/Assets/Images/LatestNews/img3.1.webp" alt=""/>
                            </span>

                            </div>
                            <div className="text-color">
                                <h6 className="fs-sm text-light opacity-80 lh-base mb-1 text-color"><b>Jacob Jones</b></h6>
                                <div className="d-flex text-light opacity-60 fs-xs text-color"><span className="me-2 pe-1"><i className="fa fa-calendar-alt opacity-70 me-1"></i><b>Mar 12</b></span><span><i className="fa fa-regular fa-comment  opacity-70 me-1"></i><b>2 comments</b></span></div>
                            </div>
                        </a>
                    </div>
  </div>
</div>
</latestnews>
        );
    }
    
    export default LatestNews;