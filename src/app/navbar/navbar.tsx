import { Container, Nav, Navbar } from "react-bootstrap";
import { ListUl } from "react-bootstrap-icons";

export default function NavBarFunction() {
    return (
        <Navbar bg="primary" data-bs-theme="dark" fixed="top">
            <Container>
               <ListUl />
            </Container>
        </Navbar>

    )
}