import Head from "next/head";
import Container from "react-bootstrap/Container";
import NavbarMenu from "./NavbarMenu";

const Layout = ({ children }) => (
  <>
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My Next12 App</title>
    </Head>
    <Container>
      <header>
        <NavbarMenu />
      </header>
      <main>{children}</main>
    </Container>
  </>
);
export default Layout;
