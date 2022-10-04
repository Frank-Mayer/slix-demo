import React from "react";
import type { FC } from "react";

export const Counter: FC = () => {
  const [count, setCount] = React.useState(0);
  return (
    <p
      onClick={() => {
        setCount(count + 1);
      }}
      style={{
        cursor: "pointer",
        border: "1px solid white",
        padding: "1rem 2rem",
      }}
    >
      {`You clicked ${count} times`}
    </p>
  );
};
