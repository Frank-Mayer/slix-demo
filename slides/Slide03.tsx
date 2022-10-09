import React from "react";
import { Slide, spinX } from "@frank-mayer/slix";

export const Slide03 = (
  <Slide
    transition={spinX}
    style={{
      backgroundColor: "#8EC5FC",
      backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    }}
  >
    <h1>Slide 3</h1>
    <p>Use the dot key start the control panel</p>
    <p>Use the f key start the fullscreen mode</p>
  </Slide>
);
