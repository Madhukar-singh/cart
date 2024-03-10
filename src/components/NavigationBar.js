import { Button, Container, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("login_token");
    navigate("/login");
  };
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Cart</Navbar.Brand>
        <Button
          variant="link"
          className="text-light text-decoration-none"
          onClick={logout}
        >
          Logout
        </Button>
      </Container>
    </Navbar>
  );
};
export default NavigationBar;
