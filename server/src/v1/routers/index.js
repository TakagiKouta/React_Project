const router = require('express').Router();

router.use("/household", require("./household"));
router.use("/user", require("./user"));

module.exports = router;