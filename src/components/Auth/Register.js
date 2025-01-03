import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
const Register = (props) => {
  const navigate = useNavigate();

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
                        value={props.username}
                        onChange={(event) =>
                          props.setUsername(event.target.value)
                        }
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
                        value={props.email}
                        onChange={(event) => props.setEmail(event.target.value)}
                        required
                      />
                    </Form.Group>
                  </div>

                  <div className="form-outline mb-4">
                    <Form.Group controlId="formPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        value={props.password}
                        onChange={(event) =>
                          props.setPassword(event.target.value)
                        }
                        required
                      />
                    </Form.Group>
                  </div>

                  <Button
                    className="btn btn-primary btn-lg px-5"
                    type="submit"
                    onClick={() => {}}
                  >
                    Sign Up
                  </Button>
                </div>

                <div>
                  <p className="mb-0">
                    Already have an account?{" "}
                    <a
                      href="#"
                      className="text-muted fw-bold"
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      Login
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

export default Register;
