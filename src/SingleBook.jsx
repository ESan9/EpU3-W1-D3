import { Component } from "react";
import Card from "react-bootstrap/Card";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  // Definisco un metodo legato all’istanza che verrà eseguito quando lo invoco (Ex via onClick).
  toggleSelect = () => {
    this.setState(({ selected }) => ({ selected: !selected }));
    // La funzione passata a setState riceve lo stato precedente (qui destrutturato subito in { selected }).

    // Ritorna un oggetto con la proprietà selected invertita (!selected).
  };
  // Sto praticamente dicendo che a ogni chiamata del toogleSelect lo stato passerà da false a true.

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
