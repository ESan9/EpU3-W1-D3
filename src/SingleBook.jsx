import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const BookCard = ({ libro }) => {
  return (
    <Card style={{ width: "18rem", height: "auto" }}>
      <Card.Img
        className="h-75"
        variant="top"
        src={libro.img}
        alt={"l'immagine di" + "" + libro.title}
      />
      <Card.Body>
        <Card.Title>{libro.title}</Card.Title>
        <Card.Text>{libro.price} $</Card.Text>
        <Button variant="primary" className="fixedbottom">
          Compra
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
