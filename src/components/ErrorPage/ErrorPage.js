import React from "react";
import "./ErrorPage.css";

function ErrorPage({ error }) {
  return (
    <h2 className="errorpage">Error occured{error ? `: ${error}` : ""}.</h2>
  );
}

export default ErrorPage;
