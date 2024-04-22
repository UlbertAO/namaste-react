any framework out there, what ever it is performing it can be done using html css js
even react,angular....

framework,library just optimise and make ease developer experience

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

if we update the variable and expect react will show it on the UI it is not the case

React HOOKS
are normal js function given by react and it comes with some super powers, utility function

- useState()=used to create superpowerfull state variable
- useEffect()
