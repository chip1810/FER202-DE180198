import 'bootstrap/dist/css/bootstrap.min.css';

function FooterDetail() {
  return (
    <footer className="bg-warning text-white mt-5 p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Our Address</h5>
            <p>Khu đô thị FPT Đà Nẵng</p>
            <p>☎ 0403371111</p>
            <p>📞 +852 6735 4121</p>
            <p>📧 info@fpt.edu.vn</p>
          </div>
          <div className="col-md-6 text-end">
            <p>© Copyright 2023</p>
            <div>
              <i className="bi bi-google me-2"></i>
              <i className="bi bi-facebook me-2"></i>
              <i className="bi bi-linkedin me-2"></i>
              <i className="bi bi-envelope"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default FooterDetail;
