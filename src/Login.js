import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Login() {
  return (
    <div style={{ padding: "50px" }}>
      <h1>Đăng nhập</h1>
      <p>
        tài khoản:<br></br>
              <input></input><br></br>
        mật khẩu:<br></br>
      <input></input><br></br>
      <button>Đăng nhập</button><br></br>
            <Link to="/forgetPassword" style={{ marginRight: 10 }}>Quên mật khẩu</Link>

      </p>
    </div>

  );
}

export default About;
