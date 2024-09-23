// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//   },
//   "React first self- written code"
// );
// const root = ReactDOM.createRoot(document.querySelector("#root"));
// console.log(heading);

// //   react.render("root")
// root.render(heading);

const heading = React.createElement(
  "div",
  {
    id: "parent",
  },
  React.createElement(
    "div",
    {
      id: "child",
    },
    React.createElement(
      "div",
      {
        id: "sub-child",
      },
      React.createElement(
        "h1",
        {
          id: "heading",
        },
        "Ola Amigo! Kaise ho theek ho"
      )
    )
  )
);
const root = ReactDOM.createRoot(document.querySelector("#root"));
// heading.render(root);
root.render(heading);

/*
<div id= parent>
      <div id = child>
      <h1></h1>
           <div id = "sub-heading"> </div>
       </div>
</div>
*/
