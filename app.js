var express = require('express'),
  bodyParser = require('body-parser'),
  bookShelfApi = require('./server/bookShelfApi'),
  app = express(),
  
  IP = process.env.IP,
  PORT = process.env.PORT;

app.use(bodyParser());
app.use(express.static('.'));

app.get('/api/activeBooks', function (request, response) {
    response.send(bookShelfApi.getBooks(false));
});

app.get('/api/archivedBooks', function (request, response) {
    response.send(bookShelfApi.getBooks(true));
});

app.post('/api/books', function (request, response) {
    var newBook=request.body;
    if(!newBook.title){
        response.send(500,{errorText:'No data found to add'});
    }
    else {
        bookShelfApi.addABook(newBook);
        response.send(200, {message: 'New book added to the list'});
    }
});

app.put('/api/markRead/:id', function (request, response) {
    if(!request.params.id){
        response.send(500,{errorText:'BookId not sent'});
    }
    else if(request.body.read === undefined || request.body.read === null){
        response.send(500,{errorText:'No data found to edit'});
    }
    else{
        var modifiedBook = bookShelfApi.modifyReadStatus(parseInt(request.params.id), request.body.read);
        if(modifiedBook === null){
            response.send(500,{errorText:'Book not found in the list'});
        }
        else{
            response.send(modifiedBook);
        }
    }
});

app.put('/api/addToArchive/:id', function (request, response) {
    if(!request.params.id){
        response.send(500,{errorText:'Can\'t update book if id is not sent'});
    }
    else{
        var modifiedBook = bookShelfApi.addToArchive(parseInt(request.params.id));
        if(modifiedBook === null){
            response.send(500,{errorText:'Book not found in the list'});
        }
        else{
            response.send(modifiedBook);
        }
    }
});

app.get('/api/bookExists/:title', function (request, response) {
    if(!request.params.title){
        response.send(500, {errorText:'Can\'t check existence of book if title is not sent'});
    }
    else{
        response.send(bookShelfApi.bookExists(request.params.title));
    }
});

app.get('/', function (request, response) {
    response.sendfile('Index.html');
});

app.listen(PORT, IP, 
    function(){
        console.log("The server is run  on \n port :", PORT, "\n ip", IP);
    },
    function(err){
        console.log("Can't run server at :", PORT, "\n ip", IP, "\n ERROR : ", err);
    });