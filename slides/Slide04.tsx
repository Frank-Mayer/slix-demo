import React from "react";
import { Slide, spinX } from "@frank-mayer/slix";

export const Slide04 = (
  <Slide
    transition={spinX}
    style={{
      backgroundColor: "#D9AFD9",
      backgroundImage: "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    }}
  >
    <h1>Slide 4</h1>
  </Slide>
);
