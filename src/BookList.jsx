import { Component } from "react"; // Importa la classe base Component di React
import { Row, Col, Form } from "react-bootstrap"; // Importa grid e form da React-Bootstrap
import SingleBook from "./SingleBook"; // Importa il componente per il singolo libro

class BookList extends Component {
  // Definizione dello state locale del componente
  state = {
    searchBook: "", // Stringa per memorizzare il valore digitato nell'input di ricerca
  };

  // Il metodo render() è obbligatorio in un componente di tipo class
  render() {
    // Estraggo i libri passati come props e il valore di ricerca dallo state
    const { libri } = this.props;
    const { searchBook } = this.state;

    // Eseguo il filtro: per ogni libro controllo se il titolo, in minuscolo,
    // include la stringa di ricerca (anch'essa in minuscolo)
    const libriFiltrati = libri.filter((b) =>
      b.title.toLowerCase().includes(searchBook.toLowerCase())
    );

    return (
      <>
        {/* Fila contenente il campo di ricerca, centrata orizzontalmente */}
        <Row className="justify-content-center g-2 mb-4">
          <Col xs={12} md={6} lg={4}>
            <Form.Group controlId="searchBook">
              <Form.Control
                type="search" // Tipo "search" per input ottimizzato alla ricerca
                placeholder="Cerca un libro..."
                value={searchBook} // Valore controllato dallo state
                // Ad ogni digitazione aggiorno lo state con il nuovo valore
                onChange={(e) => this.setState({ searchBook: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Fila contenente la lista di libri filtrati */}
        <Row className="justify-content-center g-2">
          {libriFiltrati.map((l) => (
            // Ogni libro è posizionato in una colonna responsiva
            <Col
              key={l.asin} // Chiave unica basata sull'ASIN del libro
              xs={12} // 12 colonne (full-width) su extra-small
              md={4} // 4 colonne su medium
              lg={3} // 3 colonne su large
              className="d-flex justify-content-center"
            >
              {/* Rendering del componente SingleBook, passando il libro */}
              <SingleBook libro={l} />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default BookList; // Esportazione del componente per l'uso in altri file
