import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const timelineData = [
  {
    subject: "User confirmation",
    description: "Donec rutrum congue leo eget malesuada.",
    time: "7 months ago.",
  },
  {
    subject: "Continuous evaluation",
    description: "Vivamus suscipit tortor eget felis porttitor volutpat.",
    time: "7 months ago.",
  },
  {
    subject: "Promotion",
    description:
      "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    time: "7 months ago.",
  },
];

const currentData = [
  {
    day: "Mon",
    Profit: 330,
  },
  {
    day: "Tue",
    Profit: 380,
  },
  {
    day: "Wed",
    Profit: 230,
  },
  {
    day: "Thu",
    Profit: 400,
  },
  {
    day: "Fri",
    Profit: 309,
  },
  {
    day: "Sat",
    Profit: 530,
  },
  {
    day: "Sun",
    Profit: 340,
  },
];
export default function CurrentStatus() {
  const renderBarChart = (
    <ResponsiveContainer width="100%" height={164}>
      <BarChart barCategoryGap="35%" height="164px" data={currentData}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey="day"
          style={{ fontSize: "13px" }}
        />

        <Tooltip />
        <Bar maxBarSize="600" dataKey="Profit" fill="#464de4" background />
      </BarChart>
    </ResponsiveContainer>
  );
  return (
    <React.Fragment>
      <Row className="mt-1">
        <Col md="6" className="mb-4 mb-md-0 px-0 pl-lg-0 pr-lg-4 ">
          <Card className="cardMinHeight">
            <Card.Body className="py-6 px-4 pt-6">
              <Card.Title className="chart-title mt-3 mb-4">
                The current chart
              </Card.Title>
              <Row>
                <Col>{renderBarChart}</Col>
              </Row>
            </Card.Body>
            <div className=" project-status border-top py-4 px-4">
              <Row>
                <Col className="project-status-title">Project Status</Col>
              </Row>
              <Row>
                <Col>
                  <span className="project-status-number d-inline-block mr-2">
                    76,533
                  </span>
                  <span className="project-status-unit d-inline-block">
                    pcs
                  </span>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>

        <Col md="6" className=" mb-md-0 px-0 pl-lg-4 pr-lg-0">
          <Card className="cardMinHeight">
            <Card.Body>
              <Card.Title className="update-title mt-3">Updates</Card.Title>
              <ul className="timeline ml-2 my-3">
                {timelineData.map((timeline, index) => {
                  return (
                    <li>
                      <h6 className="update-subject">{timeline.subject}</h6>
                      <p className="update-description mb-0">
                        {timeline.description}
                      </p>
                      <p className="update-time text-muted">
                        <FontAwesomeIcon icon={faClock} />
                        <div className="d-inline-block ml-2 my-1">
                          {timeline.time}
                        </div>
                      </p>
                    </li>
                  );
                })}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
}
