import Card from "react-bootstrap/Card";

const SingleBook = ({ libro }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        className="h-75"
        variant="top"
        src={libro.img}
        alt={"Copertina di" + "" + libro.title}
      />
      <Card.Body>
        <Card.Title>{libro.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
