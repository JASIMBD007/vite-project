import { CSSProperties } from "react";

type ContainerProps = {
  styles: CSSProperties;
};

export default function Container(props: ContainerProps) {
  return (
    <div style={props.styles}>
      <h2>Container</h2>
    </div>
  );
}
