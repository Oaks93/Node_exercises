const express = require("express")
const app = express()
const dotenv = require("dotenv")

dotenv.config()

const port = process.env.PORT || 3000

app.use(express.json())

app.use((req, res, next)=>{
    console.log(`Received request: ${req.method} ${req.url}`);
    next()
})

app.get('/planets', (req, res) => {
    res.json(planetsDatabase);
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})


let planetsDatabase = [
    { id: 1, name: 'Mercury' },
    { id: 2, name: 'Venus' },
    { id: 3, name: 'Earth' },
    
];
