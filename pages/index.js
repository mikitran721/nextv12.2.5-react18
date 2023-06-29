// import type { NextPage } from "next";
import Layout from "../components/Layout";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const Home = () => {
  return (
    <Layout>
      <div className="jumbotron">
        <h1>My Next12 app</h1>
        <p>This is my NextJs12 App content.</p>
        <p>
          <Link href="/posts">
            <Button bsStyle="primary">Load more</Button>
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default Home;
