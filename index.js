let express = require('express')
let app = express()


app.get('/greeting/',(require,response)=> {response.send('Hello Stranger')

})

app.listen(8000)