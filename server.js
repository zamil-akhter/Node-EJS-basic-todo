const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.get('/', (req,res)=>{
    // let data = {
    //     username : 'Zamil Akhter',
    //     tasks: ['Buy groceries', 'Clean the house', 'Finish project']
    // }
    res.render('form');
    // console.log(res)

})

app.post('/showTodo', (req,res)=> {
    console.log(req.body);
    let data = {...req.body};
    // console.log('ddddddddddddddddd',data);
    
    res.render('index', data)
})

app.listen(8000, ()=>{
    console.log('Server is running on http://localhost:8000');
})