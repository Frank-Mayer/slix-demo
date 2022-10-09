import React from "react";
import { Slide, spinX } from "@frank-mayer/slix";
import { Counter } from "../components/Counter";

export const Slide02 = (
  <Slide
    transition={spinX}
    style={{
      backgroundColor: "#0093E9",
      backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    }}
  >
    <h1>Slide 2</h1>
    <p>Events and managed state</p>
    <Counter />
  </Slide>
);
