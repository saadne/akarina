const { Router } = require("express");
const { getHouse } = require("../controllers/house.contorller");
const router = Router();

router.get("/", getHouse)
module.exports = router;