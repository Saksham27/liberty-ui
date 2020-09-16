import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import newUsers from "./../../assets/newUsers.PNG";
import newFeedbacks from "./../../assets/newFeedbacks.PNG";
import employees from "./../../assets/Employees.PNG";
import totalSales from "./../../assets/totalSales.PNG";

export default function Summary(props) {
  console.log(props);
  return (
    <Row className="summary">
      <Col md="3" xs="6" className="summary-box">
        <Card className="displayCard">
          <Row>
            <Col className="displayCard-icon">
              <img src={newUsers} alt="new Users Icon"/>
            </Col>
            <Col className="displayCard-details">
              <Row className="displayCard-details-title">new users</Row>
              <Row className="displayCard-details-value">{props.summaryData.newUsers}</Row>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col md="3" xs="6" className="summary-box">
        <Card className="displayCard">
          <Row>
            <Col className="displayCard-icon">
              <img src={newFeedbacks} alt="new feedbacks icon"/>
            </Col>
            <Col className="displayCard-details">
              <Row className="displayCard-details-title">new feedbacks</Row>
              <Row className="displayCard-details-value">{props.summaryData.newFeedbacks}</Row>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col md="3" xs="6" className="summary-box">
        <Card className="displayCard">
          <Row>
            <Col className="displayCard-icon">
              <img src={employees} alt="employees icon"/>
            </Col>
            <Col className="displayCard-details">
              <Row className="displayCard-details-title">employees</Row>
              <Row className="displayCard-details-value">{props.summaryData.employees}</Row>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col md="3" xs="6" className="summary-box">
        <Card className="displayCard">
          <Row>
            <Col className="displayCard-icon">
              <img src={totalSales} alt="total sales icon" />
            </Col>
            <Col className="displayCard-details">
              <Row className="displayCard-details-title">total sales</Row>
              <Row className="displayCard-details-value">{props.summaryData.totalSales}</Row>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}
