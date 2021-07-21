import "./Form.css";

export default function Form({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="queryForm">
      <input name="name" id="name" type="text" />
      <button type="submit">Search</button>
    </form>
  );
}
