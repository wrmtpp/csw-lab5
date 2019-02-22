var express = require('express')
var app = express()

app.use(express.static(__dirname + '/image'));
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/fruit', function(req, res){
   res.render('fruit', {fruits: [{title :'Windows',img :'1.jpg'}, {title: 'OSX',img:'2.jpg'}, {title:'Android',img:'3.png'}, {title:'iOS', img:'4.jpg'}], com: 'Computer'})
})
app.listen(8000)