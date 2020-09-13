import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import newUsers from "./../../assets/newUsers.PNG";
import newFeedbacks from "./../../assets/newFeedbacks.PNG";
import employees from "./../../assets/Employees.PNG";
import totalSales from "./../../assets/totalSales.PNG";
import "./Summary.scss";


export default function Summary() {
  return (
    <Row className="summary">
      <Col md="3" xs="6" className="box">
        <Card className="displayCard">
          <Row>
            <Col className="displayCard-icon">
              <img src={newUsers} />
            </Col>
            <Col className="displayCard-details">
              <Row className="displayCard-details-title">new users</Row>
              <Row className="displayCard-details-value">65,650</Row>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col md="3" xs="6" className="box">
        <Card className="displayCard">
          <Row>
            <Col className="displayCard-icon">
              <img src={newFeedbacks} />
            </Col>
            <Col className="displayCard-details">
              <Row className="displayCard-details-title">new feedbacks</Row>
              <Row className="displayCard-details-value">32,602</Row>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col md="3" xs="6" className="box">
        <Card className="displayCard">
          <Row>
            <Col className="displayCard-icon">
              <img src={employees} />
            </Col>
            <Col className="displayCard-details">
              <Row className="displayCard-details-title">employees</Row>
              <Row className="displayCard-details-value">17,583</Row>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col md="3" xs="6" className="box">
        <Card className="displayCard">
          <Row>
            <Col className="displayCard-icon">
              <img src={totalSales} />
            </Col>
            <Col className="displayCard-details">
              <Row className="displayCard-details-title">total sales</Row>
              <Row className="displayCard-details-value">61,119</Row>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}
