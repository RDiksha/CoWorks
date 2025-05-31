import React from "react";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import "./HeroSection.css";

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section text-black align-items-top">
      <Container>
        <Row className="align-items-center">
          <Col
            xs={12}
            md={6}
            className="mb-4 mb-md-0 text-md-start text-center"
          >
            <h1 className="display-6 fw-bold">
              Host your meeting with world-class amenities. Starting at{" "}
              <span style={{ color: "orange", fontWeight: "bold" }}>₹199</span>.
            </h1>
          </Col>
          <Col xs={12} md={6} className="text-center">
            <Image
              src="/static_assets/workstation.jpg"
              fluid
              alt="Hero Workspace"
              className="hero-image"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
