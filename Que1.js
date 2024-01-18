const { json } = require('express')
const http = require('http')
const port = 4020;
const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end('Welecome to men and women dummy data')
    }
    else if(req.url == '/men'){
        const options = {
            hostname: 'fakestoreapi.com',
            path: "/products/category/men's%20clothing?limit=10",
            method: "GET"
        }
        const Proreq = http.request(options,(Prores)=>{
           Prores.on('data',(data)=>{
            res.end(data.toString())
           })  
        })
        Proreq.on("error",(err)=>{
            console.log(err);
        })

        Proreq.end()
    }

    else if(req.url == '/women'){
        const options = {
            hostname:'fakestoreapi.com',
            path:"/products/category/women's%20clothing?limit=10",
            method: "GET"
        }

        const Woreq = http.request(options,(Wores)=>{
            Wores.on('data',(data)=>{
                res.end(data.toString())
            })
            Woreq.on('error',(err)=>{
                console.log(err);
            })
        })
        Woreq.end()
    }
    else{
        res.end('Page not found')
    }
})

server.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})