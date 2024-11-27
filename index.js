const express = require("express");
const cors = require("cors")
const app = express()


app.use(cors())


app.get("/version", (req, res) => {
    res.status(200).json({ v: 1, status: "success" })
})

app.listen(5500, () => {
    console.log("App running on port 5500")
})
