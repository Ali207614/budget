const homeRouter = require("./home")
const expanseRouter =require("./expanse")
const balanceRouter =require("./balance")
const incomeRouter =require("./income")
module.exports = [
    homeRouter,
    expanseRouter,
    incomeRouter,
    balanceRouter
]