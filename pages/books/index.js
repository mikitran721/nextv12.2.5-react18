import React from "react";
// import { Card } from "bootstrap-4-react/lib/components";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import Layout from "../../components/Layout";
import { getBooks } from "../../lib/books";

const Books = ({ books }) => {
  return (
    <Layout>
      {books.map((book) => (
        <Card className="my-3 shadow" key={book.bookName}>
          <Card.Body>
            <Card.Title>{book.bookName}</Card.Title>
            <Card.Text>{book.bookContent}</Card.Text>
            <Link href="/">
              <Button variant="dark">Back</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </Layout>
  );
};

// khong phu thuoc vao user request, hay path; chi can getstaticprop
export const getStaticProps = async () => {
  const books = await getBooks();
  //   console.log(books);
  return {
    props: {
      books,
    },
  };
};

export default Books;
