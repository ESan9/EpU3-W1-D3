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
    // Queste due righe fanno uso della destructuring assignment per “estra­rre” valori dagli oggetti this.props e this.state e assegnarli a variabili locali con lo stesso nome delle proprietà.
    const { libro } = this.props;

    const { selected } = this.state;

    // this.props è l’oggetto che contiene tutte le proprietà passate al componente.

    // Scrivendo { libro } dico a JavaScript: “Prendi dal mio oggetto this.props la proprietà chiamata libro e assegnala a una variabile locale di nome libro.”

    // A questo punto posso usare semplicemente libro nel render() (o altrove), anziché scrivere ogni volta this.props.libro.

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
