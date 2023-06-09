import { categorySlug } from "@/models/CategoriesSlug";
import Link from "next/link";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

const NavbarComponents = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="sm" sticky="top" collapseOnSelect>
            <Container>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav>
                        <Nav.Link as={Link} href="/">Breaking News</Nav.Link>
                        <Nav.Link as={Link} href="/search">Search News</Nav.Link>
                        <NavDropdown title="Categories">
                            {categorySlug.map((item,index) => (
                                <NavDropdown.Item key={index} as={Link} href={`/categories/${item}`}>{item}</NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default NavbarComponents;