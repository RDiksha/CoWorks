import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { fetchWorkspaces } from "../store/workspaceSlice";
import { Card, Button, Row, Col, Spinner } from "react-bootstrap";
import { FiChevronsRight } from "react-icons/fi";
import "./WorkSpaceList.css";

const WorkspaceList: React.FC = () => {
  const dispatch = useDispatch();
  const { workspaces, status, error } = useSelector(
    (state: RootState) => state.workspace
  );

  useEffect(() => {
    dispatch(fetchWorkspaces() as any);
  }, [dispatch]);

  if (status === "loading") {
    return (
      <div className="text-center">
        <Spinner animation="border" />
      </div>
    );
  }

  if (status === "failed") {
    return <div className="text-danger">Error: {error}</div>;
  }

  return (
    <Row className="g-4">
      {workspaces.map((workspace, index) => (
        <Col md={6} lg={4} className="mb-4" key={index}>
          <Card className="h-100 d-flex flex-column">
            <Card.Header className="d-flex justify-content-between align-items-center">
              <div>{workspace.name}</div>
              <div style={{ fontWeight: "bold", color: "#555" }}>6 kms</div>
            </Card.Header>
            <Card.Body className="d-flex flex-column">
              <Card.Img
                variant="top"
                src={workspace.images[0]}
                alt={workspace.name}
              />
              <Card.Text className="card-address" title={workspace.address}>
                {workspace.address}
              </Card.Text>

              <div className="d-flex flex-row py-2 justify-content-between mt-auto">
                <Button
                  className="custom-outline-button-primary d-flex flex-column  py-2 justify-content-between"
                  style={{ width: "140px" }}
                >
                  <div style={{ fontWeight: "600", textAlign: "left" }}>
                    Day Pass
                  </div>
                  <div
                    className="d-flex"
                    style={{
                      fontSize: "0.9rem",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    ₹{workspace.day_pass_price} / day
                    <FiChevronsRight
                      style={{ marginLeft: "5px" }}
                      className="align-items-end"
                    />
                  </div>
                </Button>
                <Button
                  className="custom-outline-button-secondary d-flex flex-column  py-2 justify-content-between position-relative"
                  style={{ width: "140px" }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-10px",
                      left: "25%",
                      backgroundColor: "black",
                      color: "white",
                      fontWeight: "700",
                      fontSize: "0.75rem",
                      padding: "2px 6px",
                      borderRadius: "4px",
                      zIndex: 10,
                      userSelect: "none",
                    }}
                  >
                    {20}% OFF
                  </div>
                  <div style={{ fontWeight: "600", textAlign: "left" }}>
                    Bulk Pass
                  </div>
                  <div
                    className="d-flex"
                    style={{
                      fontSize: "0.9rem",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    ₹{workspace.day_pass_price * 10} / day
                    <FiChevronsRight
                      style={{ marginLeft: "5px" }}
                      className="align-items-end"
                    />
                  </div>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default WorkspaceList;
