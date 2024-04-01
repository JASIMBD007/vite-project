import "./App.css";
import Button from "./components/Button";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Greet from "./components/Greet";
import Heading from "./Heading";
import Oscar from "./components/Oscar";
import Input from "./components/Input";
import Container from "./components/Container";

function App() {
  const personName = {
    firstName: "Jasim",
    lastName: "Uddin",
  };

  const nameList = [
    {
      firstName: "Bruce",
      lastName: "Wayne",
    },
    {
      firstName: "Clark",
      lastName: "Kent",
    },
    {
      firstName: "Diana",
      lastName: "Prince",
    },
  ];

  return (
    <>
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />

      <Greet name="Jasim" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar Goes To Dicaprio</Heading>
      </Oscar>
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: "2px solid white", padding: "1rem" }} />
    </>
  );
}

export default App;
