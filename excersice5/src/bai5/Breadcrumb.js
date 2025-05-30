import 'bootstrap/dist/css/bootstrap.min.css';

function Breadcrumb() {
  return (
    <nav className="container my-3">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <li className="breadcrumb-item active">Students</li>
      </ol>
    </nav>
  );
}
export default Breadcrumb;
