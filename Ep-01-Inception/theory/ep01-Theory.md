# Ep -01 Inception:-

### Diving deep into the technical concepts

## Tips:

1. Make your own notes
2. USe laptop
3. Make a github repository.

### Dive deep in:

#### Part 01:

## Questions:

1. What is CDN?
2. Why do need CDN?
3. What is cross origin?
4. D/f b/w react and react DOM?

## Points to remember:

> our browser doesn't know what react is and that's why we have to get react into our project.

> AT the end of the day react is the javascript library.

#### Part 02:

## Points to remember:

> It is as same as the create js element
> it contains 3 arguments.

1. What tag we need to use?
2. An object (basically an empty object)./attributes
3. what we have to put inside the h1 tag.
   > react element
   > 1 child simple wite 2. multiple child in an array.

> Creating a element is a core thing from react so its cpme from the first cdn link.
> But when we are creating the root and rendering somthing it is the job of react DOM.

> Root is the place where all the code is going to run.
> Everything that we'll render will render it inside the root.

```javascript
const heading = React.createElement("h1", {}, "Hello React!");
const root = ReactDOM.createRoot(document.querySelector("#root"));

//   react.render("root")
root.render(heading);
```

#### Part 03:

## Questions:

1. What is the missing object in the code?
2. What is the React.create element is given to us?
   > react element is nothing but a javascript object. here we have heading as a react element.
3. What are props?
   > Props are children + attributes that we passed.
4. What is cross origin?
5. What are react elements?

## Points to remember:

> What is the most important thing that has happend in the browser? === the manipulation of the trees.
> React comes with the philosphy of writing or manipulating DOM things using js/react.

#### Part 03:

1.  Creating something like:
