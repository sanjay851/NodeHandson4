console.log("hello");
const express = require("express")

const app = express();

app.use(express.json())

app.use('/auth', require("./routes/auth"))
app.use('/posts', require("./routes/posts"))

app.get('/',(req,res)=>{
    res.send("Its working");
})


app.listen((5055), () => {
    console.log("Connecting on port 5055")
})
