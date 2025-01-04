import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { postRegister } from "../../services/apiServices";
import { toast } from "react-toastify";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
const Register = (props) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleShowHidePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleRegister = async () => {
    if (!validateEmail(email)) {
      toast.error("Invalid Email");
      return;
    }

    if (!password) {
      toast.error("Invalid Password");
      return;
    }

    const data = await postRegister(email, username, password);
    console.log(">>>>>>>>. check submit: ", data);

    if (data.EC === 0) {
      toast.success(data.EM);
      navigate("/login");
    }

    if (data.EC !== 0) {
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
                  <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                  <p className="text-muted mb-5">
                    Please enter your email and password to create an account!
                  </p>

                  <div className="form-outline mb-4">
                    <Form.Group controlId="formUsername">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        required
                      />
                    </Form.Group>
                  </div>

                  <div className="form-outline mb-4">
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                      />
                    </Form.Group>
                  </div>

                  <div className="form-outline mb-4">
                    <Form.Group controlId="formPassword">
                      <Form.Label>Password</Form.Label>
                      <div className="input-group">
                        <Form.Control
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                          required
                        />
                        <span
                          className="input-group-text"
                          onClick={() => {
                            handleShowHidePassword();
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </span>
                      </div>
                    </Form.Group>
                  </div>

                  <Button
                    className="btn btn-primary btn-lg px-5"
                    type="submit"
                    onClick={() => {
                      handleRegister();
                    }}
                  >
                    Sign Up
                  </Button>
                </div>

                <div>
                  <p className="mb-0">
                    Already have an account?{" "}
                    <Link to="/login" className="text-muted fw-bold">
                      Login
                    </Link>
                  </p>
                </div>

                <div className="mt-2 return-homepage">
                  <Link to="/" className="text-muted">
                    &#60;&#60; Back To Homepage
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
