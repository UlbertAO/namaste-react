## git setup

is our code in ep 1 ready to push to production? No cuz its not optimised
before we push the code to production we want to minify, bundeling, code spliting, chunking, remove cmnts, looots of things

## how to create production ready react app:(so many things go behind the scenes for production ready)

react itself can not make our react app production ready

npm is everything but not "node package manager" lol
npm manages packages hahhahahahahahahahhhahahaha

npm is bigest repository of all packages that you ll need

add npm to our project

> npm init

new file is created named package.json=> configuration for npm
why need it?? packages/dependencies versions and config level data are stored here for npm so it installs all
^ mean minor update
~ mmeans major update
most important package in our app is a bundler
what is it? before pushing code to production our code(html css,js) needs to be minified, cached,optimized,compressed,cleaned
so a bundler helps us do that
eg:webpack,parcel,vite,etc are bundler they package our app properly so that it can be shiped to production

its up to u which one to choose purpose is ame behind the scene they may use different algo to bundle
lets use parcel (easy to configure) it will ignite our app

> npm install -D parcel

there are 2 types of dependencies
-dev dependency : generally req in development environment/ phase
-normal dependency: used in production
bundeling is done on development phase -D mean install as dev dependecy

after installation there is one more file package-lock.json=> it resoves dependecies, keeps record of exact version

node_modules contains all the packages instelled by npm, actuall dependency in code

parcel as a project has its own dependencies those deps known as transetive dependencies

we do not put/push node_modules to production or github it can be regenerated again by package json
