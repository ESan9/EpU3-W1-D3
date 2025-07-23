import { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    searchBook: "",
  };

  render() {
    const { libri } = this.props;
    const { searchBook } = this.state;

    const libriFiltrati = libri.filter((b) =>
      b.title.toLowerCase().includes(searchBook.toLowerCase())
    );

    return (
      <>
        <Row className="justify-content-center g-2 mb-4">
          <Col xs={12} md={6} lg={4}>
            <Form.Group controlId="searchBook">
              <Form.Control
                type="search"
                placeholder="Cerca un libro..."
                value={searchBook}
                onChange={(e) => this.setState({ searchBook: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="justify-content-center g-2">
          {libriFiltrati.map((l) => (
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
      </>
    );
  }
}

export default BookList;
