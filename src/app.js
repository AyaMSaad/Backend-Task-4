var hbs = require ('hbs')
const express = require('express')
const app = express()

const port = process.env.PORT || 3000

const path = require ("path")
const publicDirectory =  path.join(__dirname , '../public')
app.use (express.static (publicDirectory))

const viewsDirectory = path.join (__dirname , "../temp/views" )
app.set( "views" , viewsDirectory)

const partialsPath = path.join (__dirname , "../temp/partials")
hbs.registerPartials(partialsPath)
app.set('view engine', 'hbs');

app.get('/' , (req , res) => {
    res.render('index' , {
        title: " Weather Forecast",
        desc : "Welcome to my website to know today's weather ",
    })
})

app.get('/weather' , (req , res) => {
    res.render('weather' , {
        title : "Today's Weather",
        desc: "See the weather in Egypt now and then",
        longitude : 29.871903452398,
        latitude: 26.4941838299718,
        Status: "Clear",
        country : "Egypt",
        Temperature : 34
    })
})

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})