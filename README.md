### Setup
1. Make sure you have [Yarn](https://yarnpkg.com) and [Mongodb](https://www.mongodb.com) installed locally
2. Make sure your mongo server is running (`mongod`)

## Notes
1. I built this using babel-node to use ES6. This is great for development and testing, but apparently is very slow on production. If I were to start this challenge over, I would use ES25 syntax (should mainly just be changing ES6 `import` statements to commonJS `require()`)
