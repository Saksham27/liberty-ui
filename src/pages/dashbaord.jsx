import React from "react";
import Button from "react-bootstrap/Button";
import {
  Container,
  Row,
  Col,
  NavbarBrand,
  Badge,
  Image,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTv } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import LogoFull from "./../assets/logo-full.svg";
import LogoMini from "./../assets/logo-mini.svg";
import User from "./../assets/user-image1.jpg";

export default function Dashbaord() {
  return (
    <div>
      <Row>
        <Container>
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
            </Col>
          </Row>

          <Row className="menu">
            <Col className="menu-item">
              <FontAwesomeIcon icon={faTv} className="menu-item-icon" />
              Dashbaord
            </Col>
            <Col className="menu-item">Widgets</Col>
            <Col className="menu-item">UI Elements</Col>
            <Col className="menu-item">Pages</Col>
            <Col className="menu-item">Forms</Col>
            <Col className="menu-item">Apps</Col>
          </Row>
        </Container>
      </Row>
      <Row>
        <Container>
          <Row>
            <Col>first</Col>
          </Row>
          <Row>
            <Col>first</Col>
          </Row>
          <Row>
            <Col>first</Col>
          </Row>
          <Row>
            <Col>first</Col>
          </Row>
          <Row>
            <Col>first</Col>
          </Row>
        </Container>
      </Row>
    </div>
  );
}
