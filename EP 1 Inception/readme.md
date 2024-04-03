lets create hello world in html
vs code uses something known as * emmet : *vs code generated some code for you
html:5 or !

Now lets modify our html to show hello world using javascript

Now we will create hellow world in react, since our project and browser does not know react we have to import it
via cdn we can import, now we have react inside our app, now browser will understand code written in react using rect

      src="https://unpkg.com/react@18/umd/react.development.js"=> react core code React

      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" react code which deals with dom manipulation

React DOM will need place to render things "ReactDOM.createRoot(document.getElementById("root"))"

create app.js and put all react code there

All frameworks and library work on some philosophy to optimise some expensive task
react wanted to deal with most expensive operation that is happened on a application that is when dom is getting change and dom tree is re rendered at that time entire dom tree need to be created
