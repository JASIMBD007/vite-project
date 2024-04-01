import { Name } from "../Person.types";
type PersonListProps = {
  names: Name[];
};

export default function PersonList(props: PersonListProps) {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2 key={`${name.firstName}-${name.lastName}`}>
            {name.firstName} {name.lastName}
          </h2>
        );
      })}
    </div>
  );
}
