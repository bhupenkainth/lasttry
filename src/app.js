const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

//public static path
const static_path = path.join(__dirname, "../public");

app.set('view engine', 'hbs');
app.use(express.static(static_path));
//routing


app.get("", (req, res)=>{
    res.render('index')
})
app.get("/about", (req, res)=>{
    res.render('about')
})
app.get("/weather", (req, res)=>{
    res.render('weather')
})
app.get("*", (req, res)=>{
    res.render('error', {
        errorMsg: 'Oppps! Page Not Found'
    })
})

app.listen(port , () => {
    console.log(`listening to the port at ${port}`)
})