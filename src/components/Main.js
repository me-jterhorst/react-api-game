import "./Main.css";
import Form from "./Form";
import { useState } from "react";

export default function Main() {
  return (
    <main>
      <Form onSubmit={() => console.log("submit")} />

      <section className="result">
        <h2>Result</h2>
        <p className="text">Hello</p>
      </section>
    </main>
  );
}
