const { Router } = require("express");
const { createStore } = require("../controllers/store.controller");
const router = Router();

router.post("/create-store", createStore)
module.exports = router;