import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const handleBtnLogin = () => {
    navigate("/login");
  };

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const account = useSelector((state) => state.user.account);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Brand href="#home">Project 1</Navbar.Brand> */}
        <NavLink to="/" className="navbar-brand">
          Project 1
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/users" className="nav-link">
              User
            </NavLink>
            <NavLink to="/admins" className="nav-link">
              Admin
            </NavLink>

            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
            <Nav.Link href="/admins">Admin</Nav.Link> */}
          </Nav>
          <Nav>
            {isAuthenticated ? (
              <NavDropdown title="Setting" id="basic-nav-dropdown">
                <NavDropdown.Item>Log In</NavDropdown.Item>
                <NavDropdown.Item>Log Out</NavDropdown.Item>
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <div className="log">
                <button
                  className="btn-login"
                  onClick={() => {
                    handleBtnLogin();
                  }}
                >
                  Log In
                </button>
                <button
                  className="btn-signup"
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Sign In
                </button>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
