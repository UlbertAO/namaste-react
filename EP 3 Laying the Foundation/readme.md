we run our application using cmd

> npm parcel index.html

we will use npm scripts do do the same

```
  "scripts": {
    "test": "jest",
    "start": "parcel index.html",
    "build": "parcel build index.html"
  },
```

now run our app using

> npm run start
> npm run build

we can create element using createElement from React it will return un object.
we create a root object where we will render our react object and it will be converted to html

BUT creating elements like above is clumsy imagine nested ,not readable

here comes jsx where we create elements similar to html
jsx is not html inside js but we can say html like
jsx is syntax

> const jsxHeading = <h1 id="jsx">jsx heading</h1>;
> above code is valid and running but it is not valid javascript code as js engine will not be able to understand and throw syntax error

behind the scenes parcel is transpiling the code and browser receives the code that is undertandable by browsers
transpile means convert code from one to another which can be understood by (browser)

parcel gave the responsibility of transpiling to BABEL
it convert jsx to react.createelement obj which will be rendered
bable also supports old browser like es6 are not understood by them

NOTE if we have to pass any attribute to jsx we need to use camelCase
