const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

app.listen(8080,()=>{
    try {
        console.log("Connected to port 8080")
    } catch (error) {
        console.log("Error")
    }
})
