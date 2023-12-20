const express = require("express")
const router = express.Router()
const {homeName,homeQuery,homeParams }= require('../controllers/home')


router.post("/homeName",homeName)
router.post("/homeQuery",homeQuery)
router.post("/homeParams/:id",homeParams)

module.exports = router