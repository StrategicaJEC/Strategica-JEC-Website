import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/seo";

import "./registration.css";
const Registration = () => {
  return (
    <Layout>
      <div className="container-fluid registration">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdOQc7dwBc-2enkiD0vYaqrsjE9dsQ0VJ-A-HkbBNvyyBk9Sw/viewform?embedded=true"
          scrolling="no"
          width="640"
          height="1600"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </Layout>
  );
};
export default Registration;
