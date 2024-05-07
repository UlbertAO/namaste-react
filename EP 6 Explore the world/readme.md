Monolithik vs micro services

most follow microservice architecture for ease and many benifits

we will use api and use that data

there are 2 appraches

1. app loads -> call API->render it on UI
2. app loads->render ui->call API -> show it on UI =>this is better for UX

useEffect()= hook(normal js function provided by react )
useEffect(callbackFn,dependencyArr)

```
  useEffect(() => {
    console.log("useeffect called");
  }, []);
```

in above code dependency array is empty and callback function is called when component render finished only once
so here we can do things which we need to call after rendering

CORS plugin to bypass cors issue

call api using fetch resolve promise using
then & catch
or
async await

use optional chaining

now we want to show loader when list of restaurants is empty

why do we create state variable?
why normal js variable wont work?

- when we want our data to in sync with UI we need state variable
- normal js variable will get updated but will not be rendered on UI hence not dynamic
- when we are using normal js variable REACT wil not know when this variable is changed but in useState whenever set method is called then value is changed (diff is invoked and component is re rendered)

WHOLE COMPONENT IS REDERED

everytime is set method in usestate is invoked reconciliation process starts and component is re rended with updated object values
with diff react knows exactly what to update in object

search
searchValue we used as useState cuz we want to bind it to value og input so whenever its value chages it is in sync with UI
onchange is important cuz we need to update the new value of searchvalue everytime input is changed

on each onchange we set new value to searchValue so page will be rerendered each time
