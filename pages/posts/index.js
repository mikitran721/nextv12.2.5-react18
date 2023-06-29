import React from "react";
import Layout from "../../components/Layout";
import { getPosts } from "../../lib/post";
import Card from "react-bootstrap/Card";
import Link from "next/link";

const Posts = ({ posts }) => {
  return (
    <Layout>
      {posts.map((post) => (
        <Card key={post.id} className="shadow mb-3">
          <Card.Body>
            <Card.Title>
              {post.id}-- {post.title}{" "}
            </Card.Title>
            <Card.Text> {post.body} </Card.Text>
            <Link href={`/posts/${post.id}`} passHref>
              <Card.Link>See more</Card.Link>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </Layout>
  );
};

// Get data from backend | db | api
// lay du lieu tinh (truoc khi request user dung den)
// giong nhau cho moi loai user
export const getStaticProps = async () => {
  const posts = await getPosts(10);
  return {
    props: {
      posts,
    },
  };
};
export default Posts;
