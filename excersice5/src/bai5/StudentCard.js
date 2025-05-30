import 'bootstrap/dist/css/bootstrap.min.css';

function StudentCard({ name, id, location, img }) {
  return (
    <div className="col-md-6 mb-4">
      <div className="card h-100" >
        <img src={img} className="card-img-top" alt={name} style={{ height: "480px" }} />
        <div className="card-body">
          <h6>{id}</h6>
          <h5>{name}</h5>
          <p>{location}</p>
          <div className="mb-2">
            <input type="radio" name={`attendance-${id}`} id={`${id}-absent`} defaultChecked/>
            <label htmlFor={`${id}-absent`} className="ms-2 me-4">Absent</label>

            <input type="radio" name={`attendance-${id}`} id={`${id}-present`} />
            <label htmlFor={`${id}-present`} className="ms-2">Present</label>
          </div>
          <button className="btn btn-warning">Submit</button>
        </div>
      </div>
    </div>
  );
}
export default StudentCard;
