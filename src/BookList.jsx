import { Row, Col } from "react-bootstrap";

import SingleBook from "./SingleBook";

const BookList = ({ libri }) => (
  <Row className="justify-content-center g-2">
    {libri.map((l) => (
      <Col
        key={l.asin}
        xs={12}
        md={4}
        lg={3}
        className="d-flex justify-content-center"
      >
        <SingleBook libro={l} />
      </Col>
    ))}
  </Row>
);

export default BookList;
