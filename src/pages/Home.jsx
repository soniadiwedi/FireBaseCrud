
import { Container, Navbar, Row, Col } from "react-bootstrap";

import { useState } from 'react';
import { AddBook } from "../components/AddBook";
import { BookList } from "../components/BookList";
export const Home = () => {
    const[bookId,setBookId]=useState("")

  const getBookHandler=(id)=>{
    console.log("id of book to be edited",id)
    setBookId(id)
  }
  return (
    <div>
        

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
  )
}
