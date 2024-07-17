import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavBarFunction() {
    return (
        <Navbar bg="dark" data-bs-theme="dark" fixed="top">
            <Container fluid>
               <h5 className="navDisplay">Meal Plan</h5>
            </Container>
        </Navbar>

    )
}