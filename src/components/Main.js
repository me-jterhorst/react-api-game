import "./Main.css";
import Form from "./Form";
import { useState, useEffect } from "react";

export default function Main() {
  // Step 1 Getting the Name for Search Query
  const [name, setName] = useState("");

  function getName(event) {
    event.preventDefault();
    const nameFromInput = event.target.name.value;
    setName(nameFromInput);
    event.target.reset();
  }

  //GENDER API CALL
  useEffect(() => {
    if (name) {
      const url = `https://api.genderize.io?name=${name}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  }, [name]);
  // AGE
  useEffect(() => {
    if (name) {
      const url = `https://api.agify.io?name=${name}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  }, [name]);

  // Nationality
  useEffect(() => {
    if (name) {
      const url = `https://api.nationalize.io?name=${name}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  }, [name]);

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
