import 'bootstrap/dist/css/bootstrap.min.css';

function HeaderFPT() {
  return (
    <div className="bg-warning text-center py-3">
      <img src="/images/Logo_FPT_Education.png" className="img-fluid w-25" alt="FPT Logo" />
      <h2 className="mt-2 text-white">FPT UNIVERSITY</h2>
      <nav>
        <a class="nav-link active text-white bg-primary mx-2 rounded" href="#">Home</a>
        <a class="nav-link text-white mx-2" href="#">About</a>
        <a class="nav-link text-white mx-2" href="#">Contact</a>
      </nav>
    </div>
  );
}

export default HeaderFPT;