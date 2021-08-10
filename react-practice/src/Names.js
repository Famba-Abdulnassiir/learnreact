import "./styles.css";

export default function Formartname() {
  function userName(user) {
    return user.firstName + " " + user.lastName;
  }

  const user = {
    firstName: "Famba",
    lastName: "Siraji"
  };

  const element = <h2>Formarted name {userName(user)}</h2>;
  return element;
}
