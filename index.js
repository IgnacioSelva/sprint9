const express = require ('express')
const router = express.Router();



const { json, Router } = require('express');
const  taskRoutes  = require('./routes/taskRoutes');

const app = express()
app.use(express.json())


app.get('/',(req,res) => {
    res.json('hola mundo')
}
)
app.use("/api",taskRoutes);




app.listen(8080,()=> {
    console.log('Server listening in http://localhost:8080')
})

module.exports = router;
