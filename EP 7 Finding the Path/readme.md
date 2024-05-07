we will be creating different pages on dirrefent url

/about->about page
/contactus-> contact us page

we will be using routing library

## let's begin

lets dive deep into useEffect and useState hooks

How useEffect is called?

- useEffect(cb,depArray)

everytime component is rendered useEffect will be called since there is dependecy Array it changes the behaviour of useEffect reder
dep array is not mandatory

```
  useEffect(() => {
    console.log(
      "It will be called every time Header component is rendered cuz no dependecy array"
    );
  });

  useEffect(() => {
    console.log(
      "It will be called only once when Header component is first time rendered cuz  dependecy array [] empty"
    );
  }, []);

  useEffect(() => {
    console.log(
      "It will be called when btnName changes"
    );
  }, [btnName]);
```

when we put something inside dependecy array then useEffect cb will be called only when it changes

# useState

- never use useState outside of you component, it is used to create local state variable for a component
- always use it on top, cuz js is synchronus single threaded lang
- never create it inside any condition, loop, funtion , they are meant to be created on functional component on top level

## create routes in the application

npm js library "react-router-dom"

how to install it in application?

> npm i react-router-dom

let us create about us page on /about route

for creating routing we will go to app.js root level component
over here we will have to make routing configuration

whenever we need to create routes we need to make routing configurations

import { createBrowserRouter } from "react-router-dom";
it will help use create routing configuration

```
const appRouter = createBrowserRouter([
  { path: "/", element: <AppLayout /> },
  { path: "/about", element: <About /> },
]);
```

just creating configuration wont work we need to pass itor provide it in order to render it on ui
to provide routing configuration to app, we will use RouterProvider from react-router-dom

earlier we were rendering applayout directly now we will provide our routing configuration
root.render(<RouterProvider router={appRouter} />);

there exist many create router but reccommentded is createBrowserRouter

when we hit any random route react-router-dom handels it but we should create our own 404 page
errorElement:
{ path: "/", element: <AppLayout />, errorElement: <Error /> },
if / this path have any route error errorElement will be loaded

hook is a function at the end of the day which have specific purpose
react-router-dom provides a hook useRouteError -> gives more info about our error
