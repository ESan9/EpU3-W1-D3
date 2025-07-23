import { Component } from "react";
import Card from "react-bootstrap/Card";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  toggleSelect = () => {
    this.setState(({ selected }) => ({ selected: !selected }));
  };
  render() {
    const { libro } = this.props;
    const { selected } = this.state;

    return (
      <Card
        className={`border ${selected ? "border-danger" : "border-primary"}`}
        style={{ width: "18rem", cursor: "pointer" }}
        onClick={this.toggleSelect}
      >
        <Card.Img
          className="book-cover"
          variant="top"
          src={libro.img}
          alt={`Copertina di ${libro.title}`}
        />
        <Card.Body>
          <Card.Title>{libro.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
