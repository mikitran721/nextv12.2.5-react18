import React from "react";
import { getPostById, getPostIds } from "../../lib/post";
import Layout from "../../components/Layout";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import Button from "react-bootstrap/Button";

const Post = ({ post }) => {
  return (
    <Layout>
      <Card className="my-3 shadow">
        <Card.Body>
          <Card.Title>{post.Title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Link href="/posts">
            <Button variant="dark">Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  );
};

// lay du lieu tinh & phu thuoc vao path params
export const getStaticPaths = async () => {
  const paths = await getPostIds();
  return {
    paths,
    fallback: false, //bat ky path ko  return dung se toi page 404
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostById(params.id);
  return {
    props: {
      post,
    },
  };
};

export default Post;
