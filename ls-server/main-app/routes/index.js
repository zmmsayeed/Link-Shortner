const express = require('express');
const router = express.Router();

router.post('/createLink', (req, res) => {
    let { customToken } = req.body;

    if(customToken) 
        res.send("Hello from API");
    else 
        res.send("Hello wothout Token");
});

module.exports = { coreRoutes: router };