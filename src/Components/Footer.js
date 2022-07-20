import React from "react";



function Footer() {
    return (
        <footer className="footer bg-faded-light">

            <div className="border-bottom border-light py-4">
                <div className="d-sm-flex align-items-center justify-content-between container">
                    <a className="d-inline-flex" href="/car-finder">
                       <span>
                        <img className="footer-img" src="./Assets/Images/carfinder-logo.svg" alt=""/>
                       </span>
                    </a>
                <div className="d-flex pt-3 pt-sm-0">
                    <div className="ms-n3 dropdown"><button type="button" id="react-aria-12" aria-expanded="false" className="btn btn-light btn-link btn-sm fw-normal shadow-none py-2 dropdown-toggle btn btn-primary"><i className="fi-globe me-2"></i>Eng</button></div>
                    <div className="me-n2 dropdown"><button type="button" id="react-aria-13" aria-expanded="false" className="btn btn-light btn-link btn-sm fw-normal shadow-none py-2 dropdown-toggle btn btn-primary"><i className="fi-map-pin me-2"></i>New York</button></div>
                </div>
            </div>
        </div>
        <div className="pt-4 pb-3 pt-lg-5 pb-lg-4 container">
            <div className="row pt-2 pt-lg-0 row">
                <div className="pb-2 mb-4 col-lg-3">
                    <h3 className="h5 text-light mb-2">Subscribe to our newsletter</h3>
                    <p className="fs-sm text-light opacity-70">Don't miss any relevant offers!</p>
                    <form className="form-group form-group-light">
                        <div className="input-group input-group-sm"><span className="text-muted input-group-text" ><i className="fi-mail"></i></span><input placeholder="Your email" className="form-control" /></div><button type="button" className="btn btn-primary btn-icon btn-sm"><i className="fi-send"></i></button>
                    </form>
                </div>
                <div className="mb-2 mb-sm-4 col-lg-2 col-md-3 col-sm-6 offset-xl-1">
                    <h3 className="fs-base text-light">Buying &amp; Selling</h3>
                    <ul className="list-unstyled fs-sm">
                        <li><a className="nav-link-light" href="/car-finder#">Find a car</a></li>
                        <li><a className="nav-link-light" href="/car-finder#">Sell your car</a></li>
                        <li><a className="nav-link-light" href="/car-finder#">Car dealers</a></li>
                        <li><a className="nav-link-light" href="/car-finder#">Compare cars</a></li>
                        <li><a className="nav-link-light" href="/car-finder#">Online car appraisal</a></li>
                    </ul>
                </div>
                <div className="mb-2 mb-sm-4 col-lg-2 col-md-3 col-sm-6">
                    <h3 className="fs-base text-light">About</h3>
                    <ul className="list-unstyled fs-sm">
                        <li><a className="nav-link-light" href="/car-finder#">About Finder</a></li>
                        <li><a className="nav-link-light" href="/car-finder#">Contact us</a></li>
                        <li><a className="nav-link-light" href="/car-finder#">FAQs &amp; support</a></li>
                        <li><a className="nav-link-light" href="/car-finder#">Mobile app</a></li>
                        <li><a className="nav-link-light" href="/car-finder#">Blog</a></li>
                    </ul>
                </div>
                <div className="mb-2 mb-sm-4 col-lg-2 col-md-3 col-sm-6">
                    <h3 className="fs-base text-light">Profile</h3>
                    <ul className="list-unstyled fs-sm">
                        <li><a className="nav-link-light" href="/car-finder#">My account</a></li>
                        <li><a className="nav-link-light" href="/car-finder#">Wishlist</a></li>
                        <li><a className="nav-link-light" href="/car-finder#">My listings</a></li>
                        <li><a className="nav-link-light" href="/car-finder#">Add listing</a></li>
                    </ul>
                </div>
                <div className="mb-2 mb-sm-4 col-xl-2 col-md-3 col-sm-6">
                    <ul className="nav-light flex-column nav">
                        <li className="mb-2 nav-item"><a href="tel:4065550120" data-rr-ui-event-key="tel:4065550120" className="fw-normal text-light text-nowrap p-0 nav-link"><i className="fi-device-mobile mt-n1 me-2 align-middle text-primary"></i>(406) 555-0120</a></li>
                        <li className="mb-2 nav-item"><a href="mailto:example@gmail.com" data-rr-ui-event-key="mailto:example@gmail.com" className="fw-normal text-light text-nowrap p-0 nav-link"><i className="fi-mail mt-n1 me-2 align-middle text-primary"></i>example@gmail.com</a></li>
                    </ul>
                    <div className="d-flex flex-wrap pt-4"><a href=" " className="btn btn-icon btn-xs rounded-circle btn-translucent-light mb-2 me-2"><i class="fi-facebook"></i></a><a href=" " className="btn btn-icon btn-xs rounded-circle btn-translucent-light mb-2 me-2"><i className="fi-twitter"></i></a><a href=" " className="btn btn-icon btn-xs rounded-circle btn-translucent-light mb-2 me-2"><i className="fi-telegram"></i></a><a href=" " className="btn btn-icon btn-xs rounded-circle btn-translucent-light mb-2"><i className="fi-messenger"></i></a></div>
                </div>
            </div>
        </div>
       
    </footer>
       
  
       
    );
  }
  
  export default Footer;