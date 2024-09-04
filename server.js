const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.render('form');
})

app.post('/showTodo', (req,res)=> {
    console.log(req.body);
    // console.log(typeof req.body.todo);
    res.render('index', req.body)
})

app.listen(8000, ()=>{
    console.log('Server is running on http://localhost:8000');
})