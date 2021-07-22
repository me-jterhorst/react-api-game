import "./Main.css";
import Form from "./Form";
import { useState } from "react";

export default function Main() {
  const [personData, setPersonData] = useState();
  function getName(event) {
    // 1. Get Name
    event.preventDefault();
    const form = event.target;
    let inputName = form.name.value;

    const person = {};
    person.name = inputName;

    // 2. Get Age
    const ageUrl = inputName ? `https://api.agify.io?name=${inputName}` : "";
    fetch(ageUrl)
      .then((response) => response.json())
      .then((data) => {
        person.age = data.age;
      });

    // 3. Get Nation
    const nationUrl = inputName
      ? `https://api.nationalize.io?name=${inputName}`
      : "";
    fetch(nationUrl)
      .then((response) => response.json())
      .then((data) => {
        person.nation = data.country;
      });

    // 4. Get Gender
    const genderUrl = inputName
      ? `https://api.genderize.io?name=${inputName}`
      : "";
    fetch(genderUrl)
      .then((response) => response.json())
      .then((data) => {
        person.gender = data.gender;
        person.probability = data.probability;
      });

    //5. Reset Form
    form.reset();
    // 6. Write into global Object
    setPersonData(person);
  }
  console.log(personData);
  return (
    <main>
      <Form onSubmit={getName} />

      <section className="result">
        <h2>Result</h2>
        <p className="text">{personData ? personData.name : "Hello"}</p>
      </section>
    </main>
  );
}
