import React from "react";
import { getPostById, getPostIds } from "../../lib/post";
import Layout from "../../components/Layout";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/router";
import { Spinner } from "react-bootstrap";
import spinnerStyles from "../../styles/Spinner.module.css";

const Post = ({ post }) => {
  const router = useRouter();

  //neu trang chua tao ra, isFallback cua router ===true
  // Trang tam thoi sau se dc render
  if (router.isFallback) {
    return (
      <Spinner
        className={spinnerStyles.spinnerLg}
        animation="border"
        role="status"
        variant="dark"
      >
        <span className="sr-only">LOADING.... </span>
      </Spinner>
    );
  }

  // khi getStaticProps chay xong lan dau tien. sau do no update vao static data list
  // bz: lan sau se dc cho vao ds prerender
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
  const paths = await getPostIds(5);
  return {
    paths,
    // fallback: false, //bat ky path ko  return dung se toi page 404
    fallback: true, //path nào chưa có sẽ chạy page tạm thời, doi getStaticProps chay xong -> return page dep
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostById(params.id);
  return {
    props: {
      post,
    },
    revalidate: 1, //tu dong update lai data (neu thay doi tu goc - api) 1 lan trong 1s
  };
};

export default Post;
