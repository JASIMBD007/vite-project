import { PersonProps } from "../Person.types";

export default function Person({ name }: PersonProps) {
  return (
    <div>
      <h1>First Name: {name.firstName}</h1>
      <h1>Last Name: {name.lastName}</h1>
    </div>
  );
}
