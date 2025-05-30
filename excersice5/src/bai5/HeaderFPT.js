import 'bootstrap/dist/css/bootstrap.min.css';

function HeaderFPT() {
  return (
    <div className="bg-warning text-center py-3">
<img  src="/images/Logo_FPT_Education.png" className="img-fluid w-25" alt="FPT Logo" />
      <h2 className="mt-2 text-white">FPT UNIVERSITY</h2>
      <nav>
        <a className="mx-2 text-white" href="#">Home</a>
        <a className="mx-2 text-white" href="#">About</a>
        <a className="mx-2 text-white" href="#">Contact</a>
      </nav>
    </div>
  );
}

export default HeaderFPT;