import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "React first self- written code Nupur Patwal is invincible She is richest women and the upcoming youngest CEO of MICROSOFT "
);
const root = ReactDOM.createRoot(document.querySelector("#root"));
console.log(heading);

//   react.render("root")
root.render(heading);
