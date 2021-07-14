const express = require('express')
const app = express()
const Store = require("../models/store.model")

app.use(express.urlencoded({ extended: true }))


exports.createStore = async (req, res) => {
    console.log("store")
}