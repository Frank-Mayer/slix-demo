import React from "react";
import { slix, resetCss, ArrowController } from "@frank-mayer/slix";
import { Slide01 } from "./slides/slide01";
import { Slide02 } from "./slides/slide02";
import { Slide03 } from "./slides/Slide03";
import { Slide04 } from "./slides/Slide04";

slix({
  slides: new Map([
    [1, <Slide01 />],
    [2, <Slide02 />],
    [3, <Slide03 />],
    [4, <Slide04 />],
  ]),
  initialSlide: 1,
}).then((slixInstance) => {
  ArrowController.attach(slixInstance);
});

resetCss();
