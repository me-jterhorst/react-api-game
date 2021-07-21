import "./Header.css";

export default function Header({ title = "Title" }) {
  return (
    <header className="top">
      <h1>{title}</h1>
    </header>
  );
}
