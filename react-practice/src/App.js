import "./styles.css";

export default function App() {
  const name = "Famba Abdulnassiir";
  const element = <h1>Hello, {name}</h1>;
  return <div className="App">{element}</div>;
}
