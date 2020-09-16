import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default function tickets(props) {
  return (
    <Row>
      <Col className="px-0 my-4">
        <Card className="pt-3 pl-2">
          <Card.Body>
            <Card.Title className="heading mb-4">Manage Tickets</Card.Title>
            <Container fluid>
              {props.ticketData.map((ticket, index) => {
                return (
                  <React.Fragment key={index}>
                    {index === 0 ? null : (
                      <div className="borderTop mt-2"></div>
                    )}

                    <Row className="ticket mt-3 pb-2">
                      <Col md="1">
                        <img
                          className="rounded-circle mb-4 mb-md-0"
                          src={require(`./../../assets/${ticket.userImage}`)}
                          alt="profile"
                          height="43px"
                        ></img>
                      </Col>
                      <Col md="9">
                        <div className="d-flex">
                          <p className="ticket-username mr-2 mb-0 no-wrap px-0">
                            {ticket.name}&nbsp;:
                          </p>

                          <p className="mb-0 ">
                            <span className="ticket-number d-inline-block">
                              [#{ticket.ticketNumber}]
                            </span>
                            <span className="ticket-subject d-inline-block">
                              {ticket.ticketSubject}
                            </span>
                          </p>
                        </div>
                        <p className="text-small text-gray mb-2">
                          {ticket.ticketDescription}
                        </p>
                        <div className="row  d-md-flex d-none">
                          <div className="col-4 d-flex">
                            <p className="mb-0 mr-2 ticket-lastResponded">
                              Last responded :
                            </p>
                            <p className="ticket-lastResponded mr-2 mb-0">
                              {ticket.lastResponded}
                            </p>
                          </div>
                          <div className="col-4 d-flex">
                            <p className="mb-0 mr-2 ticket-lastResponded">
                              Due in :
                            </p>
                            <p className="ticket-lastResponded mr-2 mb-0">
                              {ticket.due}
                            </p>
                          </div>
                        </div>
                      </Col>
                      <div className="col-md-2">
                        <Button className="button py-2">Manage</Button>
                      </div>
                    </Row>
                  </React.Fragment>
                );
              })}
            </Container>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
