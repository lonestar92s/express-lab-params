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


let responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
let randomResponse = (Math.floor(Math.random() * responses.length)) 


app.get('/magic/:question',(request,response)=> {
	response.send(`<p>${request.params.question}</p><p>${responses[randomResponse]}`)
})



app.listen(8000)








