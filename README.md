# Eccomerce website V1.0

## Tecnologíes

This webapp is build using NextJS for the frontend, NodeJS for the backend server and mongoDB as data base.
Tailwind is included for the styles of frontend components.

## Steps

1.  Create the project
2.  Install tailwind using

        npm install -D tailwindcss postcss autoprefixer
        npx tailwindcss init -p

3.  Add extensions
4.  Upload to Github
5.  Build the layout

- Create layout component
- Add a header
- Add a main section
- Add a footer
- modify the eslint file
- Add Tailwind classes

6. List Products
   1. add data.js
   2. add images
   3. render products
7. Create Product Details
   1. create product page
   2. create 3 columns
   3. show image in first column
   4. show product info in second column
   5. show add to cart action on third column
   6. add styles
8. Handle Add To Cart
   1. define react context
   2. define cart items state
   3. create addd to cart action
   4. add reducer
   5. create store provider
   6. handle add to cart button
9. Create Cart Page
   1. create cart.js
   2. use context to get cart items
   3. list items in cart items
   4. redirect to cart screen after add to cart
10. Update Quantity In The Cart
    1. add select box for quantity
    2. handle select box change
11. Save Cart Items
    1. install js-cookie package
    2. save and retreive cart items in cookies
12. Create Login Form
    1. install react hook form
    2. create input boxes
    3. add login button
13. Connect To MongoDB
    1. install mongoose
    2. install mongodb or use mongodb atlas
    3. save connection url in .env file
    4. create db utils file
    5. create sample users
14. Create Login API
    1. install next-auth
    2. create nextauth.js
    3. implement signin
    4. use signin in login form

# NextSteps

1. make token expiration time short like 30 mins.
2. Use jwt refresh token to re-auth users. https://solidgeargroup.com/en/refresh-token-with-jwt-authentication-node-js/
3. encrypt data in cookies
