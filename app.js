const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

app.get("/sample", (req, res) => {
    res.json({
        message: "success"
    })
})

app.listen(8080, () => console.log("App is running on port 8080"))