import React from "react";
import { getRandomJoke } from "../../lib/joke";
// import { Card } from "bootstrap-4-react/lib/components";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import Layout from "../../components/Layout";

const Random = ({ joke }) => {
  return (
    <Layout>
      <Card className="my-3 shadow">
        <Card.Body>
          <Card.Title>Here is your random Joke for today.</Card.Title>
          <Card.Text>{joke.value}</Card.Text>
          <Link href="/">
            <Button variant="dark">Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  );
};

// data thuoc vao moi request, van tao ra html tinh cho frontend, tot cho seo
export const getServerSideProps = async () => {
  const joke = await getRandomJoke();
  // joke = false; //ko lay dc joke

  if (!joke) {
    return {
      notFound: true, //404
    };
    // return {
    //   redirect: {
    //     destination: "/posts",
    //     permanent: false,
    //   },
    // };
  }
  return {
    props: {
      joke,
    },
  };
};

export default Random;
