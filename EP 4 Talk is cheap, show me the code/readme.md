project based learning

build zomato swigy type app
namaste food

planning phase :plan how app should look like

after high level planning we can go for low level planning like what components we can have

- Header
  - Logo
  - Nav items
- Body

  - Search
  - RestaurantContainer
    - RestaurandCard
      - img, rating, name, delivery time

- Footer
  - Copyright
  - Links
  - Address
  - Contact

we create a function so that we can reuse it
in the similar way we create a component so that we can reuse it.

# props

props means property
pass data to any component dynamically using props concept

at the end of the day fucntional component are functions and props are nothing but arguments to function

# CONFIG DRIVEN UI, DATA DRIVENT UI

it simply means UI will change based on data
like in swiggy app for different location different data comes (carausel, all restaurants etc...) and end user is shown different UI

key is required in map=> react uses key to render smartly

NOTE : react suggests do not use index as key