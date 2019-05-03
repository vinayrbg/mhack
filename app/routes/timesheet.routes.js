const router = require('express').Router();
const sheetController = require('../controllers/sheet.controller')

router.route("/")
.post(sheetController.create)

router.route("/:id")
.get(sheetController.get)
.put(sheetController.update)
.delete(sheetController.delete)

router.route("/:id/submit")
.post(sheetController.submit)

module.exports = router