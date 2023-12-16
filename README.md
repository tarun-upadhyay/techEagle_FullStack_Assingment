<h1 align="center">
🌐 MERN Stack App
</h1>
<p align="center">
MongoDB, Expressjs, React/Redux, Nodejs
</p>

<p align="center">
   <a href="https://github.com/amazingandyyy/mern/blob/master/LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-green.svg" />
   </a>
   <a href="https://circleci.com/gh/amazingandyyy/mern">
      <img src="https://circleci.com/gh/amazingandyyy/mern.svg?style=svg" />
   </a>
</p>

> MERN is a fullstack implementation in MongoDB, Expressjs, React/Redux, Nodejs.

MERN stack is the idea of using Javascript/Node for fullstack web development.

# Tech Eagle Full Stack Coding Assignment.

---

This Ecommerce Website project represents a robust platform that integrates backend and frontend technologies to offer a seamless online shopping experience. Leveraging Node.js for the backend, React.js for the frontend, and MongoDB for the database, this application encompasses a comprehensive set of functionalities catering to both customers and managers.

---

## Requirements

- For development, you will only need Node.js and a node global package, NPM, installed in your environement.

## Clone or Download

```terminal
$ git clone https://github.com/tarun-upadhyay/techEagle_FullStack_Assingment.git
$ yarn # or npm i
```

## Project structure

```terminal
frontend
    - package.json
    - src
        - index.js
        - App.jsx
     - Components
     - Pages
         ---
backend
    - package.json
    - app.js
    - controller
        - authController.js
        - allother controles..
    - DB
       - db.config.js
...
```

## Client-side usage(PORT: 3000)

```terminal
$ cd frontend          // go to frontend folder
$ yarn # or npm i     // npm install packages
$ npm start          // run it locally
```

## Server-side usage(PORT: 5000 || 8080)

```
$ cd backend          // go to client folder
$ yarn # or npm i    // npm install packages
$ npm start        // run it locally
```

### Prepare your secret

- Inside ->.env
- MONGO_URI
- JWT_SECRET
- JWT_LIFETIME

---

# Features.

### We have created this application for two different types of users such as Manager and customer.

# Customer

- Homepage of Customer's website
  
  ![Alt text](image-5.png)

1. The website provides product information along with price information.

   ![Alt text](image.png)

2. Detailed description of the product

   ![Alt text](image-1.png)

3. For adding to cart we have to login first or signup first.
   
   ![Alt text](image-2.png)  
   ![Alt text](image-3.png)
4. If we logined successfully so We will get the name of top right corner
   
   ![Alt text](image-4.png)
5. Suppose you logined successfully and you are adding to your cart then you get pop.
   
   ![Alt text](image-6.png)
6. If already present inside your cart then you will get errror message
   
   ![Alt text](image-7.png)
7. Come to Cart section if you cart is empty you will see like this
   
   ![Alt text](image-8.png)  
   and have some stuff inside it.

   ![Alt text](image-9.png)
   here you can increase quantity or delete it.

   ![Alt text](image-10.png)
8. Now it's time to place your order simply click on place order button.
   
   ![Alt text](image-11.png)
9.  This is the order page which show case the all ordered items and their status.
    
   ![Alt text](image-12.png)
   ![Alt text](image-14.png)
10. The order status will change when mangaer accepts it, suppose it accepted or changed status.

  ![Alt text](image-15.png)

### The features I showed are for customers, if products do not load or orders do not appear, please wait for a few minutes. It's a cyclical issue that will be resolved after some time.

---
# Manager