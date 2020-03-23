const router = require("express").Router();
const {getAllUser, createUser} = require("../controllers/user_controller");

router.route("/create").post(createUser);

router.route("/get-all").get(getAllUser);

module.exports = router;