require('dotenv').config({
    path:'./src/.env'
})
const app = require('./app.js')

const port = process.env.PORT

app.listen(port,()=>{

    console.log(`Server is listening on port ${port}`);
})



