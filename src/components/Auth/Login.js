import { useState } from "react";
import "../Auth/Login.scss";
import { postLogin } from "../../services/apiServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (props) => {
    //validate

    //submit api
    let data = await postLogin(email, password);
    console.log("check data:", data);

    if (data && data.EC === 0) {
      toast.success(data.EM);
      navigate("/");
    }

    if (data && +data.EC !== 0) {
      toast.error(data.EM);
    }
  };
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card login-card">
              <div className="card-body p-5 text-center">
                <div className=" mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-muted mb-5">
                    Please enter your login and password!
                  </p>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="typeEmailX">
                      Email
                    </label>
                    <input
                      type={"email"}
                      id="typeEmailX"
                      className="form-control form-control-lg"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="typePasswordX">
                      Password
                    </label>
                    <input
                      type={"password"}
                      id="typePasswordX"
                      className="form-control form-control-lg"
                      value={password}
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                    />
                  </div>

                  <p className="small mb-5 pb-lg-2">
                    <a className="text-muted" href="#!">
                      Forgot password?
                    </a>
                  </p>

                  <button
                    className="btn btn-primary btn-lg px-5"
                    type={"submit"}
                    onClick={() => {
                      handleLogin();
                    }}
                  >
                    Login
                  </button>
                </div>

                <div>
                  <p className="mb-0">
                    Don't have an account?{" "}
                    <a href="#!" className="text-muted fw-bold">
                      Sign Up
                    </a>
                  </p>
                </div>

                <div className="mt-2 return-homepage">
                  <span
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    &#60;&#60; Back To Homepage
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
