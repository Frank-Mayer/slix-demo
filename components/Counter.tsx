import React from "react";
import type { FC } from "react";
import { useState } from "@frank-mayer/slix";

export const Counter: FC = () => {
  const countState = useState("count", 0);
  return (
    <p
      onClick={() => {
        countState.value = countState.value + 1;
      }}
      style={{
        cursor: "pointer",
        border: "1px solid white",
        padding: "1rem 2rem",
      }}
    >
      {`You clicked ${countState.value} times`}
    </p>
  );
};
