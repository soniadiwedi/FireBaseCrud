
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { AddBook } from './components/AddBook';
import { Container, Navbar, Row, Col } from "react-bootstrap";
import { BookList } from './components/BookList';

function App() {
  return (
    <div className="App">
    <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">Library - Firebase CRUD</Navbar.Brand>
        </Container>
      </Navbar>

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddBook  />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <BookList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
