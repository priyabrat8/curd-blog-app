const express = require('express')
require('./db/mongoose')
const articleRouter = require('./routes/articles')
const Article = require('./models/articles')
const port = process.env.PORT || 3000

const app = express()

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/articles',articleRouter)


app.get('/', async (req,res) => {
    const articles = await Article.find().sort({createdAt: 'desc'})
    res.render('articles/index',{articles})
})

app.listen(port)