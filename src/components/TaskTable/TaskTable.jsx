import React from "react";
import { Badge, Card, Col, Row, Table } from "react-bootstrap";

export default function TaskTable(props) {
  return (
    <Row>
      <Col className="px-0 my-4">
        <Card>
          <Table responsive="xl">
            <thead>
              <tr className="bg-light table-heading">
                <th className="pl-5 pr-3 py-4">ID</th>
                <th className="px-3 py-4">Assignee</th>
                <th className="px-3 py-4">Task Details</th>
                <th className="px-3 py-4">Payment Method</th>
                <th className="px-3 py-4">Payment Status</th>
                <th className="px-3 py-4">Amount</th>
                <th className="px-3 py-4">Tracking Number</th>
              </tr>
            </thead>
            <tbody className="table-data">
              {props.tasks.map((task, index) => {
                return (
                  <tr key={index}>
                    <td className="pl-5 pr-3 py-3">#{task.id}</td>
                    <td className="px-3 py-3">{task.assignee}</td>
                    <td className="px-3 py-3">{task.taskDetail}</td>
                    <td className="px-3 py-3">{task.paymentMethod}</td>
                    <td className="px-3 py-3">
                      {task.paymentStatus === "Approved" ? (
                        <Badge variant="success" className="payment-badge">
                          Approved
                        </Badge>
                      ) : task.paymentStatus === "Pending" ? (
                        <Badge variant="warning" className="payment-badge">
                          Pending
                        </Badge>
                      ) : (
                        <Badge variant="danger" className="payment-badge">
                          Rejected
                        </Badge>
                      )}
                    </td>
                    <td className="px-3 py-3">{task.amount}</td>
                    <td className="px-3 py-3">{task.trackingNumber}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Card>
      </Col>
    </Row>
  );
}
