import 'bootstrap/dist/css/bootstrap.min.css';

const Exercise7 = () => {
  return (
    <div className="container my-4">
      


     
      <p className="fw-bold">Cards Columns</p>

      <div className="row">
        <div className="col-md-4">
          <div className="card border-0" style={{ backgroundColor: '#007bff' }}>
            <img
              src="/images/bmw.jpg"
              className="card-img-top"
              alt="Car 1"
            />
            <div className="card-body text-center text-white">
              <p className="card-text">Some text inside the first card</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0" style={{ backgroundColor: '#ffc107' }}>
            <img
              src="/images/bmw1.png"
              className="card-img-top"
              alt="Car 2"
            />
            <div className="card-body text-center">
              <p className="card-text">Some text inside the first card</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0" style={{ backgroundColor: '#dc3545' }}>
            <img
              src="/images/bmw2.png"
              className="card-img-top"
              alt="Car 3"
            />
            <div className="card-body text-center text-white">
              <p className="card-text">Some text inside the first card</p>
            </div>
          </div>
        </div>
      </div>
</div>
      
  );
};

export default Exercise7;
