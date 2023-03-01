import Container from "react-bootstrap/Container";
import { NavLink, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Header.css";
import auth from "../../firebase.init";
import Button from "react-bootstrap/esm/Button";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  //Sign out
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <header className="header bg-success">
      <Navbar expand="lg" className="py-3">
        <Container>
          <Navbar.Brand as={Link} to="/" className="text-light">
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/" className="nav-link text-light">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-link text-light">
                About
              </NavLink>
              <NavLink to="/service" className="nav-link text-light">
                Service
              </NavLink>
              {user ? (
                <Button className="btn" onClick={handleSignOut}>
                  Sign out
                </Button>
              ) : (
                <NavLink
                  to="/signin"
                  className="nav-link btn btn-warning text-black"
                >
                  Sign in
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
