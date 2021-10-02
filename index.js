const express = require('express');
const app = express()
const port = process.env.PORT || 3000
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({ extended: true })) // check this again
app.set('views', path.join(__dirname, 'views')) //check this again
app.set('view engine', 'ejs') // check this again

comments = [
    {
        username: 'James',
        comment: 'That is amazing'
    },
    {
        username: 'Hamsa',
        comment: 'Wondeful experiment'
    },
    {
        username: 'Richard',
        comment: 'What is the agenda for this weekend'
    },
    {
        username: 'Chloe',
        comment: 'Just graduated YAY!!!'
    },
    {
        username: 'Julie',
        comment: 'Working out at the moment'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})



app.listen(port, () => {
    console.log(`We are live at http://localhost:${port}`)
})