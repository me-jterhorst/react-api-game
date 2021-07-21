import "./Main.css";

export default function Main() {
  return (
    <main>
      <fom onSubmit={"submit"} className="queryForm">
        <input type="text" />
        <button type="submit">Search</button>
      </fom>

      <section className="result">
        <h2>Result</h2>
        <p className="text">Hello</p>
      </section>
    </main>
  );
}
