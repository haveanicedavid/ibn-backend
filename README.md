### Setup
1. Make sure you have [Yarn](https://yarnpkg.com) and [Mongodb](https://www.mongodb.com) installed locally
2. Run `yarn` to install dependencies
3. Make sure your mongo server is running (`mongod`)
4. in one terminal tab, run `yarn mongo`. In another, run `yarn dev`
5. Run tests with `yarn test`

## Summary
During my interview, I worry I sold myself as being a primarily front-end developer. While I do enjoy the front-end, I love programming and problem solving in general, and am comfortable in the full stack. It was my goal to make that apparent with this project.

The majority of my time working on this has been spent doing research. While I had very limited exposure to MERN before this project, I am now comfortable in the stack.

## Notes
* I built this using babel-node to use ES6. This is great for development and testing, but apparently is very slow on production. If I were to start this challenge over, I would use ES5 syntax (refactoring should mainly just be changing ES6 `import` statements to commonJS `require()`)
* I intentionally abstracted out many aspects of this app (models, routes, controllers, middleware) in an attempt to show how I would make the back-end scalable. If you would like, i'm happy to refactor to show how i'd arrange things in a less abstract way,
* The challenge spec asked to include Coincap.io as one of the endpoints, but I couldn't get pricing info for ETH an DSH off of the API, so couldn't calculate the exchange rate.
* I structured files in a way that I thought would mimick React components, with 
