// SinglePage.jsx
import React from "react";
import SingleFetched from "../SingleFetched";
import Alsolike from "../Alsolike";
import Designers from "../Designers";
import Layout from "../Layout/Layout";

const SinglePage = () => (
  <Layout>
    <SingleFetched />
    <Alsolike />
    <Designers />
  </Layout>
);

export default SinglePage;
