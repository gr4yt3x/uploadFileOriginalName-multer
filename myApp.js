const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');


var storage = multer.diskStorage({
    //destino do arquivo   
    destination: function(req, file, cb) { 
       cb(null, __dirname + '/uploads/');    
    }, //nome do arquivo; newDate = esta sendo utilizado para colocar a data/hora atual no nome do arquivo.
    filename: function (req, file, cb) { 
       cb(null , Date.now() + file.originalname);   
    }
 });

const upload = multer({storage: storage});



app.get('/',(req,res) => {
    res.sendFile(__dirname + '/main.html');
})

app.post('/upload', upload.single('file'), (req, res) => {
    res.send("file added successfully");
});

app.listen(3000);
