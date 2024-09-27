import React from "react";
import Two from "./Two";

export default function One() {
  console.log("One");
  return (
    <div>
      <h1>Component One</h1>
      <Two />
    </div>
  );
}
