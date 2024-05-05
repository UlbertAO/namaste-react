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

in above code dependency array is empty and callback function is called when component render finished
so here we can do things which we need to call after rendering

call api using fetch resolve promise using
then & catch
or
async await

use optional chaining
