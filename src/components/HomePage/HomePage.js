import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage">
      <h1 className="homepage__title">Pulse On Music</h1>
      <p className="homepage__text">
        Deserunt non incididunt excepteur laboris. Non proident incididunt Lorem
        reprehenderit magna dolore ullamco Lorem ipsum consequat id. Sunt quis
        esse occaecat eu ut. Aliqua nisi aliquip reprehenderit Lorem enim
        consectetur mollit cupidatat.
      </p>
      <p className="homepage__text">
        Deserunt non incididunt excepteur laboris. Non proident incididunt Lorem
        reprehenderit magna dolore ullamco Lorem ipsum consequat id. Sunt quis
        esse occaecat eu ut. Aliqua nisi aliquip reprehenderit Lorem enim
        consectetur mollit cupidatat.
      </p>
      <div className="homepage__factoids">
        <div className="homepage__factoid_group">
          <span className="homepage__factoid">450</span>
          <span className="homepage__factoid_text">
            sunt quis esse occaecat eu ut
          </span>
        </div>
        <div className="homepage__factoid_group">
          <span className="homepage__factoid">135</span>
          <span className="homepage__factoid_text">
            deserunt non incididunt laboris
          </span>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
