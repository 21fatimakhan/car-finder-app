import React from "react";




function PopularCars() {
    return ( 
        <popularcars className="pb-5 mb-md-4 container">
    <div className="d-sm-flex align-items-center justify-content-between mb-3 mb-sm-4 pb-sm-2">
        <h2 className="h3 text-light mb-2 mb-sm-0 top-headings">Popular car body types</h2>
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
                    <a className="nav-link-light stretched-link fw-bold" href=" #Home">Sedan</a>
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

                    
                    </div><a className="nav-link-light stretched-link fw-bold" href="#Home">SUV</a>
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
            <a className="nav-link-light stretched-link fw-bold" href="#Home">Wagon</a>
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
            <a className="nav-link-light stretched-link fw-bold" href="#Home">Crossover</a>
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
          <a className="nav-link-light stretched-link fw-bold" href="#Home">Coupe</a>
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
                <a className="nav-link-light stretched-link fw-bold" href="#Home">Pickup</a>
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
                     <a className="nav-link-light stretched-link fw-bold" href="#Home">Sport Coupe</a>
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
                   <a className="nav-link-light stretched-link fw-bold" href="#Home">Compact</a>
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
                           <a className="nav-link-light stretched-link fw-bold" href="#Home">Convertible</a>
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
                                   <a className="nav-link-light stretched-link fw-bold" href=" #Home ">Family MPV</a>
            </div>
        </div>
    </div>

</popularcars>
      );
}

export default PopularCars;