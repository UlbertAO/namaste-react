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
