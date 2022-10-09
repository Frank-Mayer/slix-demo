import React from "react";
import { Slide, spinX } from "@frank-mayer/slix";
import { Typer } from "../components/Typer";

export const Slide01 = (
  <Slide
    transition={spinX}
    style={{
      backgroundColor: "#4158D0",
      backgroundImage:
        "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    }}
  >
    <h1>Slide 1</h1>
    <Typer>React powered Slides Framework</Typer>
    <p>Use the right arrow key to get to the next slide</p>
    <img
      style={{
        width: "15vmin",
        height: "15vmin",
      }}
      src="https://raw.githubusercontent.com/Frank-Mayer/slix/main/favicon.svg"
    />
  </Slide>
);
