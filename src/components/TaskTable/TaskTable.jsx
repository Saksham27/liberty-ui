import React from "react";
import { Badge, Card, Col, Row, Table } from "react-bootstrap";

export default function TaskTable() {
  return (
    <Row>
      <Col className="px-0 my-4">
        <Card>
          <Table responsive="xl">
            <thead>
              <tr class="bg-light table-heading">
                <th class="pl-5 pr-3 py-4">ID</th>
                <th class="px-3 py-4">Assignee</th>
                <th class="px-3 py-4">Task Details</th>
                <th class="px-3 py-4">Payment Method</th>
                <th class="px-3 py-4">Payment Status</th>
                <th class="px-3 py-4">Amount</th>
                <th class="px-3 py-4">Tracking Number</th>
              </tr>
            </thead>
            <tbody className="table-data">
              <tr>
                <td class="pl-5 pr-3 py-3">#320</td>
                <td class="px-3 py-3">Mark C.Diaz</td>
                <td class="px-3 py-3">Support of thteme</td>
                <td class="px-3 py-3">Credit card</td>
                <td class="px-3 py-3">
                  <Badge variant="success" className="payment-badge">
                    Approved
                  </Badge>
                </td>
                <td class="px-3 py-3">$12,245</td>
                <td class="px-3 py-3">JPBBN435893458</td>
              </tr>
              <tr>
                <td class="pl-5 pr-3 py-3">#321</td>
                <td class="px-3 py-3">Jose D</td>
                <td class="px-3 py-3">Verify your email address !</td>
                <td class="px-3 py-3">Internet banking</td>
                <td class="px-3 py-3">
                  <Badge variant="warning" className="payment-badge">
                    Pending
                  </Badge>
                </td>
                <td class="px-3 py-3">$12,245</td>
                <td class="px-3 py-3">BDYBN435893325</td>
              </tr>
              <tr>
                <td class="pl-5 pr-3 py-3">#322</td>
                <td class="px-3 py-3">Philips T</td>
                <td class="px-3 py-3">Item support message send</td>
                <td class="px-3 py-3">Credit card</td>
                <td class="px-3 py-3">
                  <Badge variant="success" className="payment-badge">
                    Approved
                  </Badge>
                </td>
                <td class="px-3 py-3">$12,245</td>
                <td class="px-3 py-3">JSNTN435884258</td>
              </tr>
              <tr>
                <td class="pl-5 pr-3 py-3">#323</td>
                <td class="px-3 py-3">Luke Pixel</td>
                <td class="px-3 py-3">New submission on website</td>
                <td class="px-3 py-3">Cash on delivery</td>
                <td class="px-3 py-3">
                  <Badge variant="danger" className="payment-badge">
                    Rejected
                  </Badge>
                </td>
                <td class="px-3 py-3">$12,245</td>
                <td class="px-3 py-3">JPABT435893678</td>
              </tr>
            </tbody>
          </Table>
        </Card>
      </Col>
    </Row>
  );
}
