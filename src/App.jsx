import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./MyNav";
import MyFooter from "./MyFooter";
import Welcome from "./welcome";
import BookList from "./BookList";
import { Container } from "react-bootstrap";
import horrorBooks from "..//data/horror.json";

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <MyNav />

      <Welcome />
      <Container className="py-4 g-2">
        <h1>Libri Horror</h1>
        <BookList libri={horrorBooks} />
      </Container>

      <MyFooter />
    </div>
  );
}

export default App;
