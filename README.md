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
- MONGODB URL
- JWTTOKEN
- JWTEXPIRY