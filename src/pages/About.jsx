import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function About() {
  return (
    <Card>
      <div className="about">
        <h1>About this is project</h1>
        <p>This is the react app to leave feedback for a project or service</p>
        <p>Version: 1.0.0</p>

        <p>
          <Link to="/">Back to home</Link>
        </p>
      </div>
    </Card>
  );
}

export default About;
