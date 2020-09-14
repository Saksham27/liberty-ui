import React from "react";
import { LineChart, Line, Tooltip, AreaChart, Area, XAxis, ResponsiveContainer, CartesianGrid, YAxis, Legend } from "recharts";
import { Button, Card, Col, Row } from "react-bootstrap";
import developer from "./../../assets/developer-image.jpg";
const ProductSupportdata = [
  { name: "2012", Product: 300, Support: 150 },
  { name: "2013", Product: 400, Support: 200 },
  { name: "2014", Product: 300, Support: 150 },
  { name: "2015", Product: 440, Support: 200 },
  { name: "2016", Product: 700, Support: 350 },
  { name: "2017", Product: 550, Support: 320 },
  { name: "2018", Product: 730, Support: 400 },
];
export default function SalesOverview() {
  const renderAreaChart = (
    <ResponsiveContainer width="100%" height={190}>
      <AreaChart data={ProductSupportdata} margin={{ left: 0, right: 0 }}>
        <Area
          type="monotone"
          dataKey="Product"
          stroke="#868eef"
          fill="#d9e1fd"
        />
        <Area
          type="monotone"
          dataKey="Support"
          stroke="#6168e8"
          fill="#adb4f5"
        />
        <XAxis dataKey="name" hide />
        <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  );

  const renderLineChart = (
    <ResponsiveContainer width="100%" height={230}>
      <LineChart
        
        data={ProductSupportdata}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" tickLine="false"/>
        <YAxis />
        <Tooltip />

        <Line type="monotone" dataKey="Product" stroke="#6b71e9" />
        <Line type="monotone" dataKey="Support" stroke="#d9e1fd" />
      </LineChart>
    </ResponsiveContainer>
  );
  return (
    <React.Fragment>
      <Row className="mt-4">
        <Col lg="4" className="pl-lg-0 pr-lg-4 ">
          <Card className="overview-card">
            <Card.Body className="pt-0">
              <Row className="employee-avatar centerElement">
                <img
                  src={developer}
                  height="37px"
                  height="92px"
                  className="employee-avatar-pic"
                />
              </Row>
              <Row className="my-2 employee-name centerElement">
                Maria Johonson
              </Row>
              <Row className="my-2 employee-position centerElement">
                Developer
              </Row>
              <Row className="my-3 employee-details centerElement">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Lorem
              </Row>
              <Row className="my-4  centerElement">
                <Button variant="primary" className="button">
                  follow
                </Button>
              </Row>
              <Row className="employee-social-stats centerText borderTop">
                <Col>
                  <Row className="employee-social-stats-value my-3">
                    <Col xs="4" xl="4">
                      5890
                    </Col>
                    <Col xs="4" xl="4">
                      1596
                    </Col>
                    <Col xs="4" xl="4">
                      7894
                    </Col>
                  </Row>
                  <Row className="employee-social-stats-name my-2">
                    <Col xs="4">Post</Col>
                    <Col xs="4">Folllowers</Col>
                    <Col xs="4">Likes</Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col lg="4" className="px-lg-4">
          <Card>
            <Card.Body className="mt-4 mx-4">
              <Row className="stats-name">Top Products</Row>
              <Row className="stats-value">598,496</Row>
              <Row className="stats-change">6.5% change from today</Row>
              <Row className="mt-4 pt-4 stats-name borderTop">
                Support Cases
              </Row>
              <Row className="stats-value">323,360</Row>
              <Row className="stats-change">2.5% change from yesterday</Row>
            </Card.Body>
            <Row className="px-0">
              <Col className="">{renderAreaChart}</Col>
            </Row>
          </Card>
        </Col>

        <Col lg="4" className="pl-lg-4 pr-lg-0">
          <Card>
            <Card.Body>
              <Row className="sales-stats centerText mb-3">
                <Col>
                  <Row className="sales-stats-value my-3">
                    <Col xs="6">6,256</Col>
                    <Col xs="6">8569</Col>
                  </Row>
                  <Row className="sales-stats-name my-2">
                    <Col xs="6">Total Sales</Col>
                    <Col xs="6">Open Campaign</Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>{renderLineChart}</Col>
              </Row>

              <Row className="sales-stats centerText mt-3">
                <Col>
                  <Row className="sales-stats-value my-3">
                    <Col xs="6">5136</Col>
                    <Col xs="6">4596</Col>
                  </Row>
                  <Row className="sales-stats-name my-2">
                    <Col xs="6">Online Sales</Col>
                    <Col xs="6">Store Sales</Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
}
