const model = require("./model.js")

const GET = async (req,res) => {
    res.render('expanse.html' , { expanse :await model.getExpanse()})
}

const POST = async (req,res) => {
    try{
        let data = await model.insertExpanse(req.body)
        res.redirect("/expanse")
    }
    catch(err){
        res.status(401).json({message: err.message })
    }
}

const DELETE = async (req,res) => {
    console.log(req.params)
    try{
        let data = await model.deleteExpanse(req.params)
        res.redirect("/expanse")
    }
    catch(err){
        res.status(401).json({message: err.message })
    }
}

module.exports = {
    GET,
    POST,
    DELETE
}