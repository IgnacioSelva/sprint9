const express = require("express");

const { getTarea, updateTask, tareaPorId } = require("../controllers/functions");


const router = express.Router();

router.get("/getTarea", getTarea);
router.post("/updateTask/:id", updateTask);
router.get("/tareaPorId/:id", tareaPorId);

module.exports = router;