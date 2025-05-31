import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import WorkspaceList from "./components/WorkspaceList";
import HeroSection from "./components/HeroSection";
import AmentiesSection from "./components/AmenitiesSection";

const App: React.FC = () => {
  return (
    <>
      <Navbar bg="light" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/static_assets/download.png"
              alt="Logo"
              height="60"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <img
              src="/static_assets/contact.jpg"
              alt="Logo"
              height="40"
              className="d-inline-block align-top"
            />
          </Nav>
        </Container>
      </Navbar>

      <HeroSection />
      <AmentiesSection />

      <Container className="py-5">
        <h2 className="text-start mb-4 fw-bold">Our Space Overview</h2>
        <WorkspaceList />
      </Container>
    </>
  );
};

export default App;
