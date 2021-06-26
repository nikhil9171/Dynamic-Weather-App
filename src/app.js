const express = require('express');
const { join } = require('path');
const path = require('path');
const hbs = require('hbs');
const { partials } = require('handlebars');
const app = express();
const port = 3000
const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.set('view engine' , 'hbs');

app.set('views',template_path)
app.use(express.static(static_path));
hbs.registerPartials(partials_path);

app.get("",(req,res) =>{
    res.render('index.hbs');
})
app.get("/about",(req,res) =>{
    res.render('about.hbs');
})
app.get("/weather",(req,res) =>{
    res.render('weather');
})
app.get("*",(req,res) =>{
    res.render("404error",{
        errorMsg: 'OOPS Page not found!'
    });
})
app.listen(port ,() =>{
    console.log(`listening to ${port}`)
});