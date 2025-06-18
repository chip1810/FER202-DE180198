import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Banner(){
  return(
  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="/images/pizza1.png" className="d-block w-100" alt="Pizza 1" />
        <div className="carousel-caption d-none d-md-block">
         <h2>Delicious Variety</h2>
        <p>Fresh, hot, and ready to serve.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="/images/pizza2.png" className="d-block w-100" alt="Pizza 2" />
        <div className="carousel-caption d-none d-md-block">
          <h2>Delicious Variety</h2>
        <p>Fresh, hot, and ready to serve.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="/images/pizza3.png" className="d-block w-100" alt="Pizza 3" />
        <div className="carousel-caption d-none d-md-block">
          <h2>Delicious Variety</h2>
        <p>Fresh, hot, and ready to serve.</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
);
}

export default Banner;
