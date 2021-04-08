## About

This project aims to demostrate Micro Front Ends using Next.js

## How it works

It uses the traditional Next.js app powered with webpack 5 so as to make use of [Module Federation](https://webpack.js.org/concepts/module-federation/) a tool-based approach to implementing micro front-end architecture.

## Getting Started

To start with this project visit each directory and install the dependencies :

```bash
yarn install
```

then inside each directory run the development server:

```bash
yarn dev
```

this will spun up 3 servers on your local environment

| port      | App | Description   |
|  :----:        |    :----:   |           :---- |
| 3000      | home       | this app exposes a header component for consumption     |
| 3002   | footer        | this app exposes a footer component for consumption       |
| 3001  | pdp        | this app consumes the remote header and footer component running on port 3000 and 3002 and also renders its own local component to construct the PDP page      |

try accessing the project on your browser and it should look something like this

<img width="1361" alt="An image showing how the project looks on your local" src="https://user-images.githubusercontent.com/20018997/113967791-63416300-984f-11eb-91a7-ccfdf773cfdb.png">

Clicking on the footer in the PDP app should randomly update color of the page header,this demonstrates passing of information between two components running remotely that have been consumed by the 3rd app (pdp in this case)



### References

[https://martinfowler.com/articles/micro-frontends.html](https://martinfowler.com/articles/micro-frontends.html)


[https://www.youtube.com/watch?v=vX6EXi5I9LE](https://www.youtube.com/watch?v=vX6EXi5I9LE)
