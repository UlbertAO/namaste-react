any framework out there, what ever it is performing it can be done using html css js
even react,angular....

framework,library just optimise and make ease developer experience, write less do more

- React Hook \*

we will write sepereate components in seperate file
source code is kept in src

we structure our code for human understanding at the end of the day parcel will minify

js jsx wil make 0 difference parcel takes care

we can import exported components

> export default ComponentName

never keep hardcodede data in components
create a folder like config, common util whatever you like and put it there

named export
export const CDN_URL
import { CDN_URL } from "../utils/constants";

and

default export
export default restaurants;
import restaurants from "../utils/mockData";

---

if we update the normal js variable and expect react will show it on the UI it is not the case

state variable are superpoweful variable in react

## React HOOKS

- are normal js function given by react and it comes with some super powers, utility function

- useState()=used to create superpowerfull state variable {it maintains the local state of component, global state maintains application state}
- useEffect()

superpowerfull variable keeps ui in sync with data this is what we want
const [val, setVal]=useState([])
when a state variable updates/ changes react will re render component and UI is updated

logic of updating ui is called rerender

## Reconciliation algo (REACT fiber)

rest-container-->7 items
after filter(btn clicked)
rest-container-->3 items
v dom and a dom is compared (object comparrison is fast) then a dom is updated

virtual dom is representation of actual dom (nested js object)

## DIff algo

finds difference between virtual dom and actual dom

https://github.com/acdlite/react-fiber-architecture
