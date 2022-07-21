import React from "react";




function PopularCars() {
    return ( 
        <popularcars className="pb-5 mb-md-4 container">
    <div className="d-sm-flex align-items-center justify-content-between mb-3 mb-sm-4 pb-sm-2">
        <h2 className="h3 text-light mb-2 mb-sm-0 top-headings">Popular car body types</h2><a role="button" tabindex="0" href="/car-finder/catalog?view=grid" className="btn btn-link btn-light fw-normal px-0">View all<i className="fi-arrow-long-right fs-sm mt-0 ps-1 ms-2"></i></a>
    </div>
    <div className="g-2 g-md-4 row row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2">
        <div className="col">
            <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
                <div className="d-flex justify-content-center mb-3">
                <span >
                            <span className= "car-img">
                           
                            <img className="image-car" src="/Assets/Images/CarImages/sedan.svg" alt=""/>
                            </span>

                            </span>

                    </div>
                    <a className="nav-link-light stretched-link fw-bold" href="/car-finder/catalog?view=list">Sedan</a>
            </div>
        </div>
        <div className="col">
            <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
                <div className="d-flex justify-content-center mb-3">
                <span >
                            <span className= "car-img">
                           
                            <img classNameName="image-car" src="/Assets/Images/CarImages/suv.svg" alt=""/>
                            </span>

                            </span>

                    
                    </div><a className="nav-link-light stretched-link fw-bold" href="/car-finder/catalog?view=grid">SUV</a>
            </div>
        </div>
        <div className="col">
            <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
                <div className="d-flex justify-content-center mb-3">
                <span >
                            <span className= "car-img">
                           
                            <img className="image-car" src="/Assets/Images/CarImages/wagon.svg" alt=""/>
                            </span>

                            </span>
            </div>
            <a className="nav-link-light stretched-link fw-bold" href="/car-finder/catalog?view=list">Wagon</a>
            </div>
        </div>
        <div className="col">
            <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
                <div className="d-flex justify-content-center mb-3">
                <span >
                            <span className= "car-img">
                           
                            <img className="image-car" src="/Assets/Images/CarImages/crossover.svg" alt=""/>
                            </span>

                            </span>
            </div>
            <a className="nav-link-light stretched-link fw-bold" href="/car-finder/catalog?view=grid">Crossover</a>
            </div>
        </div>
        <div className="col">
            <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
                <div className="d-flex justify-content-center mb-3">
                <span >
                            <span className= "car-img">
                           
                            <img className="image-car" src="/Assets/Images/CarImages/coupe.svg" alt=""/>
                            </span>

                            </span>
          </div>
          <a className="nav-link-light stretched-link fw-bold" href="/car-finder/catalog?view=list">Coupe</a>
            </div>
        </div>
        <div className="col">
            <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
                <div className="d-flex justify-content-center mb-3"> <span >
                            <span className= "car-img">
                           
                            <img classNameName="image-car" src="/Assets/Images/CarImages/pickup.svg" alt=""/>
                            </span>

                            </span>
                </div>
                <a className="nav-link-light stretched-link fw-bold" href="/car-finder/catalog?view=grid">Pickup</a>
            </div>
        </div>
        <div className="col">
            <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
                <div className="d-flex justify-content-center mb-3">
                <span >
                            <span className= "car-img">
                           
                            <img classNameName="image-car" src="/Assets/Images/CarImages/sport.svg" alt=""/>
                            </span>

                            </span>
                     </div>
                     <a className="nav-link-light stretched-link fw-bold" href="/car-finder/catalog?view=list">Sport Coupe</a>
            </div>
        </div>
        <div className="col">
            <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
                <div className="d-flex justify-content-center mb-3">
                <span >
                            <span className= "car-img">
                           
                            <img classNameName="image-car" src="/Assets/Images/CarImages/compact.svg" alt=""/>
                            </span>

                            </span>
                   </div>
                   <a className="nav-link-light stretched-link fw-bold" href="/car-finder/catalog?view=grid">Compact</a>
            </div>
        </div>
        <div className="col">
            <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
                <div className="d-flex justify-content-center mb-3">
                <span >
                            <span className= "car-img">
                           
                            <img className="image-car" src="/Assets/Images/CarImages/convertible.svg" alt=""/>
                            </span>

                            </span>
                           </div>
                           <a className="nav-link-light stretched-link fw-bold" href="/car-finder/catalog?view=list">Convertible</a>
            </div>
        </div>
        <div className="col">
            <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
                <div className="d-flex justify-content-center mb-3">
                <span >
                            <span className= "car-img">
                           
                            <img className="image-car" src="/Assets/Images/CarImages/mpv.svg" alt=""/>
                            </span>

                            </span>
                                   </div>
                                   <a className="nav-link-light stretched-link fw-bold" href="/car-finder/catalog?view=grid">Family MPV</a>
            </div>
        </div>
    </div>

</popularcars>
      );
}

export default PopularCars;