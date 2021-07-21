import "./Main.css";
import Form from "./Form";
import { useState } from "react";

export default function Main() {
  // Step 1 Getting the Name for Search Query
  const [name, setName] = useState("");

  function getName(event) {
    event.preventDefault();
    const nameFromInput = event.target.name.value;
    setName(nameFromInput);
    event.target.reset();
  }

  return (
    <main>
      <Form onSubmit={getName} />

      <section className="result">
        <h2>Result</h2>
        <p className="text">Hello</p>
      </section>
    </main>
  );
}
