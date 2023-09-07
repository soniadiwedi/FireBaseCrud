import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { deleteBook, getAllBooks, getBook, updateBook } from "../services/bookServices";

export const BookList = ({getBookHandler}) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await getAllBooks();
      console.log(res.docs);
      setBooks(res.docs.map((el) => ({ ...el.data(), id: el.id })));
    } catch (err) {
      console.log(err);
    }
  };

  const deleteHandler=async(id)=>{
    await deleteBook(id)
   getData()
  }
  return (
    <div>
      <div className="mb-2">
        <Button variant="dark edit" onClick={()=>getData()}>Refresh List</Button>
      </div>

      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre>} */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books?.map((el, i) => {
            return (
              <tr key={el.id}>
                <td>{i + 1}</td>
                <td>{el.title}</td>
                <td>{el.author}</td>
                <td>{el.status}</td>
                <td><Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getBookHandler(el.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(el.id)}
                  >
                    Delete
                  </Button></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
