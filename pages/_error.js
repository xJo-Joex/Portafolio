import React from "react";
import Layout from "../components/Layout";

const _error = ({ statusCode }) => {
  return (
    <Layout>
      {statusCode ? (
        <p className="text-center">
          Could not load your page: StatusCode {statusCode}
        </p>
      ) : (
        <p className="text-center">Could not load this page</p>
      )}
    </Layout>
  );
};

export default _error;
