import React, { useEffect, useState } from "react";
import { Form, Button, ButtonGroup, InputGroup, Alert } from "react-bootstrap";
import { addBook, getBook, updateBook } from "../services/bookServices";
export const AddBook = ({ bookId, setBookId }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("Available");
  const [flag, setFlag] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title == "" || author == "") {
      setMessage({ error: true, msg: "Fiels are empty" });
    }
    const newBook = { title, author, status };

    try {
      if (bookId !== undefined && bookId !== "") {
        await updateBook(bookId, newBook);
        setBookId("")
        setMessage({ error: false, msg: "Book is Updated" });
        
      } else {
        await addBook(newBook);
        setMessage({ error: false, msg: "Book is created" });
       
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
    setTitle("");
    setAuthor("");
    console.log(newBook);
  };

  // Editing
  const editHandler = async () => {
    setMessage("");
    try {
      const res = await getBook(bookId);
      console.log("the record is :", res);
      setTitle(res.data().title);
      setAuthor(res.data().author);
      setStatus(res.data().status);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };
  useEffect(() => {
    console.log("the id here is", bookId);
    if (bookId !== undefined && bookId !== "") {
      editHandler();
    }
  }, [bookId]);
  return (
    <div>
      {message?.msg && (
        <Alert
          variant={message.error ? "danger" : "success"}
          dismissible
          onClose={() => setMessage("")}
        >
          {message.msg}
        </Alert>
      )}
      <div className="p-4 box">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBookTitle">
            <InputGroup>
              <InputGroup.Text id="formBookTitle">B</InputGroup.Text>
              <Form.Control
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Book Title"
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookAuthor">
            <InputGroup>
              <InputGroup.Text id="formBookAuthor">A</InputGroup.Text>
              <Form.Control
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                type="text"
                placeholder="Book Author"
              />
            </InputGroup>
          </Form.Group>
          <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button
              disabled={flag}
              variant="success"
              onClick={(e) => {
                setStatus("Available");
                setFlag(true);
              }}
            >
              Available
            </Button>
            <Button
              variant="danger"
              disabled={!flag}
              onClick={(e) => {
                setStatus("Not Available");
                setFlag(false);
              }}
            >
              Not Available
            </Button>
          </ButtonGroup>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
