const uuid = require('uuid');
const express = require('express');
const router = express.Router();

const db = require('../configs/dbconfig')

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
// console.log(makeid(5));

function check(tokenn) {
    return new Promise(async (resolve, reject) => {
        let checkToken = await db.getDb().collection('linkShortner').findOne({ 'token': tokenn });
        resolve(checkToken);
    })
}

function generate() {
    return new Promise(async (resolve, reject) => {
        let generatedToken = makeid(6);
        // let generatedToken = "hello12354";

        let checkToken = await check(generatedToken);

        // resolve(checkToken)
        if (!checkToken) {
            // console.log("New Token generated")
            resolve(generatedToken)
        }
        else {
            // console.log("Token already exists");
            generate();
        }
    })
}

router.post('/createLink', async (req, res) => {
    let { customToken } = req.body;

    // console.log("IP address that hit the API to create link: ", req.connection.remoteAddress)
    console.log("IP address that hit the API to create link: ", req.ip)

    if (customToken) {
        try {
            // Check if the token already exists
            let findData = await db.getDb().collection('linkShortner').findOne({ token: customToken });
            if (findData) {
                res.status(403).send({
                    status: 403,
                    success: false,
                    message: "Custom Token already exists."
                });
            }
            else {
                let insertedData = await db.getDb().collection('linkShortner').insertOne({
                    _id: uuid.v4(),
                    link: req.body.link,
                    token: customToken,
                    createdAt: new Date().toISOString(),
                });
                res.status(200).send({
                    success: true,
                    status: 200,
                    body: insertedData.ops[0]
                });
            }
        }
        catch (err) {
            res.status(500).send({
                success: false,
                status: 500,
                error: err,
                message: "Something went wrong!"
            })
        }
    }

    else {
        try {
            let token = await generate();
            // res.send("Hello without Token: " + token);

            let insertedData = await db.getDb().collection('linkShortner').insertOne({
                _id: uuid.v4(),
                link: req.body.link,
                token: token,
                createdAt: new Date().toISOString(),
            });
            res.status(200).send({
                success: true,
                status: 200,
                body: insertedData.ops[0]
            });
        }
        catch (err) {
            res.status(500).send({
                success: false,
                status: 500,
                error: err,
                message: "Something went wrong in generating token!"
            })
        }
    }

});

router.get('/redirect', async (req, res) => {
    try {
        let token = req.query.token
        if (token) {
            let findToken = await db.getDb().collection('linkShortner').findOne({ token: token })
            if (findToken) {
                res.redirect(301, findToken.link)
            }
            else {

            }
            res.redirect(301, "http://localhost:3000/")
        }
        else {
            res.redirect(301, "http://localhost:3000/")
        }
    }
    catch (error) {
        res.send({ error: error })
    }
    // res.redirect(301, "http://google.com")
});

module.exports = { coreRoutes: router };   