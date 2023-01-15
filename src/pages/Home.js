import React from "react";

import Layout from "../Layout/Layout";
import Banner from "../components/Banner";
import Container from "../components/Container";

const Home = () => {
  return (
    <div>
      <Layout>
        <Banner />
        <Container></Container>
      </Layout>
    </div>
  );
};

export default Home;
