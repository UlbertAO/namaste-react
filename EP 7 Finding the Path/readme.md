we will be creating different pages on dirrefent url

/about->about page
/contactus-> contact us page

we will be using routing library

\*\* let's begin

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
