const express = require('express');
const { addHouse, deleteHouse, updateHouse } = require('../controllers/house.controller');
const router = express.Router();
const House = require('../models/house.model')
const multer = require("multer");
const path = require("path");
// atigh code

const imageStorage = multer.diskStorage({
  // Destination to store image
  destination: "images",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
    // file.fieldname is name of the field (image)
    // path.extname get the uploaded file extension
  },
});

const imageUpload = multer({
  storage: imageStorage,
  limits: {
    fileSize: 1000000, // 1000000 Bytes = 1 MB
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      // upload only png and jpg format
      return cb(new Error("Please upload a Image"));
    }
    cb(undefined, true);
  },
});

router.get("/", (req, res) => {
  res.render("property/house", { title: "Ajouter Maison" });
});
router.post("/", imageUpload.single("image"), addHouse);

router.delete('/delete-house/:id', deleteHouse)

router.get('/update-house/:id', async (req, res) => {
    try {
        const house = await House.findOne({ where: { id: req.params.id } })

        res.render('property/editHouse', { title: 'Ajouter Maison', house })
    } catch (error) {
        console.log(error)
    }

})
router.post('/update-house/:id', updateHouse)

module.exports = router