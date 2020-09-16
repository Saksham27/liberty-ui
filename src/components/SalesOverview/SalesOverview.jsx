import React from "react";
import {
  LineChart,
  Line,
  Tooltip,
  AreaChart,
  Area,
  XAxis,
  ResponsiveContainer,
  YAxis,
} from "recharts";
import { Button, Card, Col, Row } from "react-bootstrap";

export default function SalesOverview(props) {
  const renderAreaChart = (
    <ResponsiveContainer width="100%" height={190}>
      <AreaChart
        data={props.productSupport.ProductSupportdata}
        margin={{ left: 0, right: 0 }}
      >
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
        data={props.sales.Salesdata}
        margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
      >
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          style={{ fontSize: "12px" }}
          interval={1}
        />
        <YAxis axisLine={false} tickLine={false} style={{ fontSize: "12px" }} />
        <Tooltip />

        <Line
          type="monotone"
          dataKey="OnlineSales"
          stroke="#d9e1fd"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="StoreSales"
          stroke="#6b71e9"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
  return (
    <React.Fragment>
      <Row className="mt-4">
        <Col md="4" className="mb-4 mb-md-0 pl-md-0 pr-md-4 px-0 ">
          <Card className="overview-card cardMinHeight">
            <Card.Body className="pt-0">
              <Row className="employee-avatar centerElement">
                <img
                  src={require(`./../../assets/${props.employee.avatar}`)}
                  height="92px"
                  className="employee-avatar-pic"
                  alt="developer"
                />
              </Row>
              <Row className="my-2 employee-name centerElement">
                {props.employee.name}
              </Row>
              <Row className="my-2 employee-position centerElement">
                {props.employee.position}
              </Row>
              <Row className="my-3 employee-details centerElement">
                {props.employee.description}
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
                      {props.employee.postsMade}
                    </Col>
                    <Col xs="4" xl="4">
                      {props.employee.followers}
                    </Col>
                    <Col xs="4" xl="4">
                      {props.employee.likes}
                    </Col>
                  </Row>
                  <Row className="employee-social-stats-name my-2">
                    <Col xs="4">Post</Col>
                    <Col xs="4">Followers</Col>
                    <Col xs="4">Likes</Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md="4" className="mb-4 mb-md-0 px-0 px-md-4">
          <Card className="cardMinHeight">
            <Card.Body className="mt-4 mx-4">
              <Row className="stats-name">Top Products</Row>
              <Row className="stats-value">
                {props.productSupport.topProducts}
              </Row>
              <Row className="stats-change">
                {props.productSupport.topProductPercentageChange}
              </Row>
              <Row className="mt-4 pt-4 stats-name borderTop">
                Support Cases
              </Row>
              <Row className="stats-value">
                {props.productSupport.supportCases}
              </Row>
              <Row className="stats-change">
                {" "}
                {props.productSupport.supportCasesPercentageChange}
              </Row>
            </Card.Body>
            <Row className="px-0">
              <Col className="">{renderAreaChart}</Col>
            </Row>
          </Card>
        </Col>

        <Col md="4" className=" mb-md-0 px-0 pl-md-4 pr-md-0">
          <Card className="cardMinHeight">
            <Card.Body>
              <Row className="sales-stats centerText mb-3">
                <Col>
                  <Row className="sales-stats-value my-3">
                    <Col xs="6">{props.sales.totalSales}</Col>
                    <Col xs="6">{props.sales.openCampaign}</Col>
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
                    <Col xs="6">{props.sales.onlineSales}</Col>
                    <Col xs="6">{props.sales.storeSales}</Col>
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
