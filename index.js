let express = require('express')
let app = express()


app.get('/greeting/:name',(request,response)=> {
	response.send(`Hello there ${request.params.name}, how's it going?`)

})

app.listen(8000)