const express = require("express")
const app = express()
PORT = 6565
const search = {
GOOGLE : {
    NAME : 'GOOGLE' , 
    ABOUT_GOOGLE : 'GOOGLE IS AN SEARCH ENGINE MADE BY LARRY PAGE AND SERGIN BRIN' 
} ,
 'AKHAND PRATAP MISHRA' :{
    NAME : 'AKHAND PRATAP MISHRA' ,
'ABOUT AKHAND PRATAP MISHRA' : 'AKHAND PRATAP MISHRA IS A WEB DEVELOPER ' ,
HOBBY : 'SINGING AND CODING'
 }
}
app.get('/search' , (req ,res)=>{
console.log(req.query);
search_id = req.query.id
const search_res = search[search_id]
if (search_res) {
    res.status(200).send(search_res)
} else {
    res.status(500).send(console.log('TRY TO SEARCH SOME DIFFERENT KEYWORD , THAT KEYWORD NOT FOUND ON OUR SERVER '))
}
})
app.use(express.json())
app.post('/search' , (req , res)=>{
console.log(req.body);
search[req.body.id] = req.body
res.status(201).send(
    search[req.body.id]
)})
app.listen(PORT , ()=>{
    console.log('YOUR APP IS  RUNNING ON PORT NO. ' , PORT);
})