let express = require('express')
let app = express()
let tipCalc = function(total,tipPercent){
	return total * (tipPercent/100)
}

app.get('/greeting/:name',(request,response)=> {
	response.send(`Hello there ${request.params.name}, how's it going?`)

})


app.get('/tip/:total/:tipPercent',(request,response)=> {
	response.send(`Your tip is ${tipCalc(request.params.total,request.params.tipPercent)} dollars. `)

})

app.listen(8000)








