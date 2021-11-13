const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors')
const axios = require('axios');


//Configureing the environment variables
const dotenv = require('dotenv')
dotenv.config()

const PORT = 8086

const app = express()
//Serving static files from dist folder
app.use(express.static('dist'))
//Handling cors between front and back
app.use(cors())
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())



app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

//handling requesting sentiment
app.post('/sentiment', (req, resp) => {
    //User submited url
    console.log(req.body);
    const userUrl = req.body.data

    //calling api using fetch method
    axios(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=en&url=${userUrl}`)
        .then((response) => {
            const result = response.data
            resp.send({
                text: result.sentence_list[0].text,
                score_tag: result.score_tag,
                agreement: result.agreement,
                subjectivity: result.subjectivity,
                confidence: result.confidence,
                irony: result.irony
            })
        })
        .catch(error => console.log(error))
})

app.get('/test', function (req, res) {
    console.log(1)
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

//exporting app to use it in the unit testing
module.exports = app
