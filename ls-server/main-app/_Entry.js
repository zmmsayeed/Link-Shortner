const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const morgan = require('morgan')

// Database configuration file
const db = require('./configs/dbconfig');

// Route files
const { coreRoutes } = require('./routes');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'))

app.use('/', coreRoutes)

if (app.get('env') === 'dev') {
    db.connect((err) => {
        if(err) {
            console.log("Unable to connect to the database!")
        }
        else {
            const port = process.env.port || 3001
            app.listen(port, () => {
                console.log(`server is running on ${port}`)
            })            
        }
    })
}
else {
    module.exports = app
}
