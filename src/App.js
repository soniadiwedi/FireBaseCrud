
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { AddBook } from './components/AddBook';
import { Container, Navbar, Row, Col } from "react-bootstrap";
import { BookList } from './components/BookList';
import { useState } from 'react';

function App() {
  const[bookId,setBookId]=useState("")

  const getBookHandler=(id)=>{
    console.log("id of book to be edited",id)
    setBookId(id)
  }
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
            <AddBook bookId={bookId}  setBookId={setBookId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <BookList getBookHandler={getBookHandler}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
