import React, { useState } from "react";
import Summary from "../components/Summary/Summary";
import { Container, Row, Col, NavbarBrand, Button } from "react-bootstrap";
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

export default function Dashbaord() {
  const [active, setActive] = useState("menu-item-active");
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
                ></img>
                <img className="d-md-none" src={LogoMini} height="30px"></img>
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
                <img src={User} height="37px" className="account-avatar" />
              </div>
              <div className="d-lg-none hamburger">
                <FontAwesomeIcon icon={faBars} />
              </div>
            </Col>
          </Row>

          <Row className="d-none d-lg-flex menu">
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
          </Row>
        </Container>
      </Row>
      <Row className="dashboard">
        <Container>
          <div className="dashboard-container">
            <Row>
              <Col>
                <Summary></Summary>
              </Col>
            </Row>
            <Row>
              <Col>
                <SalesOverview></SalesOverview>
              </Col>
            </Row>
            <Row>
              <Col>
                <TaskTable></TaskTable>
              </Col>
            </Row>
            <Row>
              <Col>first</Col>
            </Row>
            <Row>
              <Col>first</Col>
            </Row>
          </div>
        </Container>
      </Row>
    </div>
  );
}
