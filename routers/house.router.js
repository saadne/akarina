const { Router } = require("express");
const { getHouse, createHouse, createProperty, createFeature } = require("../controllers/house.contorller");
const router = Router();

router.post("/", createHouse);
// router.get("/create-property", createFeature);
// router.get("/create-feature", createProperty);


// router.post("/", createHouse)
module.exports = router;