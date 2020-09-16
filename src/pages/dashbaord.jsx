import React, { useState } from "react";
import Summary from "../components/Summary/Summary";
import { Container, Row, Col, NavbarBrand, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faTv,
  faAtom,
  faDraftingCompass,
  faStarOfLife,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faCompass, faFlag } from "@fortawesome/free-regular-svg-icons";
import LogoFull from "./../assets/logo-full.svg";
import LogoMini from "./../assets/logo-mini.svg";
import User from "./../assets/user-image1.jpg";
import SalesOverview from "../components/SalesOverview/SalesOverview";
import TaskTable from "../components/TaskTable/TaskTable";
import CurrentStatus from "../components/CurrentStatus/CurrentStatus";
import Tickets from "../components/Tickets/tickets";
import { connect } from "react-redux";

function Dashbaord(props) {
  const [active] = useState("menu-item-active");
  console.log(props);
  return (
    <div>
      <Row className="topBar">
        <Container className="topBar-container">
          <Row>
            <Col md="3" sm="2" xs="1" className="logoBar">
              <NavbarBrand>
                <img
                  className="d-none d-md-block"
                  src={LogoFull}
                  height="30px"
                  width="160px"
                  alt="logo"
                ></img>
                <img
                  className="d-md-none"
                  src={LogoMini}
                  height="30px"
                  alt="mini logo"
                ></img>
              </NavbarBrand>
            </Col>
            <Col className="logoBar logoBar-icons">
              <div className="search">
                <FontAwesomeIcon
                  icon={faSearch}
                  opacity="0.2"
                  className="search-icon"
                  size="xs"
                />
                <input type="text" className="search-field"></input>
              </div>
              <div className="notification">
                <FontAwesomeIcon icon={faBell} />
                <div className="notification-count">5</div>
              </div>
              <div className="account">
                <img
                  src={User}
                  height="37px"
                  className="account-avatar"
                  alt="user account avatar"
                />
              </div>
              <div className="d-lg-none hamburger">
                <FontAwesomeIcon icon={faBars} />
              </div>
            </Col>
          </Row>
        </Container>
      </Row>
      <Navbar sticky="top" className="d-none d-lg-flex px-0 py-0">
        <Container className=" menu">
          <Col className={`menu-item ${active}`}>
            <FontAwesomeIcon icon={faTv} className="menu-item-icon" />
            Dashbaord
          </Col>
          <Col className={`menu-item`}>
            <FontAwesomeIcon icon={faCompass} className="menu-item-icon" />
            Widgets
          </Col>
          <Col className="menu-item">
            {" "}
            <FontAwesomeIcon icon={faAtom} className="menu-item-icon" />
            UI Elements
          </Col>
          <Col className="menu-item">
            <FontAwesomeIcon icon={faFlag} className="menu-item-icon" /> Pages
          </Col>
          <Col className="menu-item">
            <FontAwesomeIcon
              icon={faDraftingCompass}
              className="menu-item-icon"
            />
            Forms
          </Col>
          <Col className="menu-item">
            <FontAwesomeIcon icon={faStarOfLife} className="menu-item-icon" />
            Apps
          </Col>
        </Container>
      </Navbar>
      <Row className="dashboard">
        <Container>
          <div className="dashboard-container">
            <Row>
              <Col>
                <Summary summaryData={props.summary}></Summary>
              </Col>
            </Row>
            <Row>
              <Col>
                <SalesOverview
                  employee={props.employeeInfo}
                  productSupport={props.productSupport}
                  sales={props.sales}
                ></SalesOverview>
              </Col>
            </Row>
            <Row>
              <Col>
                <TaskTable tasks={props.assignedTask}></TaskTable>
              </Col>
            </Row>
            <Row>
              <Col>
                <CurrentStatus timeline={props.timelineData} currentData={props.currentData} projectStatus={props.projectStatus}></CurrentStatus>
              </Col>
            </Row>
            <Row>
              <Col>
                <Tickets ticketData={props.ticketData}></Tickets>
              </Col>
            </Row>
          </div>
        </Container>
      </Row>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    ...state.dashbaord.data,
  };
}

export default connect(mapStateToProps)(Dashbaord);
