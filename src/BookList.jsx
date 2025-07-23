import { Row, Col } from "react-bootstrap";
import libriHorror from "../data/horror.json";
import BookCard from "./BookCard";

const BookList = () => (
  <Row className="justify-content-center g-2">
    {libriHorror.map((libro) => (
      <Col
        key={libro.asin}
        xs={12}
        md={4}
        lg={3}
        className="d-flex justify-content-center"
      >
        <BookCard libro={libro} />
      </Col>
    ))}
  </Row>
);

export default BookList;
