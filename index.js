// express route structure
// app.METHOD(PATH, HANDLER)
// post(create),get(read),put(update), delete(delete)

app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.post('/', function (req, res) {
  res.send('Got a POST request')
})

app.put('/', function(req, res) {
  res.send('Got a put request at /user')
})

app.delete('/', function (req, res){
  res.send('Got a Delete request at /user')
})
