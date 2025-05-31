import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { RiCommunityFill } from "react-icons/ri";
import { FaWifi } from "react-icons/fa";
import { IoIosCafe, IoIosTimer } from "react-icons/io";
import { MdCurrencyRupee, MdOutlineSportsTennis } from "react-icons/md";
import { GrLounge } from "react-icons/gr";
import { CgGym } from "react-icons/cg";
import "./AmenitiesSection.css";

const AmentiesSection: React.FC = () => {
  const amenities = [
    { name: "Community Events", icon: <RiCommunityFill /> },
    { name: "Gym Facilities", icon: <CgGym /> },
    { name: "Hi-Speed WiFi", icon: <FaWifi /> },
    { name: "Cafe & Tea bar", icon: <IoIosCafe /> },
    { name: "Affordable", icon: <MdCurrencyRupee /> },
    { name: "Comfort Lounges", icon: <GrLounge /> },
    { name: "Quick Booking", icon: <IoIosTimer /> },
    { name: "Sports Area", icon: <MdOutlineSportsTennis /> },
  ];

  return (
    <div className="amenities-section">
      <Container>
        <h2 className="text-start mb-4 fw-bold">Why Choose Us?</h2>
        <Row className="gy-4">
          {amenities.map((amenity, index) => (
            <Col key={index} xs={6} md={3}>
              <Card className="text-center h-100 amenity-card d-flex align-items-center">
                <Card.Body
                  className="d-flex flex-column flex-md-row align-items-center justify-content-center"
                  style={{ gap: "10px" }}
                >
                  <div
                    style={{ color: "#FFD700", fontSize: 30, flexShrink: 0 }}
                  >
                    {amenity.icon}
                  </div>
                  <Card.Text className="mb-0">{amenity.name}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AmentiesSection;
