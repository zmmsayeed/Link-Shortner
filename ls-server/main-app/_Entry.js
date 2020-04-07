const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const morgan = require('morgan')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'))

app.use('/', (req, res) => {
    res.send("Hello World")
})

if (app.get('env') === 'dev') {
    const port = process.env.port || 3001
    app.listen(port, () => {
        console.log(`server is running on ${port}`)
    })
}
else {
    module.exports = app
}
