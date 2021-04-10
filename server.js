const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const url = require('url')
const queryString = require('querystring')
const fs = require('fs')
const bodyParser = require('body-parser')

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db.sqlite')

app.use(express.static('static'))
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/history_arch', (req, res) => {
    res.render('history_arch')
})

app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/main-content', (req, res) => {
    res.render('main-content')
})

app.get('/updateData', (req, res) => {
    let sql = "SELECT * FROM Videos"

    db.all(sql, [], (er ,rows) => {
        if (er) console.log(er)
        else res.send(JSON.stringify(rows))
    }
    )
})

app.get('/page1', (req, res) => {
    res.render('page1')
})

app.get('/page2', (req, res) => {
    res.render('page2')
})

app.get('/page3', (req, res) => {
    res.render('page3')
})

app.get('/page4', (req, res) => {
    res.render('page4')
})

app.get('/page5', (req, res) => {
    res.render('page5')
})

app.get('/page6', (req, res) => {
    res.render('page6')
})

app.get('/page7', (req, res) => {
    res.render('page7')
})

app.get('/page8', (req, res) => {
    res.render('page8')
})

app.get('/page9', (req, res) => {
    res.render('page9')
})

app.get('/page10', (req, res) => {
    res.render('page10')
})

app.get('/page11', (req, res) => {
    res.render('page11')
})

app.get('/page12', (req, res) => {
    res.render('page12')
})

app.get('*', function(req, res){
    res.render('404');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
